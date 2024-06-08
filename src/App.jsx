import React from 'react';
import { CartProvider } from './CartContext';
import Cart from './Cart';

const App = () => {
  return (
    <CartProvider>
      <Cart />
    </CartProvider>
  );
};

export default App;
