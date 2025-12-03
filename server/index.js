import express from 'express'
import dotenv from 'dotenv'
import Stripe from 'stripe'
import { handleSuccessfulPurchase } from './purchaseFulfillment.js'

dotenv.config()

const app = express()
app.use(express.json())

const isDev = process.env.NODE_ENV !== 'production'
const stripeKey = process.env.STRIPE_SECRET_KEY
if (!stripeKey) {
  const msg = 'STRIPE_SECRET_KEY not set. Set it in your environment before using Stripe endpoints.'
  if (isDev) console.warn(msg)
  else throw new Error(msg)
}

const stripe = new Stripe(stripeKey, { apiVersion: '2022-11-15' })

// ============================================
// STRIPE ATLAS ENDPOINT (existing)
// ============================================
app.post('/api/stripe-atlas/create', async (req, res) => {
  try {
    const { company } = req.body
    if (!company) return res.status(400).json({ error: 'company object required in body' })

    const account = await stripe.accounts.create({
      type: 'custom',
      business_type: 'company',
      company,
      capabilities: {
        card_payments: { requested: true },
        transfers: { requested: true }
      }
    })

    return res.json({ account })
  } catch (err) {
    console.error('Error creating stripe account', err)
    return res.status(500).json({ error: err instanceof Error ? err.message : String(err) })
  }
})

// ============================================
// STRIPE CHECKOUT CONFIGURATION
// ============================================
// Pryima presale packages with product IDs and amounts in cents
const PRODUCTS = {
  GENETICS_ONLY: {
    product: 'prod_TXBTKEZ8YsIxf4',
    unit_amount: 24900, // $249.00
    displayName: 'SelfDecode-only Genetics',
    tierName: 'Genetics-only'
  },
  TIER1: {
    product: 'prod_TXBUnCRY2Qo6j4',
    unit_amount: 50000, // $500.00
    displayName: 'Founding Tier 1',
    tierName: 'Founding Tier 1'
  },
  TIER2: {
    product: 'prod_TXBVCwbnp81ICA',
    unit_amount: 149900, // $1,499.00
    displayName: 'Founding Tier 2',
    tierName: 'Founding Tier 2'
  },
  TIER3: {
    product: 'prod_TXBVAaK01Ct94P',
    unit_amount: 349900, // $3,499.00
    displayName: 'Founding Tier 3',
    tierName: 'Founding Tier 3'
  }
}

// ============================================
// HELPER FUNCTIONS
// ============================================

/**
 * Validate that a tier is one of the allowed products
 */
function isValidTier(tier) {
  return Object.prototype.hasOwnProperty.call(PRODUCTS, tier)
}

/**
 * Get all valid tier keys
 */
function getValidTiers() {
  return Object.keys(PRODUCTS)
}

/**
 * Basic email validation
 */
function isValidEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return emailRegex.test(email)
}

/**
 * Handle a successful purchase (called from webhook)
 * Replace this with your actual business logic:
 * - Create/update user in database
 * - Mark user as paid for tier
 * - Send welcome email
 * - Add to onboarding queue
 * - Sync with CRM, email lists, etc.
 */
async function handleSuccessfulPurchase({ tier, tierName, customerEmail, sessionId }) {
  if (isDev) {
    console.log('\n📦 Purchase Successful:', {
      tier,
      tierName,
      customerEmail,
      sessionId,
      timestamp: new Date().toISOString()
    })
  }

  // TODO: Implement your business logic here:
  // 1. Create/update user record
  // 2. Mark user as paid for this tier
  // 3. Send welcome email
  // 4. Create onboarding record
  // 5. Sync with external services

  // Example stubbed implementation:
  // const user = await db.users.upsert({
  //   email: customerEmail,
  //   tier,
  //   stripeSessionId: sessionId,
  //   paidAt: new Date(),
  // })
  // await sendWelcomeEmail(customerEmail, tierName)
}

/**
 * Standardized error response
 */
function errorResponse(message) {
  return {
    error: message,
    timestamp: new Date().toISOString()
  }
}

// ============================================
// STRIPE CHECKOUT ENDPOINT
// ============================================

/**
 * POST /api/checkout_sessions
 * Create a Stripe Checkout Session for a Pryima package
 *
 * Request: { tier: string, customerEmail?: string }
 * Response: { url: string } - Redirect user to this URL
 */
app.post('/api/checkout_sessions', async (req, res) => {
  try {
    const { tier, customerEmail } = req.body || {}

    // Validate tier is provided
    if (!tier) {
      return res.status(400).json(
        errorResponse(`tier is required. Must be one of: ${getValidTiers().join(', ')}`)
      )
    }

    // Validate tier is valid
    if (!isValidTier(tier)) {
      return res.status(400).json(
        errorResponse(`Invalid tier: '${tier}'. Must be one of: ${getValidTiers().join(', ')}`)
      )
    }

    // Validate email format if provided
    if (customerEmail && !isValidEmail(customerEmail)) {
      return res.status(400).json(errorResponse('Invalid email format'))
    }

    const config = PRODUCTS[tier]
    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:5173'

    if (isDev) {
      console.log(`\n🛒 Creating Checkout Session`)
      console.log(`   Tier: ${config.displayName}`)
      console.log(`   Amount: $${(config.unit_amount / 100).toFixed(2)}`)
      if (customerEmail) console.log(`   Email: ${customerEmail}`)
    }

    // Create Stripe Checkout Session using product IDs and price_data
    const session = await stripe.checkout.sessions.create({
      mode: 'payment',
      payment_method_types: ['card'],
      line_items: [
        {
          price_data: {
            currency: 'usd',
            product: config.product,
            unit_amount: config.unit_amount
          },
          quantity: 1
        }
      ],
      // Redirect URLs after checkout
      success_url: `${baseUrl}/checkout/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${baseUrl}/checkout/canceled`,
      // Pre-fill customer email
      customer_email: customerEmail || undefined,
      // Store metadata for webhook processing
      metadata: {
        tier,
        tierName: config.tierName,
        displayName: config.displayName
      }
    })

    if (isDev) {
      console.log(`✅ Session created: ${session.id}\n`)
    }

    return res.json({ url: session.url })
  } catch (err) {
    console.error('❌ Error creating checkout session:', err.message || err)
    const message = isDev ? err.message : 'Failed to create checkout session. Please try again.'
    return res.status(500).json(errorResponse(message))
  }
})

