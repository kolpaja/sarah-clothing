// eslint-disable-next-line
import React, { createContext, useState, useEffect } from "react";
// eslint-disable-next-line
import {
  addItemToCart,
  removeOneItemFromCart,
  filterItemsFromCart,
  getItemsCount,
} from "./cart.utils";

export const CartContext = createContext({
  hidden: true,
  toggleHidden: () => {},
  cartItems: [],
  addItem: () => {},
  removeOneItem: () => {},
  clearItems: () => {},
  cartItemsCount: 0,
});

const CartProvider = ({ children }) => {
  const [hidden, setHidden] = useState(true);
  const toggleHidden = () => setHidden(!hidden);
  const [cartItems, setCartItems] = useState([]);
  const [cartItemsCount, setCartItemsCount] = useState(0);

  const addItem = (item) => setCartItems(addItemToCart(cartItems, item));
  const removeOneItem = (item) =>
    setCartItems(removeOneItemFromCart(cartItems, item));
  const clearItems = (item) =>
    setCartItems(filterItemsFromCart(cartItems, item));

  useEffect(() => {
    setCartItemsCount(getItemsCount(cartItems));
  }, [cartItems]);
  return (
    <CartContext.Provider
      value={{
        hidden,
        toggleHidden,
        cartItems,
        addItem,
        removeOneItem,
        cartItemsCount,
        clearItems,
      }}
      //destrcuturing from cartContext
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
