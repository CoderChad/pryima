# Base44 App

This repository contains the Pryima (Base44) Vite + React app. The project includes a small local Express proxy to help integrate with Stripe for Atlas-style onboarding.

Development
-----------

- Run `npm run dev` to start the Vite dev server.

Stripe Atlas integration (local server)
--------------------------------------

This project includes a lightweight Express proxy server at `server/index.js` that exposes a basic endpoint you can use as a starting point for Stripe Atlas / company onboarding flows.

- Server entry: `server/index.js`
- Endpoint: `POST /api/stripe-atlas/create` — accepts a JSON body `{ company: { ... } }`.

Setup
-----

1. Add your Stripe secret key to your environment (do NOT commit keys):

```bash
export STRIPE_SECRET_KEY=sk_live_...
```

2. Install dependencies (if you haven't already):

```bash
npm install
```

3. Start the Stripe proxy server:

```bash
npm run start:server
```

4. From the frontend call the helper in `src/api/stripeAtlas.js`, or POST directly to `http://localhost:4242/api/stripe-atlas/create`.

Notes
-----

- The server is intentionally minimal. It creates a Stripe `Account` as a starting point and should be extended with the required fields and proper onboarding flow for production use.
- When deploying, host the server in a secure environment and follow Stripe's production and PCI guidance.

Stripe Checkout integration notes
--------------------------------

Environment variables (do NOT hardcode keys):

- `STRIPE_SECRET_KEY` — your Stripe secret key (server only)
- `STRIPE_WEBHOOK_SECRET` — Stripe webhook signing secret (server only)
- `NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY` — Stripe publishable key (client only)
- `NEXT_PUBLIC_BASE_URL` — public base URL of your frontend (e.g. `https://pryima.com`)

Server endpoints added in `server/index.js`:

- `POST /api/checkout_sessions` — Create a Stripe Checkout Session. Accepts JSON `{ tier, customerEmail }`. Uses `price_data` with actual product IDs and unit amounts in cents. Validates tier against:
  - `GENETICS_ONLY` (prod_TXBTKEZ8YsIxf4, $249.00)
  - `TIER1` (prod_TXBUnCRY2Qo6j4, $500.00)
  - `TIER2` (prod_TXBVCwbnp81ICA, $1,499.00)
  - `TIER3` (prod_TXBVAaK01Ct94P, $3,499.00)

- `POST /api/stripe/webhook` — Stripe webhook endpoint. Uses the raw request body to verify signatures using `STRIPE_WEBHOOK_SECRET`. Listens for `checkout.session.completed` and logs session data including tier and product; replace the stubbed console logs with your DB/update workflows.Webhook configuration in Stripe Dashboard:

- Webhook URL example (production): `https://your-production-domain.com/api/stripe/webhook`
- For local testing, you can use `http://localhost:4242/api/stripe/webhook` together with `stripe listen --forward-to http://localhost:4242/api/stripe/webhook` to forward events.

Dependencies (server): `stripe`, `dotenv`, `express` (already added to `package.json`).

Frontend wiring:

- `src/api/checkout.js` provides `createCheckoutSession(priceId, customerEmail)` which posts to the server and returns `{ url }`.
- `src/components/home/PricingSection.jsx` was updated to include the four packages (Package #1 is the SelfDecode-only genetics package) and to call the checkout endpoint when a user clicks a tier CTA. Buttons show a simple loading state and redirect the browser to Stripe Checkout.

Security & next steps:

- Do not expose `STRIPE_SECRET_KEY` to the client. Use only `NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY` in browser code.
- Replace console logs in the webhook handler with calls to your database and email/onboarding flows.
- Consider adding server-side logging and retries for webhook processing.

# Base44 App