/**
 * GET /api/checkout/session-details?session_id=...
 * Retrieve checkout session details for displaying on success page
 * Returns: customer_email, tier info, amount_total, status
 */
app.get('/api/checkout/session-details', async (req, res) => {
  try {
    const { session_id } = req.query

    if (!session_id) {
      return res.status(400).json(errorResponse('session_id query parameter is required'))
    }

    // Retrieve session from Stripe
    const session = await stripe.checkout.sessions.retrieve(session_id, {
      expand: ['line_items']
    })

    if (!session) {
      return res.status(404).json(errorResponse('Session not found'))
    }

    // Extract relevant details
    const details = {
      sessionId: session.id,
      customerEmail: session.customer_email,
      tier: session.metadata?.tier,
      tierName: session.metadata?.tierName,
      displayName: session.metadata?.displayName,
      amountTotal: session.amount_total,
      amountSubtotal: session.amount_subtotal,
      currency: session.currency,
      status: session.payment_status,
      createdAt: new Date(session.created * 1000).toISOString(),
      completedAt: session.payment_status === 'paid' ? new Date().toISOString() : null
    }

    if (isDev) {
      console.log('📋 Session details retrieved:', {
        sessionId: session_id,
        email: details.customerEmail,
        tier: details.tier,
        amount: `$${(details.amountTotal / 100).toFixed(2)}`
      })
    }

    return res.json(details)
  } catch (err) {
    console.error('❌ Error retrieving session details:', err.message || err)
    const message = isDev ? err.message : 'Failed to retrieve session details'
    return res.status(500).json(errorResponse(message))
  }
})

// ============================================
// STRIPE WEBHOOK
// ============================================

/**
 * POST /api/stripe/webhook
 * Receive and process Stripe events
 * Uses raw body for signature verification (MUST bypass JSON parsing)
 */
app.post('/api/stripe/webhook', express.raw({ type: 'application/json' }), async (req, res) => {
  const sig = req.headers['stripe-signature']
  const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET

  if (!webhookSecret) {
    console.error('❌ STRIPE_WEBHOOK_SECRET is not set. Webhook verification disabled.')
    if (!isDev) {
      return res.status(400).json({ error: 'Webhook secret not configured' })
    }
  }

  let event
  try {
    // Verify webhook signature using raw body
    if (webhookSecret) {
      event = stripe.webhooks.constructEvent(req.body, sig, webhookSecret)
      if (isDev) console.log(`✓ Webhook signature verified: ${event.id}`)
    } else {
      // Fallback for development without signing secret
      if (isDev) console.warn('⚠️  Processing webhook without signature verification (dev mode)')
      event = JSON.parse(req.body.toString())
    }
  } catch (err) {
    console.error('❌ Webhook signature verification failed:', err.message)
    return res.status(400).json({ error: `Webhook Error: ${err.message}` })
  }

  if (isDev) {
    console.log(`\n📨 Webhook received: ${event.type}`)
  }

  // Process checkout.session.completed event
  if (event.type === 'checkout.session.completed') {
    const session = event.data.object
    try {
      // Retrieve full session details including line items
      const sessionDetails = await stripe.checkout.sessions.retrieve(session.id, {
        expand: ['line_items']
      })

      // Extract purchase information from metadata and session
      const tier = sessionDetails.metadata?.tier || 'unknown'
      const tierName = sessionDetails.metadata?.tierName || 'unknown'
      const customerEmail = sessionDetails.customer_email
      const sessionId = sessionDetails.id
      const amount = sessionDetails.amount_total || 0

      if (isDev) {
        console.log('✅ Payment completed:', {
          tier,
          tierName,
          customerEmail,
          amount: `$${(amount / 100).toFixed(2)}`,
          sessionId
        })
      }

      // Call purchase fulfillment handler
      await handleSuccessfulPurchase({
        tier,
        tierName,
        customerEmail,
        sessionId,
        amount
      })

    } catch (err) {
      console.error('❌ Error processing purchase:', err.message || err)
      // Continue and return 200 to prevent Stripe retries
    }
  }

  // Always return 200 to acknowledge receipt
  // Stripe will retry unacknowledged webhooks
  res.json({ received: true })
})

// ============================================
// START SERVER
// ============================================
const port = process.env.PORT || 4242
app.listen(port, () => {
  console.log(`\n✓ Server listening on http://localhost:${port}`)
  console.log(`  - Stripe Atlas: POST /api/stripe-atlas/create`)
  console.log(`  - Checkout: POST /api/checkout_sessions`)
  console.log(`  - Webhook: POST /api/stripe/webhook\n`)
})
