/**
 * Purchase Fulfillment Handler
 * Orchestrates everything that happens after a successful Stripe payment
 * 
 * Called from webhook after checkout.session.completed
 * Responsible for:
 * - Saving purchase to database
 * - Sending confirmation email
 * - Adding to onboarding queue
 * - Syncing with external services (CRM, email lists, etc.)
 */

import { savePurchase } from './db/transactions.js'
import { sendPurchaseConfirmation, sendOnboardingEmail } from './email/sendPurchaseConfirmation.js'

const isDev = process.env.NODE_ENV !== 'production'

/**
 * Handle a successful Stripe checkout
 * @param {Object} purchaseData
 * @param {string} purchaseData.tier - Tier key (GENETICS_ONLY, TIER1, TIER2, TIER3)
 * @param {string} purchaseData.tierName - Display name (e.g., "Founding Tier 1")
 * @param {string} purchaseData.customerEmail - Customer email address
 * @param {string} purchaseData.sessionId - Stripe checkout session ID
 * @param {number} purchaseData.amount - Amount in cents (e.g., 50000 for $500)
 */
export async function handleSuccessfulPurchase({
  tier,
  tierName,
  customerEmail,
  sessionId,
  amount
}) {
  if (isDev) {
    console.log('\n✨ Processing successful purchase:')
    console.log(`   Tier: ${tierName}`)
    console.log(`   Email: ${customerEmail}`)
    console.log(`   Amount: $${(amount / 100).toFixed(2)}`)
    console.log(`   Session: ${sessionId}\n`)
  }

  try {
    // 1. Save purchase record to database
    if (isDev) console.log('Step 1: Saving to database...')
    const savedPurchase = await savePurchase({
      tier,
      email: customerEmail,
      sessionId,
      amount
    })
    if (isDev) console.log(`   ✓ Saved with ID: ${savedPurchase.id}`)

    // 2. Send purchase confirmation email
    if (isDev) console.log('Step 2: Sending confirmation email...')
    const emailResult = await sendPurchaseConfirmation(
      customerEmail,
      tier,
      tierName,
      sessionId
    )
    if (emailResult.success) {
      if (isDev) console.log(`   ✓ Email sent (ID: ${emailResult.messageId})`)
    } else {
      if (isDev) console.log(`   ⚠️  Email failed: ${emailResult.error}`)
    }

    // 3. Add to onboarding queue
    if (isDev) console.log('Step 3: Adding to onboarding queue...')
    await addToOnboardingQueue({
      purchaseId: savedPurchase.id,
      tier,
      email: customerEmail,
      sessionId
    })
    if (isDev) console.log('   ✓ Added to queue')

    // 4. TODO: Sync with external services
    if (isDev) console.log('Step 4: Syncing with external services...')
    // Examples:
    // - Add to Hubspot contact
    // - Add to Mailchimp list
    // - Create Notion record
    // - Trigger Zapier webhook
    // - Post to Slack #sales channel
    if (isDev) console.log('   ℹ️  TODO: Implement CRM/email list sync\n')

    if (isDev) {
      console.log('✅ Purchase fulfillment complete!\n')
    }

    return {
      success: true,
      purchaseId: savedPurchase.id,
      timestamp: new Date().toISOString()
    }
  } catch (err) {
    console.error('❌ Error in purchase fulfillment:', err.message)
    console.error('Stack:', err.stack)

    // TODO: Add error alerting (Sentry, DataDog, etc.)
    // Sentry.captureException(err)

    // Return success anyway - we don't want to fail the webhook
    // But we should alert the team about the error
    return {
      success: false,
      error: err.message,
      timestamp: new Date().toISOString()
    }
  }
}

/**
 * Add purchase to onboarding queue
 * This is where you'd add tasks for your team (Notion, Airtable, etc.)
 * @param {Object} data
 */
async function addToOnboardingQueue(data) {
  try {
    if (isDev) {
      console.log('   Onboarding queue entry:', {
        purchaseId: data.purchaseId,
        tier: data.tier,
        email: data.email
      })
    }

    // TODO: Implement with your task queue:

    // --- Airtable ---
    // const airtable = new Airtable({ apiKey: process.env.AIRTABLE_API_KEY })
    // const table = airtable.base(process.env.AIRTABLE_BASE_ID)('Onboarding Queue')
    // await table.create([{
    //   fields: {
    //     Email: data.email,
    //     Tier: data.tier,
    //     'Purchase ID': data.purchaseId,
    //     'Stripe Session': data.sessionId,
    //     Status: 'New',
    //   }
    // }])

    // --- Notion ---
    // const notion = new Client({ auth: process.env.NOTION_API_KEY })
    // await notion.pages.create({
    //   parent: { database_id: process.env.NOTION_ONBOARDING_DB },
    //   properties: {
    //     Email: { email: data.email },
    //     Tier: { select: { name: data.tier } },
    //     'Purchase ID': { title: [{ text: { content: data.purchaseId } }] },
    //   }
    // })

    // --- Google Sheets (via Google Sheets API) ---
    // const sheets = google.sheets({ version: 'v4', auth: authClient })
    // await sheets.spreadsheets.values.append({
    //   spreadsheetId: process.env.GOOGLE_SHEETS_ID,
    //   range: 'Onboarding!A:F',
    //   valueInputOption: 'USER_ENTERED',
    //   resource: {
    //     values: [[data.email, data.tier, data.purchaseId, new Date().toISOString(), 'New', '']]
    //   }
    // })

    // Stub: Just log for development
    return { success: true }
  } catch (err) {
    console.error('❌ Error adding to onboarding queue:', err.message)
    // Don't throw - continue anyway
    return { success: false, error: err.message }
  }
}

export default { handleSuccessfulPurchase }
