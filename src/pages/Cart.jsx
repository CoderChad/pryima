import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useCart } from '@/lib/CartContext'
import { Button } from '@/components/ui/button'
import { Trash2, Plus, Minus, ShoppingCart, AlertCircle } from 'lucide-react'
import { createCheckoutSessionFromCart } from '@/api/checkout'
import { toast } from 'sonner'

export default function Cart() {
  const { cartItems, removeFromCart, updateQuantity, clearCart, getCartTotal, getCartItemCount } = useCart()
  const [email, setEmail] = useState('')
  const [emailError, setEmailError] = useState('')
  const [isCheckingOut, setIsCheckingOut] = useState(false)

  const validateEmail = (value) => {
    if (!value) {
      setEmailError('Email is required')
      return false
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(value)) {
      setEmailError('Please enter a valid email address')
      return false
    }
    setEmailError('')
    return true
  }

  const handleCheckout = async () => {
    if (!validateEmail(email)) {
      toast.error('Please enter a valid email address.')
      return
    }

    if (cartItems.length === 0) {
      toast.error('Your cart is empty.')
      return
    }

    setIsCheckingOut(true)
    try {
      const res = await createCheckoutSessionFromCart(cartItems, email)
      if (res?.url) {
        window.location.href = res.url
      } else {
        toast.error('No checkout URL returned from server.')
      }
    } catch (err) {
      console.error('Checkout error:', err.message)
      toast.error(`Unable to start checkout: ${err.message}`)
    } finally {
      setIsCheckingOut(false)
    }
  }

  if (cartItems.length === 0) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-[#02040A] via-[#050814] to-[#02040A] flex items-center justify-center px-4">
        <div className="max-w-2xl w-full text-center">
          <div className="mb-8 flex justify-center">
            <div className="relative">
              <div className="absolute inset-0 bg-[#FF4A00] rounded-full blur-2xl opacity-30"></div>
              <div className="relative bg-gradient-to-br from-[#FF4A00] to-[#FF6B00] rounded-full p-8">
                <ShoppingCart className="w-16 h-16 text-white" />
              </div>
            </div>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Your Cart is Empty</h1>
          <p className="text-gray-400 text-lg mb-8">
            Add items to your cart to get started with Pryima Health OS
          </p>
          <Link to="/pricing">
            <Button className="bg-gradient-to-r from-[#FF4A00] to-[#FF6B00] text-white py-6 px-8 text-lg font-semibold">
              Browse Packages
            </Button>
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#02040A] via-[#050814] to-[#02040A] py-20 px-4">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-2">Shopping Cart</h1>
          <p className="text-gray-400">{getCartItemCount()} {getCartItemCount() === 1 ? 'item' : 'items'}</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2 space-y-4">
            {cartItems.map((item) => (
              <div
                key={item.tierKey}
                className="bg-[#FF4A00]/10 border border-[#FF4A00]/30 rounded-xl p-6"
              >
                <div className="flex flex-col sm:flex-row gap-4">
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-white mb-2">{item.displayName}</h3>
                    <p className="text-gray-400 text-sm mb-4">{item.name}</p>
                    <p className="text-2xl font-bold text-[#FF4A00]">
                      ${(item.price * item.quantity).toFixed(2)}
                      {item.quantity > 1 && (
                        <span className="text-sm text-gray-400 ml-2">
                          (${item.price.toFixed(2)} each)
                        </span>
                      )}
                    </p>
                  </div>
                  
                  <div className="flex items-center gap-4">
                    {/* Quantity Controls */}
                    <div className="flex items-center gap-2 bg-black/50 rounded-lg p-2">
                      <button
                        onClick={() => updateQuantity(item.tierKey, item.quantity - 1)}
                        className="p-1 hover:bg-[#FF4A00]/20 rounded transition-colors"
                        aria-label="Decrease quantity"
                      >
                        <Minus className="w-4 h-4 text-white" />
                      </button>
                      <span className="text-white font-semibold w-8 text-center">{item.quantity}</span>
                      <button
                        onClick={() => updateQuantity(item.tierKey, item.quantity + 1)}
                        className="p-1 hover:bg-[#FF4A00]/20 rounded transition-colors"
                        aria-label="Increase quantity"
                      >
                        <Plus className="w-4 h-4 text-white" />
                      </button>
                    </div>

                    {/* Remove Button */}
                    <button
                      onClick={() => removeFromCart(item.tierKey)}
                      className="p-2 hover:bg-red-500/20 rounded transition-colors"
                      aria-label="Remove from cart"
                    >
                      <Trash2 className="w-5 h-5 text-red-400" />
                    </button>
                  </div>
                </div>
              </div>
            ))}

            {/* Clear Cart Button */}
            <button
              onClick={clearCart}
              className="text-gray-400 hover:text-red-400 text-sm transition-colors"
            >
              Clear all items
            </button>
          </div>

          {/* Checkout Summary */}
          <div className="lg:col-span-1">
            <div className="bg-[#FF4A00]/10 border border-[#FF4A00]/30 rounded-xl p-6 sticky top-4">
              <h2 className="text-xl font-bold text-white mb-4">Order Summary</h2>
              
              <div className="space-y-3 mb-6">
                {cartItems.map((item) => (
                  <div key={item.tierKey} className="flex justify-between text-sm">
                    <span className="text-gray-400">{item.displayName} × {item.quantity}</span>
                    <span className="text-white">${(item.price * item.quantity).toFixed(2)}</span>
                  </div>
                ))}
              </div>

              <div className="border-t border-[#FF4A00]/30 pt-4 mb-6">
                <div className="flex justify-between items-center">
                  <span className="text-lg font-semibold text-white">Total</span>
                  <span className="text-2xl font-bold text-[#FF4A00]">
                    ${getCartTotal().toFixed(2)}
                  </span>
                </div>
              </div>

              {/* Email Input */}
              <div className="mb-6">
                <label className="block text-white font-semibold mb-3">
                  Enter your email
                </label>
                <input
                  type="email"
                  placeholder="your@email.com"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value)
                    setEmailError('')
                  }}
                  onBlur={() => email && validateEmail(email)}
                  className="w-full px-4 py-3 rounded-lg bg-black/50 border border-[#FF4A00]/30 text-white placeholder-gray-500 focus:outline-none focus:border-[#FF4A00]"
                />
                {emailError && (
                  <div className="flex items-center gap-2 mt-2 text-red-400 text-sm">
                    <AlertCircle className="w-4 h-4" />
                    {emailError}
                  </div>
                )}
                {email && !emailError && (
                  <p className="text-[#FF4A00] text-sm mt-2">✓ Email ready for checkout</p>
                )}
              </div>

              {/* Checkout Button */}
              <Button
                onClick={handleCheckout}
                disabled={isCheckingOut || !email || emailError !== '' || cartItems.length === 0}
                className="w-full bg-gradient-to-r from-[#FF4A00] to-[#FF6B00] text-white py-6 text-lg font-semibold hover:shadow-lg hover:shadow-[#FF4A00]/50 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isCheckingOut ? '🔄 Processing...' : `Proceed to Checkout - $${getCartTotal().toFixed(2)}`}
              </Button>

              <Link to="/pricing" className="block text-center text-gray-400 hover:text-[#FF4A00] text-sm mt-4 transition-colors">
                Continue shopping
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

