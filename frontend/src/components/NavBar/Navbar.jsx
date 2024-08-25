import React, { useState } from 'react'
import './Navbar.css'
import { assets } from '../../assets/assets'
import {Link} from 'react-router-dom'

const Navbar = () => {
    
    // underline effect on nav elements
    const[menu, setMenu] = useState("home");


  return (
    <div className='navbar'>
        <img src={assets.logo} alt='munch out logo' className='logo'/>
        <ul className='navbar-menu'>
            <Link to='/' onClick={()=>setMenu("home")} className={menu === "home"?"active":""}> Home </Link>
            <a href='#explore-menu' onClick={()=>setMenu("menu")} className={menu === "menu"?"active":""}> Menu </a>
            <a href='#app-download' onClick={()=>setMenu("mobile")} className={menu === "mobile"?"active":""}> Mobile App </a>
            <a href='#footer' onClick={()=>setMenu("contact")} className={menu === "contact"?"active":""}> Contact Us </a>
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
