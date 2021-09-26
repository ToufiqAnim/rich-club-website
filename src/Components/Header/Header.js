import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDollarSign, faSearch } from '@fortawesome/free-solid-svg-icons';
import './Header.css';
const Header = () => {
    return (
        <div className='header'>
        
            <nav>
            <div className="header">
            <nav>
                <a href="/billionaire"><FontAwesomeIcon icon={faDollarSign} />BILLIONAIRE</a>
                <a className='richest' href="/richest">THE WORLDS RICHEST</a> 
                <a href="/profile">PROFILE</a>
            </nav>
        </div>
            </nav>
        </div>
    );
};

export default Header;