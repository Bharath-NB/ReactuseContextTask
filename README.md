# Shopping Cart Application

This is a simple shopping cart application built with React, utilizing Context API for state management.

## Functionalities Implemented

1. **Increase or decrease quantity**: Users can increase or decrease the quantity of each product in the cart, which automatically updates the total quantity and amount.
2. **Context API usage**: Utilized Context API to manage the state of the shopping cart, including adding, removing, and updating product quantities.

## Changes Made

1. Created a `CartContext` using `createContext`.
2. Used `useReducer` hook to manage cart state and actions.
3. Implemented actions such as increasing quantity, decreasing quantity, setting quantity, and removing a product in the reducer function.
4. Wrapped the `Cart` component with `CartProvider` to provide the cart state and actions to child components.
5. Styled the shopping cart title with a background color.
6. Ensured that the price is displayed in bold letters.

## Technologies Used

- React
- Context API
- HTML
- CSS

#   R e a c t u s e C o n t e x t T a s k  
 