import React from "react"
import {Link} from "react-router-dom"
import "./header.styles.scss"
import Logo from "../../assets/sarahs_2.png"
import {auth} from "../../firebase/firebase.utils"

const Header = ({currentUser}) => (
    <div className="header">
        <Link className="logo-container" to="/">
            <img className="logo" alt="logo" src={Logo}/>
        </Link>
        <div className="options">
            <Link className="option" to="/shop">Shop</Link>
            <Link className="option" to="/contact">Contact</Link>
            {
                currentUser ?
                    <div className="option" onClick={() => auth.signOut()}>Sign Out</div>
                    :
                    <Link className="option" to="/signin">Sign In</Link>
            }

        </div>
    </div>
)
export default Header;