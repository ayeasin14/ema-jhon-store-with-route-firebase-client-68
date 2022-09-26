import React from 'react';
import logo from '../../Logo.svg'
import './Header.css'

const Header = () => {
    return (
        <nav className='header-container'>
            <img src={logo} alt="" />
            <div>
                <a href="/shop">Shop</a>
                <a href="/order">Order</a>
                <a href="/inventory">Inventory</a>
                <a href="/contact">Contact Us</a>
            </div>
        </nav>
    );
};

export default Header;