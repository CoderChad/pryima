/**
 * Tier Configuration
 * Central place for all tier details: names, prices, product IDs, descriptions
 * Used across frontend and server for consistency
 */

export const TIER_DETAILS = {
  GENETICS_ONLY: {
    key: 'GENETICS_ONLY',
    name: 'SelfDecode-only Genetics',
    displayName: 'Genetics-only',
    description: 'Just the 1200-point SelfDecode genetic report + Pryima AI interpretation.',
    price: 249,
    productId: 'prod_TXBTKEZ8YsIxf4'
  },
  TIER1: {
    key: 'TIER1',
    name: 'Founding Tier 1',
    displayName: 'Founding Tier 1',
    description: 'Pryima Health OS + SelfDecode genetics.',
    price: 500,
    productId: 'prod_TXBUnCRY2Qo6j4'
  },
  TIER2: {
    key: 'TIER2',
    name: 'Founding Tier 2',
    displayName: 'Founding Tier 2',
    description: 'Adds hormone testing, food sensitivity, cortisol/adrenal panel, etc.',
    price: 1499,
    productId: 'prod_TXBVCwbnp81ICA'
  },
  TIER3: {
    key: 'TIER3',
    name: 'Founding Tier 3',
    displayName: 'Founding Tier 3',
    description: 'Adds gut microbiome, facial microbiome, continuous glucose, lifetime AI coach, etc.',
    price: 3499,
    productId: 'prod_TXBVAaK01Ct94P'
  }
}

/**
 * Get tier details by key
 * @param {string} tierKey - One of: GENETICS_ONLY, TIER1, TIER2, TIER3
 * @returns {Object|null} - Tier details or null if not found
 */
export function getTierDetails(tierKey) {
  return TIER_DETAILS[tierKey] || null
}

/**
 * Get all valid tier keys
 * @returns {string[]}
 */
export function getValidTierKeys() {
  return Object.keys(TIER_DETAILS)
}

/**
 * Validate tier key
 * @param {string} tierKey
 * @returns {boolean}
 */
export function isValidTier(tierKey) {
  return Object.prototype.hasOwnProperty.call(TIER_DETAILS, tierKey)
}

export default TIER_DETAILS
