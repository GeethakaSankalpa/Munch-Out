import React, { useState } from 'react'
import './Navbar.css'
import { assets } from '../../assets/assets'

const Navbar = () => {
    
    // underline effect on nav elements
    const[menu, setMenu] = useState("home");


  return (
    <div className='navbar'>
        <img src={assets.logo} alt='munch out logo' className='logo'/>
        <ul className='navbar-menu'>
            <li onClick={()=>setMenu("home")} className={menu === "home"?"active":""}> Home </li>
            <li onClick={()=>setMenu("menu")} className={menu === "menu"?"active":""}> Menu </li>
            <li onClick={()=>setMenu("mobile")} className={menu === "mobile"?"active":""}> Mobile App </li>
            <li onClick={()=>setMenu("contact")} className={menu === "contact"?"active":""}> Contact Us </li>
        </ul>
        <div className="navbar-right">
            <img src={assets.search_icon} alt='search'/>
            <div className="navbar-search-icon">
                <img src={assets.basket_icon} alt='basket'/>
                <div className="cart-add-dot"></div>
            </div>
            <button> Sign In </button>
        </div>
      
    </div>
  )
}

export default Navbar
