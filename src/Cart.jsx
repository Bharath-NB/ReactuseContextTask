// Cart.js

import React, { useState } from 'react';
import { useCart } from './CartContext';
import './Cart.css';
import logo from './logo.png'; // Import the logo image

const Cart = () => {
  const { state, increaseQuantity, decreaseQuantity, removeProduct, setQuantity } = useCart();
  const totalQuantity = state.products.reduce((acc, product) => acc + product.quantity, 0);
  const subtotal = state.products.reduce((acc, product) => acc + product.price * product.quantity, 0);
  const shipping = 0; // Shipping is free
  const total = subtotal + shipping;

  const [expandedProducts, setExpandedProducts] = useState({});

  const toggleDetails = (id) => {
    setExpandedProducts((prevState) => ({
      ...prevState,
      [id]: !prevState[id]
    }));
  };

  return (
    <div>
      <center>
        <img src={logo} alt="Logo" style={{ width: '70px', height: 'auto' }} /> {/* Logo */}
        <h1 className="cart-title">Shopping Cart</h1> {/* Shopping Cart title with background color */}
      </center>
      <table>
        <tbody>
          {state.products.map(product => (
            <React.Fragment key={product.id}>
              <tr>
                <td>
                  <img src={product.thumbnail} alt={product.title} />
                </td>
                <td>
                  <div>
                    <strong>{product.title}</strong><br />
                    <div
                      className={`details-and-care ${expandedProducts[product.id] ? '' : 'truncated'}`}
                      onClick={() => toggleDetails(product.id)}
                    >
                      {product.detailsAndCare}
                    </div>
                  </div>
                </td>
                <td>
                  <div className="quantity-price-container">
                    <div className="quantity">
                      <select
                        value={product.quantity}
                        onChange={(e) => setQuantity(product.id, parseInt(e.target.value))}
                      >
                        {[...Array(9).keys()].map(x => (
                          <option key={x + 1} value={x + 1}>{x + 1}</option>
                        ))}
                      </select>
                    </div>
                    <div className="price">
                      ${product.price * product.quantity}
                    </div>
                  </div>
                </td>
              </tr>
              <tr>
                <td colSpan="3">
                  <div className="remove-button-cell">
                    <button className="remove-button" onClick={() => removeProduct(product.id)}>Remove</button>
                  </div>
                </td>
              </tr>
              <tr>
                <td colSpan="3"><hr /></td>
              </tr>
            </React.Fragment>
          ))}
        </tbody>
      </table>
      <div className="summary">
        <h2>Total Quantity: {totalQuantity}</h2>
        <div className="subtotal-total">
          <span className="grey-out">Subtotal:</span>
          <span className="subtotal-amount">${subtotal.toFixed(2)}</span>
        </div>
        <div className="shipping-total">
          <span className="grey-out">Shipping:</span>
          <span className="shipping-amount">Free</span>
        </div>
        <hr />
        <div className="total">
          <span>Total:</span>
          <span>${total.toFixed(2)}</span>
        </div>
      </div>
    </div>
  );
};

export default Cart;
