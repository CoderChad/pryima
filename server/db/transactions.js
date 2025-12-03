/**
 * Database Service - Purchase Transaction Storage
 * Stub implementation with TODO comments for integrating with real databases
 * 
 * Supports: PostgreSQL, MongoDB, Firebase, Supabase
 */

const isDev = process.env.NODE_ENV !== 'production'

/**
 * Save a purchase record to the database
 * @param {Object} purchase
 * @param {string} purchase.tier - Tier key (GENETICS_ONLY, TIER1, TIER2, TIER3)
 * @param {string} purchase.email - Customer email
 * @param {string} purchase.sessionId - Stripe session ID
 * @param {number} purchase.amount - Amount in cents
 * @returns {Promise<Object>} - Saved purchase record with ID
 */
export async function savePurchase({ tier, email, sessionId, amount }) {
  try {
    if (isDev) {
      console.log('💾 Saving purchase to database:', {
        tier,
        email,
        sessionId,
        amount,
        timestamp: new Date().toISOString()
      })
    }

    // TODO: Implement with your database of choice:

    // --- PostgreSQL (via node-postgres or Prisma) ---
    // const result = await db.query(
    //   'INSERT INTO purchases (tier, email, session_id, amount, created_at) VALUES ($1, $2, $3, $4, NOW()) RETURNING *',
    //   [tier, email, sessionId, amount]
    // )
    // return result.rows[0]

    // --- MongoDB ---
    // const purchase = await db.collection('purchases').insertOne({
    //   tier,
    //   email,
    //   sessionId,
    //   amount,
    //   createdAt: new Date(),
    // })
    // return { id: purchase.insertedId, tier, email, sessionId, amount }

    // --- Firebase Firestore ---
    // const docRef = await db.collection('purchases').add({
    //   tier,
    //   email,
    //   sessionId,
    //   amount,
    //   createdAt: new Date(),
    // })
    // return { id: docRef.id, tier, email, sessionId, amount }

    // --- Supabase (PostgreSQL) ---
    // const { data, error } = await supabase
    //   .from('purchases')
    //   .insert([{ tier, email, session_id: sessionId, amount }])
    //   .select()
    // if (error) throw error
    // return data[0]

    // Stub: Return mock object for development
    const mockId = `purchase_${Date.now()}`
    return {
      id: mockId,
      tier,
      email,
      sessionId,
      amount,
      createdAt: new Date().toISOString()
    }
  } catch (err) {
    console.error('❌ Error saving purchase:', err.message)
    throw err
  }
}

/**
 * Get a purchase by Stripe session ID
 * @param {string} sessionId
 * @returns {Promise<Object|null>}
 */
export async function getPurchaseBySessionId(sessionId) {
  try {
    if (isDev) {
      console.log('🔍 Looking up purchase:', { sessionId })
    }

    // TODO: Implement query for your database
    // Example: PostgreSQL
    // const result = await db.query(
    //   'SELECT * FROM purchases WHERE session_id = $1',
    //   [sessionId]
    // )
    // return result.rows[0] || null

    // Stub: Return null for development
    return null
  } catch (err) {
    console.error('❌ Error getting purchase:', err.message)
    throw err
  }
}

/**
 * Get purchases by email
 * @param {string} email
 * @returns {Promise<Array>}
 */
export async function getPurchasesByEmail(email) {
  try {
    if (isDev) {
      console.log('🔍 Looking up purchases by email:', { email })
    }

    // TODO: Implement query for your database
    // Example: MongoDB
    // return await db.collection('purchases').find({ email }).toArray()

    // Stub: Return empty array for development
    return []
  } catch (err) {
    console.error('❌ Error getting purchases:', err.message)
    throw err
  }
}

export default {
  savePurchase,
  getPurchaseBySessionId,
  getPurchasesByEmail
}
