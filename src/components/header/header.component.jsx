import React from "react";

import {
  HeaderContainer,
  OptionDiv,
  ImgContainer,
  OptionLink,
  OptionsContainer,
  LogoContainer,
  UserLogged,
} from "./header.styles";

import Logo from "../../assets/sarahs-logo.svg";
import { auth } from "../../firebase/firebase.utils";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import CartIcon from "../cart-icon/cart-icon.component";
import CartDropdown from "../cart-dropdown/cart-dropdown.component";
import { selectCartHidden } from "../../redux/cart/cart.selectors";
import { selectCurrentUser } from "../../redux/user/user.selectors";

const Header = ({ currentUser, hidden }) => (
  <HeaderContainer>
    <LogoContainer to="/">
      <ImgContainer alt="logo" src={Logo} />
      <figcaption>Sarah's Clothing</figcaption>
    </LogoContainer>
    <OptionsContainer>
      <OptionLink to="/shop">Shop</OptionLink>
      <OptionLink to="/contact">Contact</OptionLink>
      {currentUser ? (
        <UserLogged>
          <OptionLink as="div" onClick={() => auth.signOut()}>
            Sign Out
          </OptionLink>
          <OptionLink as="div">
            {currentUser.currentUser.displayName}
          </OptionLink>
        </UserLogged>
      ) : (
        <OptionLink to="/signin">Sign In</OptionLink>
      )}
      <CartIcon />
    </OptionsContainer>
    {hidden ? null : <CartDropdown />}
  </HeaderContainer>
);

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  hidden: selectCartHidden,
});

export default connect(mapStateToProps)(Header);
