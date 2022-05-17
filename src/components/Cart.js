import React, { useState, useEffect } from "react";
import data from "../data.json";

const Cart = ({ cartItems, products, clearCartItems }) => {
  const [cart, setCart] = useState(true);

  useEffect(() => {
    if (products.length > 0) {
      setCart(false);
    }
    if (cartItems === 0) {
      setCart(true);
    }
  }, [cart, cartItems, products]);

  return (
    <>
      <form className="d-flex">
        <button
          className="btn btn-outline-dark"
          type="button"
          id="navbarDropdown"
          data-bs-toggle="dropdown"
          aria-expanded="false"
          disabled={cart}
        >
          <i className="bi-cart-fill me-1"></i>
          Cart
          <span className="badge bg-dark text-white ms-1 rounded-pill">
            {cartItems}
          </span>
        </button>

        <ul
          className="dropdown-menu cart-menu"
          aria-labelledby="navbarDropdown"
        >
          {products
            ? products.map((prod, index) => (
                <li key={index}>
                  <a className="dropdown-item" href={"#" + prod}>
                    {/* the above href for focus to go to respective card */}
                    <span className="d-flex justify-content-between">
                      {data[prod].name} - {data[prod].price}
                    </span>
                  </a>
                </li>
              ))
            : null}
          {products ? (
            <li className="text-center">
              <button
                className="btn btn-outline-danger text-center"
                type="button"
                onClick={clearCartItems}
              >
                Clear Cart
              </button>
            </li>
          ) : null}
        </ul>
      </form>
    </>
  );
};

export default Cart;