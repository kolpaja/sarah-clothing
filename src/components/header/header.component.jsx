import React from "react"
import {Link} from "react-router-dom"
import "./header.styles.scss"
import Logo from "../../assets/sarahs_2.png" 

const Header = () => (
    <div className="header">
        <Link className="logo-container" to="/">
            <img className="logo" src={Logo}/>
        </Link>
        <div className="options">
            <Link className="option" to="/shop">Shop</Link>
            <Link className="option" to="/contact">Contact</Link>
        </div>
    </div>
)
export default Header;