import React, { createContext, useContext, useState, useEffect } from 'react'
import { getTierDetails } from '@/config/tiers'

const CartContext = createContext()

export function CartProvider({ children }) {
  const [cartItems, setCartItems] = useState([])

  // Load cart from localStorage on mount
  useEffect(() => {
    const savedCart = localStorage.getItem('pryima_cart')
    if (savedCart) {
      try {
        setCartItems(JSON.parse(savedCart))
      } catch (err) {
        console.error('Error loading cart from localStorage:', err)
      }
    }
  }, [])

  // Save cart to localStorage whenever it changes
  useEffect(() => {
    if (cartItems.length > 0) {
      localStorage.setItem('pryima_cart', JSON.stringify(cartItems))
    } else {
      localStorage.removeItem('pryima_cart')
    }
  }, [cartItems])

  const addToCart = (tierKey) => {
    const tierDetails = getTierDetails(tierKey)
    if (!tierDetails) {
      console.error('Invalid tier key:', tierKey)
      return false
    }

    // Check if item already in cart
    const existingItem = cartItems.find(item => item.tierKey === tierKey)
    
    if (existingItem) {
      // Update quantity if already in cart
      setCartItems(cartItems.map(item =>
        item.tierKey === tierKey
          ? { ...item, quantity: item.quantity + 1 }
          : item
      ))
    } else {
      // Add new item to cart
      setCartItems([...cartItems, {
        tierKey,
        name: tierDetails.name,
        displayName: tierDetails.displayName,
        price: tierDetails.price,
        productId: tierDetails.productId,
        quantity: 1
      }])
    }
    return true
  }

  const removeFromCart = (tierKey) => {
    setCartItems(cartItems.filter(item => item.tierKey !== tierKey))
  }

  const updateQuantity = (tierKey, quantity) => {
    if (quantity <= 0) {
      removeFromCart(tierKey)
      return
    }
    setCartItems(cartItems.map(item =>
      item.tierKey === tierKey
        ? { ...item, quantity }
        : item
    ))
  }

  const clearCart = () => {
    setCartItems([])
  }

  const getCartTotal = () => {
    return cartItems.reduce((total, item) => total + (item.price * item.quantity), 0)
  }

  const getCartItemCount = () => {
    return cartItems.reduce((count, item) => count + item.quantity, 0)
  }

  const value = {
    cartItems,
    addToCart,
    removeFromCart,
    updateQuantity,
    clearCart,
    getCartTotal,
    getCartItemCount
  }

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}

export function useCart() {
  const context = useContext(CartContext)
  if (!context) {
    throw new Error('useCart must be used within a CartProvider')
  }
  return context
}

