import React from "react";
import { Link } from "react-router-dom";
import "./header.styles.scss";
import Logo from "../../assets/sarahs_2.png";
import { auth } from "../../firebase/firebase.utils";
import { connect } from "react-redux";
import CartIcon from "../cart-icon/cart-icon.component";

const Header = ({ currentUser }) => {
  console.log("currentuser: ", currentUser);
  return (
    <div className="header">
      <Link className="logo-container" to="/">
        <img className="logo" alt="logo" src={Logo} />
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
            <span className="user-logged">
              {currentUser &&
                currentUser.currentUser &&
                currentUser.currentUser.displayName}
            </span>
          </div>
        ) : (
          <Link className="option" to="/signin">
            Sign In
          </Link>
        )}
        <CartIcon />
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  currentUser: state.user.currentUser,
});

export default connect(mapStateToProps)(Header);
