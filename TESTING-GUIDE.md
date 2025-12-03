# Quick Start Testing Guide

## 🚀 Getting Started

### 1. Start the Development Servers

**Terminal 1 - Backend:**
```bash
cd /Users/chadthomas/pryima
npm run dev
# Server runs on http://localhost:4242
```

**Terminal 2 - Frontend:**
```bash
cd /Users/chadthomas/pryima
npm run dev
# Frontend runs on http://localhost:5173
```

### 2. Start Stripe Webhook Listener

**Terminal 3 - Stripe CLI:**
```bash
stripe listen --forward-to localhost:4242/api/checkout_sessions/webhook
# Copy the webhook signing secret and add to .env as STRIPE_WEBHOOK_SECRET
```

## ✅ Testing Checklist

### Email Validation
- [ ] Navigate to Pricing Section
- [ ] Try to click checkout button without email → Button disabled
- [ ] Enter invalid email format → Error message appears
- [ ] Enter valid email format (e.g., test@example.com) → ✓ Check mark appears, button enabled
- [ ] Clear email → Button re-disables

### Checkout Flow
- [ ] Click "Join [Any Tier]" button → Redirected to Stripe Checkout
- [ ] In Stripe Checkout, use test card: **4242 4242 4242 4242**
- [ ] Enter any future expiration date
- [ ] Enter any 3-digit CVC
- [ ] Click "Pay"
- [ ] Redirected to `/checkout/success?session_id=...`

### Success Page
- [ ] Wait for success page to load
- [ ] Verify it shows:
  - [x] Loading spinner initially
  - [x] "Thank You!" heading
  - [x] Order Details section:
    - Email (your test email)
    - Package (tier name, e.g., "Founding Tier 2")
    - Amount Paid ($X.XX)
    - Order ID (truncated session ID)
  - [x] "What Happens Next?" steps
  - [x] "Back to Home" button
  - [x] "Contact Support" button

### Backend Logging
In Terminal 1 (backend), verify console logs show:
```
✅ Tier valid: TIER2
✅ Email valid: test@example.com
✅ Session created: cs_test_...

📋 Session details retrieved: {
  sessionId: cs_test_...,
  email: test@example.com,
  tier: TIER2,
  amount: $14.99
}

💾 Saving purchase to database...
(DB service stub - not yet integrated)

📧 Sending confirmation email...
(Email service stub - not yet integrated)

✨ Adding to onboarding queue...
(Queue stub - not yet integrated)
```

### Cancel Flow
- [ ] Start checkout again
- [ ] In Stripe, click "Cancel" or use browser back button
- [ ] Verify redirected to `/checkout/canceled`
- [ ] Verify cancel page shows friendly message
- [ ] Click "Back to Pricing" → Returns to home page

## 🧪 Stripe Test Cards

| Card | Use Case |
|------|----------|
| 4242 4242 4242 4242 | Successful payment |
| 4000 0000 0000 0002 | Card declined |
| 4000 0025 0000 3155 | Requires authentication |
| 5555 5555 5555 4444 | Mastercard test |

**For all test cards, use:**
- Any future expiration date (MM/YY)
- Any 3-digit CVC
- Any email address

## 🔍 Debugging Tips

### View Server Logs
- Backend console shows detailed emoji-prefixed logs
- Look for ✅ (success), ❌ (error), 📧 (email), 💾 (database), ✨ (queue)

### View Network Requests
- Open browser DevTools (F12)
- Go to Network tab
- Watch POST to `/api/checkout_sessions`
- Watch GET to `/api/checkout/session-details`

### Check Stripe Dashboard
- Go to https://dashboard.stripe.com/test/payments
- Find the test payment from your session
- View payment details, metadata, and webhook attempts

### Webhook Testing
- Stripe CLI shows all webhook events
- Look for `checkout.session.completed` event
- Verify webhook handler returns `200 OK`

## 🐛 Common Issues

### "Email is required" button stays disabled
- Check email input has focus and is valid format
- Try clicking "Verify Email" button
- Check browser console for validation errors

### Redirect to Stripe doesn't work
- Verify STRIPE_PUBLIC_KEY is set in frontend
- Check Network tab for 400/500 from /api/checkout_sessions
- Verify backend .env has STRIPE_SECRET_KEY

### Success page shows loading forever
- Check backend is running (http://localhost:4242)
- Look in browser Network tab for GET /api/checkout/session-details
- Check server logs for errors
- Verify session_id is in URL

### Webhook not hitting backend
- Verify Stripe CLI is running: `stripe listen --forward-to localhost:4242/...`
- Check STRIPE_WEBHOOK_SECRET is in .env
- Look in Stripe CLI output for webhook attempts
- Check firewall isn't blocking localhost:4242

### Email not showing on success page
- Verify customer entered email in Stripe Checkout
- Check order details are being fetched (Network tab)
- Look in server logs for "Session details retrieved"
- Check session has customer_email in Stripe dashboard

## 📈 Performance Checks

### Page Load Times
- Success page should load initial UI < 1s
- Session details should fetch < 500ms
- Total time to show order details < 2s

### Network Requests
- POST /api/checkout_sessions: ~200-500ms
- GET /api/checkout/session-details: ~100-300ms
- Stripe webhook delivery: ~1-2s from payment completion

## ✨ Advanced Testing

### Test Email Validation
```javascript
// In browser console while on pricing page:
// This should trigger validation error:
document.querySelector('input[type="email"]').value = "invalid"
document.querySelector('button:contains("Verify")').click()
```

### Test Fulfillment Functions
```bash
# Check database stub logs:
# In server logs, search for "💾 Saving purchase"

# Check email stub logs:
# In server logs, search for "📧 Sending confirmation"

# Check queue stub logs:
# In server logs, search for "✨ Adding to onboarding"
```

### Test with Different Tiers
- [ ] Test with GENETICS_ONLY ($249)
- [ ] Test with TIER1 ($500)
- [ ] Test with TIER2 ($1,499)
- [ ] Test with TIER3 ($3,499)
- Verify each shows correct tier name and amount on success page

## 📝 Test Results Template

Copy this template and fill it in after testing:

```
Date: ___________
Tester: _________
Stripe Keys: [Test/Live]

Email Validation:
- Button disabled without email: ☐ YES ☐ NO
- Error on invalid email: ☐ YES ☐ NO
- Success on valid email: ☐ YES ☐ NO

Checkout Flow:
- Redirect to Stripe: ☐ YES ☐ NO
- Payment processes: ☐ YES ☐ NO
- Redirect to success page: ☐ YES ☐ NO

Success Page:
- Shows order details: ☐ YES ☐ NO
- Email correct: ☐ YES ☐ NO
- Tier correct: ☐ YES ☐ NO
- Amount correct: ☐ YES ☐ NO
- Load time < 2s: ☐ YES ☐ NO

Backend Logs:
- Fulfillment steps logged: ☐ YES ☐ NO
- No errors: ☐ YES ☐ NO

Issues found:
_______________________________________________

Notes:
_______________________________________________
```

## 🎯 Success Criteria

All of the following should be true for production deployment:

✅ Email validation works without errors  
✅ Checkout redirects to Stripe  
✅ Stripe payment processes  
✅ Webhook is received and processed  
✅ Success page loads with real order details  
✅ All backend fulfillment steps logged  
✅ No console errors in browser  
✅ No console errors in server  
✅ Cancel page works correctly  
✅ All 4 tier amounts are correct  

---

**Ready to test? Start with the Getting Started section above!**
