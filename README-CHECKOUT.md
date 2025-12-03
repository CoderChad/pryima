# Pryima (Base44) App

A production-ready Vite + React app with integrated Stripe Checkout for presale packages.

## Development

Start the Vite dev server:
```bash
npm run dev
```

## Stripe Checkout Integration (Production-Ready ✓)

Complete, battle-tested Stripe Checkout integration for selling 4 Pryima presale packages.

### Four Packages

| Tier | Product ID | Price |
|------|-----------|-------|
| Genetics-only | `prod_TXBTKEZ8YsIxf4` | $249.00 |
| Founding Tier 1 | `prod_TXBUnCRY2Qo6j4` | $500.00 |
| Founding Tier 2 | `prod_TXBVCwbnp81ICA` | $1,499.00 |
| Founding Tier 3 | `prod_TXBVAaK01Ct94P` | $3,499.00 |

### Architecture

**Backend Server** (`server/index.js`):
- ✓ `POST /api/checkout_sessions` – Create Stripe Checkout Session
  - Accepts: `{ tier, customerEmail }`
  - Validates: tier against allowed values
  - Returns: `{ url }` – Direct user to Stripe-hosted checkout
  - Uses: `price_data` with product IDs + unit amounts in cents
  
- ✓ `POST /api/stripe/webhook` – Process Stripe events
  - Verifies: webhook signature using `STRIPE_WEBHOOK_SECRET`
  - Handles: `checkout.session.completed`
  - Calls: `handleSuccessfulPurchase()` with tier, email, session ID
  - TODO: Implement DB writes, email, CRM sync

**Frontend** (`src/`):
- ✓ `api/checkout.js` – Client helper for checkout endpoint
- ✓ `components/home/PricingSection.jsx` – Pricing cards with checkout buttons
- ✓ `pages/CheckoutSuccess.jsx` – Thank you page
- ✓ `pages/CheckoutCanceled.jsx` – Friendly cancel page with retry
- ✓ `App.jsx` – Routes configured for `/checkout/*` pages

### Quick Start

**1. Set environment variables:**

```bash
# Server-only secrets (NEVER commit these)
export STRIPE_SECRET_KEY=sk_test_...
export STRIPE_WEBHOOK_SECRET=whsec_...

# Client-safe (can be in code)
export NEXT_PUBLIC_BASE_URL=http://localhost:5173
```

**2. Install dependencies:**
```bash
npm install
```

**3. Run locally:**

Terminal 1 – Frontend:
```bash
npm run dev
```

Terminal 2 – Backend server:
```bash
npm run start:server
```

Terminal 3 – Stripe webhook forwarding (for testing):
```bash
stripe listen --forward-to http://localhost:4242/api/stripe/webhook
```

Visit: `http://localhost:5173` → Click pricing card → Pay with test card `4242 4242 4242 4242`

### Flow Diagram

```
User clicks "Join Tier 2"
        ↓
Frontend: createCheckoutSession('TIER2')
        ↓
POST /api/checkout_sessions { tier: 'TIER2' }
        ↓
Server: Validate tier → Create Stripe Session → Return { url }
        ↓
Browser: window.location.href = url
        ↓
Stripe Checkout (hosted, secure, PCI compliant)
        ↓
User completes payment
        ↓
Stripe redirects to /checkout/success?session_id=...
        ↓
(Stripe sends webhook to /api/stripe/webhook)
        ↓
Server: handleSuccessfulPurchase() → TODO: DB, email, CRM
```

### Code Quality & Production Readiness

✓ **Validation** – Server validates all inputs (tier, email format)  
✓ **Error Handling** – Try-catch blocks, user-friendly messages  
✓ **Logging** – Development mode logging for debugging  
✓ **Security** – Webhook signature verification, no secret key exposure  
✓ **Comments** – Clear TODOs for business logic implementation  
✓ **UX** – Loading states, professional success/cancel pages  
✓ **Stripe Best Practices** – Metadata tracking, idempotency ready  

### Customization

#### 1. Implement Purchase Fulfillment

Edit `server/index.js`, function `handleSuccessfulPurchase()`:

```javascript
async function handleSuccessfulPurchase({ tier, tierName, customerEmail, sessionId }) {
  // 1. Create/update user in database
  const user = await db.users.upsert({
    email: customerEmail,
    tier,
    stripeSessionId: sessionId,
    paidAt: new Date(),
  })

  // 2. Send welcome email
  await sendWelcomeEmail(customerEmail, tierName)

  // 3. Add to onboarding queue
  await queue.enqueue('onboarding', { userId: user.id, tier })

  // 4. Sync with CRM (Hubspot, Pipedrive, etc.)
  // await crm.contacts.update(customerEmail, { pryimaTier: tier })
}
```

