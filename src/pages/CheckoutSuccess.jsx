import React, { useEffect, useState } from 'react'
import { useSearchParams, Link } from 'react-router-dom'
import { Check, ArrowRight, AlertCircle, Loader2 } from 'lucide-react'

/**
 * Success page shown after Stripe Checkout completes
 * Fetches session details from backend to display tier name, email, and amount
 */
export default function CheckoutSuccess() {
  const [searchParams] = useSearchParams()
  const [session, setSession] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  const sessionId = searchParams.get('session_id')

  useEffect(() => {
    if (!sessionId) {
      setError('No session ID provided')
      setLoading(false)
      return
    }

    const fetchSessionDetails = async () => {
      try {
        setLoading(true)
        setError(null)

        const response = await fetch(
          `http://localhost:4242/api/checkout/session-details?session_id=${sessionId}`
        )

        if (!response.ok) {
          throw new Error(`Failed to fetch session details: ${response.statusText}`)
        }

        const data = await response.json()
        setSession(data)
      } catch (err) {
        console.error('Error fetching session:', err)
        setError(err.message || 'Failed to load order details')
      } finally {
        setLoading(false)
      }
    }

    fetchSessionDetails()
  }, [sessionId])

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#02040A] via-[#050814] to-[#02040A] flex items-center justify-center px-4">
      <div className="max-w-2xl w-full text-center">
        {/* Success Icon */}
        <div className="mb-8 flex justify-center">
          <div className="relative">
            <div className="absolute inset-0 bg-[#FF4A00] rounded-full blur-2xl opacity-30 animate-pulse"></div>
            <div className="relative bg-gradient-to-br from-[#FF4A00] to-[#FF6B00] rounded-full p-8">
              <Check className="w-16 h-16 text-white" />
            </div>
          </div>
        </div>

        {/* Heading */}
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
          Thank You!
        </h1>

        {/* Loading State */}
        {loading && (
          <div className="mb-8">
            <div className="flex justify-center mb-4">
              <Loader2 className="w-8 h-8 text-[#FF4A00] animate-spin" />
            </div>
            <p className="text-gray-300">Loading your order details...</p>
          </div>
        )}

        {/* Error State */}
        {error && !loading && (
          <div className="bg-red-500/10 border border-red-500/30 rounded-lg p-4 mb-8 flex items-start gap-3">
            <AlertCircle className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
            <div className="text-left">
              <p className="text-red-500 font-semibold">Unable to load details</p>
              <p className="text-red-400 text-sm">{error}</p>
            </div>
          </div>
        )}

        {/* Order Details */}
        {session && !loading && (
          <div className="bg-[#FF4A00]/10 border border-[#FF4A00]/30 rounded-lg p-6 mb-8 text-left">
            <h3 className="text-lg font-semibold text-white mb-4">Order Details</h3>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <p className="text-xs text-gray-400 uppercase tracking-wide mb-1">Email</p>
                <p className="text-white font-medium">{session.customerEmail}</p>
              </div>
              <div>
                <p className="text-xs text-gray-400 uppercase tracking-wide mb-1">Package</p>
                <p className="text-white font-medium">{session.displayName || session.tierName}</p>
              </div>
              <div>
                <p className="text-xs text-gray-400 uppercase tracking-wide mb-1">Amount Paid</p>
                <p className="text-[#FF4A00] font-bold text-lg">${(session.amountTotal / 100).toFixed(2)}</p>
              </div>
              <div>
                <p className="text-xs text-gray-400 uppercase tracking-wide mb-1">Order ID</p>
                <p className="text-gray-300 font-mono text-sm">{session.sessionId.slice(0, 16)}...</p>
              </div>
            </div>
          </div>
        )}

        {/* Subheading */}
        {!loading && !error && (
          <p className="text-xl text-gray-300 mb-8">
            Your payment has been processed successfully.
          </p>
        )}

        {/* Next Steps Card */}
        <div className="bg-[#FF4A00]/10 border border-[#FF4A00]/30 rounded-2xl p-8 mb-8">
          <h2 className="text-xl font-semibold text-white mb-4">What Happens Next?</h2>
          <ol className="text-left space-y-3 text-gray-300">
            <li className="flex items-start gap-3">
              <span className="text-[#FF4A00] font-bold mt-1">1.</span>
              <span>Our team will contact you within 24 hours to confirm your order and discuss onboarding.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-[#FF4A00] font-bold mt-1">2.</span>
              <span>You'll receive details on test kit shipment and how to access the Pryima Health OS.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-[#FF4A00] font-bold mt-1">3.</span>
              <span>Get started with your personalized health insights and AI health coach.</span>
            </li>
          </ol>
        </div>

        {/* Help Text */}
        <p className="text-gray-400 text-sm mb-8">
          Check your email for a confirmation and receipt. If you don't see it, check your spam folder.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link to="/" className="inline-block">
            <button className="w-full sm:w-auto bg-transparent border-2 border-[#FF4A00] text-[#FF4A00] hover:bg-[#FF4A00] hover:text-white py-6 px-8 text-lg font-semibold rounded-lg transition-all duration-300">
              Back to Home
            </button>
          </Link>
          <a href="https://pryima.com" target="_blank" rel="noopener noreferrer" className="inline-block">
            <button className="w-full sm:w-auto bg-gradient-to-r from-[#FF4A00] to-[#FF6B00] text-white py-6 px-8 text-lg font-semibold rounded-lg transition-all duration-300 flex items-center justify-center gap-2">
              View Dashboard
              <ArrowRight className="w-5 h-5" />
            </button>
          </a>
        </div>

        {/* FAQ Section */}
        <div className="mt-16 pt-8 border-t border-[#FF4A00]/20">
          <h3 className="text-lg font-semibold text-white mb-4">Questions?</h3>
          <p className="text-gray-400 text-sm mb-4">
            Email us at <span className="text-[#FF4A00]">support@pryima.com</span> or check out our{' '}
            <Link to="/faq" className="text-[#FF4A00] hover:underline">
              FAQ
            </Link>
            .
          </p>
        </div>
      </div>
    </div>
  )
}
