import React, { useState } from 'react'
import ProductList from './components/ProductList'
import DarkModeToggle from './components/DarkModeToggle'
import Cart from './components/Cart'

const App = () => {
  // TODO: Implement state for dark mode toggle
  const [darkMode, setDarkMode] = useState(false)
  // TODO: Implement state for cart management
  const [cartItems, setCartItems] = useState([])
  // TODO: Implement state for category filtering
  const [selectedCategory, setSelectedCategory] = useState('all')
 // Function to add item to cart
  const addToCart = (product) => {
    setCartItems((prevCart) => {
      // Check if item already exists in cart
      const existingItem = prevCart.find((item) => item.id === product.id)
      
      if (existingItem) {
        // If exists, increase quantity
        return prevCart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      } else {
        // If new item, add with quantity 1
        return [...prevCart, { ...product, quantity: 1 }]
      }
    })
  }
    // Function to remove item from cart
  const removeFromCart = (productId) => {
    setCartItems((prevCart) => prevCart.filter((item) => item.id !== productId))
  }

  // Handle category change
  const handleCategoryChange = (e) => {
    setSelectedCategory(e.target.value)
  }

  return (
    <div className={darkMode ? 'dark-mode' : 'light-mode'}>
      <h1>🛒 Shopping App</h1>
      <p>
        Welcome! Your task is to implement filtering, cart management, and dark
        mode.
      </p>

      {/* TODO: Render DarkModeToggle and implement dark mode functionality */}
      <DarkModeToggle darkMode={darkMode} setDarkMode={setDarkMode} />
      {/* TODO: Implement category filter dropdown */}
      <label>Filter by Category: </label>
      <select value={selectedCategory} onChange={handleCategoryChange}>
        <option value="all">All</option>
        <option value="Fruits">Fruits</option>
        <option value="Dairy">Dairy</option>
      </select>

      <ProductList   selectedCategory={selectedCategory} 
        addToCart={addToCart}/>

      {/* TODO: Implement and render Cart component */}
       <Cart 
        cartItems={cartItems} 
        removeFromCart={removeFromCart} 
      />
    </div>
  )
}

export default App
