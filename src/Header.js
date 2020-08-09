import React from 'react';
import "./Header.css";
import { Link } from "react-router-dom";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';


function Header() {
    return <nav className='header'>
        <Link to="/">
            <img className="header__logo" src="https://cdn.freebiesupply.com/images/large/2x/amazon-logo-transparent.png" alt =" "/>
        </Link>
        <div className = "header__search">
            <input type = "text" className="header__searchinput"/>
            <SearchIcon className="header__searchicon"/>
        </div>
        <div className = 'header__nav'>
            <Link to ='/login' className = 'header__link'>
            <div className = 'header__option'>
                <span className = "header_optinallineone">hello M7MOUD</span>
                <span className = "header_optinallinetwo">Sign In</span>
                </div>
            </Link>
            <Link to ='/' className = 'header__link'>
            <div className = 'header__option'>
                <span className = "header_optinallineone">Returns</span>
                <span className = "header_optinallinetwo">& Orders</span>
                </div>
            </Link>
            <Link to ='/' className = 'header__link'>
            <div className = 'header__option'>
                <span className = "header_optinallineone">Your</span>
                <span className = "header_optinallinetwo">Prime</span>
                </div>
            </Link>
            <Link to='checkout' className = 'header__link'>
                <div className="header_basket">
                    <ShoppingBasketIcon/>
                    <span className = "header_optinallinetwo basket_count">0</span>
                </div>
            </Link>
        </div>
    </nav>
    
}

export default Header
