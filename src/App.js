import './App.css';
import React, { useState } from "react";
import "./css/style.css";

import Footer from './components/Footer';
import Main from './components/Main';
import Navigation from './components/Navigation';
import Section from "./components/Section";
function App() {
  const [cartItems, setCartItems] = useState(0);
  const [cartProducts, setCartProducts] = useState([]);

  const addCartItems = (id) => {
    setCartItems((count) => count + 1);
    setCartProducts((e) => [...e, id]);
    console.log("State-product", cartProducts);
  };

  const removeCartItems = (id) => {
    setCartItems((count) => count - 1);
    setCartProducts((e) => e.filter((productIndex) => productIndex !== id));
  };

  const clearCartItems = () => {
    setCartItems(0);
    setCartProducts([]);
  };
  return (
    <div>
      <Navigation
        cartItems={cartItems}
        products={cartProducts}
        clearCartItems={clearCartItems}
      />
      <Main />
      <Section
        addCartItems={addCartItems}
        removeCartItems={removeCartItems}
        products={cartProducts}
      />
      <Footer />
    </div>
  );
}

export default App;
