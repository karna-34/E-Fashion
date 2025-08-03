import React, { useContext, useState } from 'react'
import "./Navbar.css"
import logo from '../Assets/logo.png'
import cart_icon from '../Assets/cart_icon.png'
import { Link } from 'react-router-dom';
import { Shopcontext } from '../Context/Context';

export default function Navbar() {
    const [menu, setMenu] = useState("Shop");
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const { getTotalCartItems } = useContext(Shopcontext);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    const handleMenuClick = (menuName) => {
        setMenu(menuName);
        setIsMobileMenuOpen(false);
    };

    return (
        <div className='navbar'>
            <div className="nav-logo">
                <img src={logo} alt="Shopper Logo" />
                <p>SHOPPER</p>
            </div>
            
            <ul className={`nav-menu ${isMobileMenuOpen ? 'active' : ''}`}>
                <li onClick={() => handleMenuClick("Shop")}>
                    <Link to='/'>Shop</Link>
                    {menu === "Shop" ? <hr /> : <></>}
                </li>
                <li onClick={() => handleMenuClick("Mens")}>
                    <Link to='/Mens'>Mens</Link>
                    {menu === "Mens" ? <hr /> : <></>}
                </li>
                <li onClick={() => handleMenuClick("Womens")}>
                    <Link to='/Womens'>Women</Link>
                    {menu === "Womens" ? <hr /> : <></>}
                </li>
                <li onClick={() => handleMenuClick("Kids")}>
                    <Link to='/Kids'>Kids</Link>
                    {menu === "Kids" ? <hr /> : <></>}
                </li>
            </ul>
            
            <div className="nav-login-cart">
                <Link to='/Login'>
                    <button>Login</button>
                </Link>
                <Link to='/Cart'>
                    <img src={cart_icon} alt="Cart" />
                </Link>
                <div className='nav-cart-countt'>{getTotalCartItems()}</div>
            </div>
            
            <div className={`mobile-menu-btn ${isMobileMenuOpen ? 'active' : ''}`} onClick={toggleMobileMenu}>
                <span></span>
                <span></span>
                <span></span>
            </div>
        </div>
    )
}
