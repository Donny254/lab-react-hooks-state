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
  const [category, setCategory] = useState('all')

const toggleDarkMode = () => {
  setDarkMode(!darkMode)
}

 // Function to add item to cart
  const addToCart = (product) => {
    setCartItems([...cartItems, product])
  }
     
      
  return (
    <div className={darkMode ? 'dark-mode' : 'light-mode'}>
      <h1>🛒 Shopping App</h1>
      <p>
        Welcome! Your task is to implement filtering, cart management, and dark
        mode.
      </p>

      {/* TODO: Render DarkModeToggle and implement dark mode functionality */}
      <DarkModeToggle 
      darkMode={darkMode} 
      toggleDarkModeDarkMode={toggleDarkMode} 
      />
      {/* TODO: Implement category filter dropdown */}

      <label>Filter by Category: </label>
      <select value={category} 
      onChange={(e)=>setCategory(e.target.value)}
      >

        <option value="all">All</option>
        <option value="Fruits">Fruits</option>
        <option value="Dairy">Dairy</option>
        <option value="NonExistent">NonExistent</option>
      </select>

      <ProductList   category={category} addToCart={addToCart}/>

        <h2>Shopping Cart</h2>
        <ul>
          
          {cartItems.length>0 ?(
            cartItems.map((item, index) =>(
              <li key={index}>{item.name} is in your cart</li>
            ))
          ):(
            <li>No item in  your Cart.</li>
          )}
        </ul>

      {/* TODO: Implement and render Cart component */}
       <Cart 
        cartItems={cartItems} 
        
      />
    </div>
  )
}

export default App