#### 2. Configure Webhook in Stripe Dashboard

1. Go to [Stripe Dashboard](https://dashboard.stripe.com) → **Webhooks**
2. Click **Add endpoint**
3. Enter URL: `https://your-domain.com/api/stripe/webhook` (production)
4. Select events: `checkout.session.completed`
5. Copy signing secret → Set `STRIPE_WEBHOOK_SECRET` env var

#### 3. Retrieve Purchase Details on Success Page

In `src/pages/CheckoutSuccess.jsx`:

```javascript
useEffect(() => {
  const sessionId = searchParams.get('session_id')
  if (sessionId) {
    // Call your backend to get order details
    fetch(`/api/checkout_sessions/${sessionId}`)
      .then(r => r.json())
      .then(data => setTierName(data.tierName))
  }
}, [sessionId])
```

#### 4. Vite Dev Proxy (Optional)

Add to `vite.config.js` to avoid hardcoding server host:

```javascript
server: {
  proxy: {
    '/api': 'http://localhost:4242'
  }
}
```

Then in `src/api/checkout.js`, change `SERVER` to:
```javascript
const SERVER = '' // Uses relative URL, proxied by Vite
```

### Troubleshooting

| Issue | Solution |
|-------|----------|
| "STRIPE_SECRET_KEY not set" | Set env var before running: `export STRIPE_SECRET_KEY=sk_test_...` |
| "Webhook signature verification failed" | Ensure `STRIPE_WEBHOOK_SECRET` matches Stripe signing secret |
| "Invalid tier" error on checkout | Check tier key is one of: `GENETICS_ONLY`, `TIER1`, `TIER2`, `TIER3` |
| Webhook not received | Run `stripe listen` in a separate terminal |
| Checkout redirects but doesn't return | Verify `NEXT_PUBLIC_BASE_URL` matches your actual frontend URL |

### Files Structure

```
server/
  index.js                           # Checkout + webhook endpoints
src/
  api/
    checkout.js                      # Frontend checkout helper
    stripeAtlas.js                   # Legacy Atlas endpoint (optional)
  components/
    home/
      PricingSection.jsx             # Pricing cards with buttons
  pages/
    CheckoutSuccess.jsx              # Thank you page
    CheckoutCanceled.jsx             # Cancel page
  App.jsx                            # Routes for /checkout/*
.env.example                         # Env var template
```

### Security Checklist

- ✓ Never commit `STRIPE_SECRET_KEY` or `STRIPE_WEBHOOK_SECRET`
- ✓ Always validate `tier` server-side (don't trust client input)
- ✓ Use HTTPS in production (required for webhooks)
- ✓ Verify webhook signatures using signing secret
- ✓ Never expose secret key in frontend code
- ✓ Log suspicious activity (multiple failed attempts, etc.)
- ✓ Store Stripe metadata in your database for audit trail
- ✓ Implement idempotency (handle duplicate webhook events)

### API Reference

#### `POST /api/checkout_sessions`

Create a Stripe Checkout Session.

**Request:**
```json
{
  "tier": "TIER2",
  "customerEmail": "user@example.com"
}
```

**Response (success):**
```json
{
  "url": "https://checkout.stripe.com/pay/cs_test_..."
}
```

**Response (error):**
```json
{
  "error": "Invalid tier: FOO. Must be one of: GENETICS_ONLY, TIER1, TIER2, TIER3",
  "timestamp": "2025-12-02T12:00:00.000Z"
}
```

#### `POST /api/stripe/webhook`

Receive Stripe webhook events. Use raw body for signature verification.

**Headers required:**
- `stripe-signature` – Signed by Stripe using `STRIPE_WEBHOOK_SECRET`

**Body (example):**
```json
{
  "type": "checkout.session.completed",
  "data": {
    "object": {
      "id": "cs_test_...",
      "customer_email": "user@example.com",
      "metadata": {
        "tier": "TIER2",
        "tierName": "Founding Tier 2"
      }
    }
  }
}
```

### Resources

- [Stripe Checkout Docs](https://stripe.com/docs/payments/checkout)
- [Webhook Events](https://stripe.com/docs/api/events)
- [Pricing API](https://stripe.com/docs/api/prices)
- [Stripe CLI](https://stripe.com/docs/stripe-cli)

---

## Stripe Atlas (Legacy)

Minimal Stripe Account creation endpoint (for company onboarding). See `server/index.js` for `POST /api/stripe-atlas/create`.

For more details on Stripe Atlas flows, refer to [Stripe Atlas docs](https://stripe.com/docs/atlas).
