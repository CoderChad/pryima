const SERVER = import.meta.env.VITE_ATLAS_SERVER_URL || 'http://localhost:4242'

export async function createStripeAtlasCompany(company) {
  const res = await fetch(`${SERVER}/api/stripe-atlas/create`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ company })
  })

  if (!res.ok) {
    const text = await res.text()
    throw new Error(text || `Request failed with status ${res.status}`)
  }

  return res.json()
}

export default { createStripeAtlasCompany }
