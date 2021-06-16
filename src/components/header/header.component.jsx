import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import "./header.styles.scss";
import { createStructuredSelector } from "reselect";

import Logo from "../../assets/sarahs-logo.svg";
import { auth } from "../../firebase/firebase.utils";
import { connect } from "react-redux";

import CartIcon from "../cart-icon/cart-icon.component";
import CartDropdown from "../cart-dropdown/cart-dropdown.component";
import { selectCartHidden } from "../../redux/cart/cart.selectors";

import CurrentuserContext from "../../contexts/current-user/current-user.context";
import { CartContext } from "../../providers/cart/cart.provider";

const Header = () => {
  const currentUser = useContext(CurrentuserContext);
  const { hidden } = useContext(CartContext);

  return (
    <div className="header">
      <Link className="logo-container" to="/">
        <img className="logo" alt="logo" src={Logo} />
        <figcaption>Sarah's Clothing</figcaption>
      </Link>
      <div className="options">
        <Link className="option" to="/shop">
          Shop
        </Link>
        <Link className="option" to="/contact">
          Contact
        </Link>
        {currentUser ? (
          <div>
            <span className="option" onClick={() => auth.signOut()}>
              Sign Out
            </span>
            <span>{currentUser.displayName}</span>
          </div>
        ) : (
          <Link className="option" to="/signin">
            Sign In
          </Link>
        )}
        <CartIcon />
      </div>
      {hidden ? null : <CartDropdown />}
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  hidden: selectCartHidden,
});

export default connect(mapStateToProps)(Header);
