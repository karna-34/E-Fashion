import React, { useContext, useState } from 'react'
import "./Navbar.css"
import logo from '../Assets/logo.png'
import cart_icon from '../Assets/cart_icon.png'
import { Link } from 'react-router-dom';

import { Shopcontext } from '../Context/Context';

export default function Navbar() {
    const [menu, setMenu] = useState("Shop");
    const{getTotalCartItems}=useContext(Shopcontext)

    return (
        <div className='navbar'>
            <div className="nav-logo">
                <img src={logo} alt="" />
                <p>SHOPPER</p>
            </div>
            <ul className="nav-menu">
                <li onClick={() => { setMenu("Shop") }}> <Link style={{textDecoration:'none'}} to='/'>Shop</Link>{menu === "Shop" ? <hr /> : <></>}</li>
                <li onClick={() => { setMenu("Mens") }}> <Link style={{textDecoration:'none'}} to='/Mens'>Mens</Link>{menu === "Mens" ? <hr /> : <></>}</li>
                <li onClick={() => { setMenu("Womens") }}> <Link style={{textDecoration:'none'}} to='/Womens'>Women</Link> {menu === "Womens" ? <hr /> : <></>}</li>
                <li onClick={() => { setMenu("Kids") }}> <Link style={{textDecoration:'none'}} to='/Kids'>Kids</Link>{menu === "Kids" ? <hr /> : <></>}</li>
            </ul>
            <div className="nav-login-cart">
                <Link to='/Login'><button>Login</button></Link>
                <Link to='/Cart'><img src={cart_icon} alt="" /></Link>
                <div className='nav-cart-countt'>{getTotalCartItems()}</div>
            </div>
        </div>
    )
}
