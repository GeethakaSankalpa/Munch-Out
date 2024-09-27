import React, { useContext, useState } from 'react'
import './Navbar.css'
import { assets } from '../../assets/assets'
import { Link } from 'react-router-dom'
import { StoreFoodContext } from '../../FoodContext/StoreFoodContext'

const Navbar = ({ setShowLogin }) => {

    // underline effect on nav elements
    const [menu, setMenu] = useState("home");

    const { getTotalCartAmount } = useContext(StoreFoodContext);

    return (
        <div className='navbar'>
            <Link to={'/'}><img src={assets.logo} alt='munch out logo' className='logo' /></Link>
            <ul className='navbar-menu'>
                <Link to='/' onClick={() => setMenu("home")} className={menu === "home" ? "active" : ""}> Home </Link>
                <a href='#explore-menu' onClick={() => setMenu("menu")} className={menu === "menu" ? "active" : ""}> Menu </a>
                <a href='#app-download' onClick={() => setMenu("mobile")} className={menu === "mobile" ? "active" : ""}> Mobile App </a>
                <a href='#footer' onClick={() => setMenu("contact")} className={menu === "contact" ? "active" : ""}> Contact Us </a>
            </ul>
            <div className="navbar-right">
                <div className="navbar-cart-icon">
                    <Link to='/Cart'><img src={assets.basket_icon} alt='basket' /></Link>
                    <div className={getTotalCartAmount() === 0? "" : "cart-add-dot"}></div>
                </div>
                <button onClick={() => setShowLogin(true)}> Sign In </button>
            </div>

        </div>
    )
}

export default Navbar
