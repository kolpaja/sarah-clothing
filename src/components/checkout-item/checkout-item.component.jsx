import React, { useContext } from "react";

import "./checkout-item.styles.scss";
import { CartContext } from "../../providers/cart/cart.provider";

const CheckoutItem = ({ cartItem }) => {
  const { name, imageUrl, price, quantity } = cartItem;
  const { addItem, removeOneItem, clearItems } = useContext(CartContext);
  return (
    <div className="checkout-item">
      <div className="image-container">
        <img src={imageUrl} alt="item" />
      </div>
      <span className="name">{name}</span>
      <span className="quantity">
        <div className="arrow" onClick={() => removeOneItem(cartItem)}>
          &#10094;
        </div>
        <span className="value">{quantity}</span>
        <div className="arrow" onClick={() => addItem(cartItem)}>
          &#10095;
        </div>
      </span>
      <span className="price">{price}</span>
      <div className="remove-button" onClick={() => clearItems(cartItem)}>
        &#10005;
      </div>
    </div>
  );
};

export default CheckoutItem;