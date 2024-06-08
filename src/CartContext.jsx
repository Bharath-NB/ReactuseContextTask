import React, { createContext, useContext, useReducer } from 'react';
import productData from './products.json';  // Import the JSON data

const CartContext = createContext();

const initialState = {
  products: productData // Use the imported JSON data as the initial state
};

const cartReducer = (state, action) => {
  switch (action.type) {
    case 'INCREASE_QUANTITY':
      return {
        ...state,
        products: state.products.map(product => 
          product.id === action.payload ? 
            { ...product, quantity: product.quantity + 1 } : product
        )
      };
    case 'DECREASE_QUANTITY':
      return {
        ...state,
        products: state.products.map(product => 
          product.id === action.payload && product.quantity > 1 ? 
            { ...product, quantity: product.quantity - 1 } : product
        )
      };
    case 'SET_QUANTITY':
      return {
        ...state,
        products: state.products.map(product => 
          product.id === action.payload.id ? 
            { ...product, quantity: action.payload.quantity } : product
        )
      };
    case 'REMOVE_PRODUCT':
      return {
        ...state,
        products: state.products.filter(product => product.id !== action.payload)
      };
    default:
      return state;
  }
};

export const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, initialState);

  const increaseQuantity = (id) => {
    dispatch({ type: 'INCREASE_QUANTITY', payload: id });
  };

  const decreaseQuantity = (id) => {
    dispatch({ type: 'DECREASE_QUANTITY', payload: id });
  };

  const setQuantity = (id, quantity) => {
    dispatch({ type: 'SET_QUANTITY', payload: { id, quantity } });
  };

  const removeProduct = (id) => {
    dispatch({ type: 'REMOVE_PRODUCT', payload: id });
  };

  return (
    <CartContext.Provider value={{ state, increaseQuantity, decreaseQuantity, setQuantity, removeProduct }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
