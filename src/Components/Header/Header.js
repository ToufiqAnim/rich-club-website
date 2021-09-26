import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDollarSign } from '@fortawesome/free-solid-svg-icons';
import './Header.css';
const Header = () => {
    return (
        <div className='header'>
        
            <nav>
            <div className="header">
            <nav>
                <a href="/billionaire"><FontAwesomeIcon icon={faDollarSign} />BILLIONAIRE</a>
                <a  href="/richest"><span className='richest'>THE WORLD'S RICHEST</span></a> 
                <a href="/profile">ABOUT</a>
            </nav>
        </div>
            </nav>
        </div>
    );
};

export default Header;