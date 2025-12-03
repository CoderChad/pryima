import React from 'react'
import { Link } from 'react-router-dom'
import { AlertCircle, ArrowLeft } from 'lucide-react'

/**
 * Cancel page shown if user cancels Stripe Checkout
 * User can return to try again or continue browsing
 */
export default function CheckoutCanceled() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#02040A] via-[#050814] to-[#02040A] flex items-center justify-center px-4">
      <div className="max-w-2xl w-full text-center">
        {/* Alert Icon */}
        <div className="mb-8 flex justify-center">
          <div className="relative">
            <div className="absolute inset-0 bg-yellow-500/20 rounded-full blur-2xl"></div>
            <div className="relative bg-yellow-500/10 border border-yellow-500/30 rounded-full p-8">
              <AlertCircle className="w-16 h-16 text-yellow-500" />
            </div>
          </div>
        </div>

        {/* Heading */}
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
          Checkout Canceled
        </h1>

        {/* Subheading */}
        <p className="text-xl text-gray-300 mb-2">
          No worries! Your order wasn't completed.
        </p>

        {/* Message Card */}
        <div className="bg-yellow-500/5 border border-yellow-500/20 rounded-2xl p-8 mb-8 text-left">
          <h2 className="text-lg font-semibold text-white mb-3">What happened?</h2>
          <p className="text-gray-300 mb-4">
            You exited the Stripe Checkout page before completing your purchase. Your cart is empty and you haven't been charged.
          </p>
          <p className="text-gray-300">
            Your spot in the Founding Cohort is still reserved — you can complete checkout whenever you're ready.
          </p>
        </div>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
          <Link to="/pricing" className="inline-block">
            <button className="w-full sm:w-auto bg-gradient-to-r from-[#FF4A00] to-[#FF6B00] text-white py-6 px-8 text-lg font-semibold rounded-lg transition-all duration-300 flex items-center justify-center gap-2">
              <ArrowLeft className="w-5 h-5" />
              Back to Pricing
            </button>
          </Link>
          <Link to="/" className="inline-block">
            <button className="w-full sm:w-auto bg-transparent border-2 border-[#FF4A00] text-[#FF4A00] hover:bg-[#FF4A00] hover:text-white py-6 px-8 text-lg font-semibold rounded-lg transition-all duration-300">
              Browse Home
            </button>
          </Link>
        </div>

        {/* Help Section */}
        <div className="mt-16 pt-8 border-t border-[#FF4A00]/20">
          <h3 className="text-lg font-semibold text-white mb-4">Having trouble?</h3>
          <p className="text-gray-400 text-sm">
            If you encounter any issues or have questions about your purchase, please reach out to us at{' '}
            <span className="text-[#FF4A00]">support@pryima.com</span>.
          </p>
        </div>
      </div>
    </div>
  )
}
