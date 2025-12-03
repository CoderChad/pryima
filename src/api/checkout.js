/**
 * Stripe Checkout API client
 * Communicates with the backend /api/checkout_sessions endpoint
 */

// Server URL - defaults to localhost for development
const SERVER = 'http://localhost:4242'

// Valid tier keys matching the server PRODUCTS configuration
export const VALID_TIERS = {
  GENETICS_ONLY: 'GENETICS_ONLY',
  TIER1: 'TIER1',
  TIER2: 'TIER2',
  TIER3: 'TIER3'
}

/**
 * Create a Stripe Checkout Session for a Pryima package
 * @param {string} tier - One of: GENETICS_ONLY, TIER1, TIER2, TIER3
 * @param {string} customerEmail - Optional customer email
 * @returns {Promise<{url: string}>} - Object with Stripe Checkout URL
 * @throws {Error} - If tier is invalid or request fails
 */
export async function createCheckoutSession(tier, customerEmail) {
  // Validate tier
  if (!tier || !Object.values(VALID_TIERS).includes(tier)) {
    throw new Error(`Invalid tier: ${tier}. Must be one of: ${Object.values(VALID_TIERS).join(', ')}`)
  }

  try {
    const res = await fetch(`${SERVER}/api/checkout_sessions`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ tier, customerEmail: customerEmail || null })
    })

    if (!res.ok) {
      let errorMsg = `Request failed with status ${res.status}`
      try {
        const errorData = await res.json()
        errorMsg = errorData?.error || errorMsg
      } catch {
        // Fallback if response is not JSON
      }
      throw new Error(errorMsg)
    }

    const data = await res.json()
    if (!data.url) {
      throw new Error('No checkout URL returned from server')
    }

    return data
  } catch (err) {
    console.error('Checkout session error:', err.message)
    throw err
  }
}

/**
 * Create a Stripe Checkout Session from cart items
 * @param {Array} cartItems - Array of cart items with tierKey, quantity, price, productId
 * @param {string} customerEmail - Customer email
 * @returns {Promise<{url: string}>} - Object with Stripe Checkout URL
 * @throws {Error} - If request fails
 */
export async function createCheckoutSessionFromCart(cartItems, customerEmail) {
  if (!cartItems || cartItems.length === 0) {
    throw new Error('Cart is empty')
  }

  try {
    const res = await fetch(`${SERVER}/api/checkout_sessions/cart`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ 
        items: cartItems.map(item => ({
          tierKey: item.tierKey,
          quantity: item.quantity
        })),
        customerEmail: customerEmail || null 
      })
    })

    if (!res.ok) {
      let errorMsg = `Request failed with status ${res.status}`
      try {
        const errorData = await res.json()
        errorMsg = errorData?.error || errorMsg
      } catch {
        // Fallback if response is not JSON
      }
      throw new Error(errorMsg)
    }

    const data = await res.json()
    if (!data.url) {
      throw new Error('No checkout URL returned from server')
    }

    return data
  } catch (err) {
    console.error('Cart checkout error:', err.message)
    throw err
  }
}

export default { createCheckoutSession, createCheckoutSessionFromCart, VALID_TIERS }
