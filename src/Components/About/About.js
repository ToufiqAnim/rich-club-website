import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

import './About.css'


const About = (props) => {
     const {name,age,country,netWorth,source,img} = props.profile;
    return (
        <div className='profile'>
            <div className="profile-info">
                <img src={img} alt="" /> 
                <h2>Name: {name}</h2>
                <p>Age: {age}</p>
                <p>Source: {source}</p>
                <p>Country: {country}</p>
                <h3>Net-Worth: ${netWorth}B </h3>
                <button className='btn' onClick = {() =>props.handleWealth(props.profile)}><FontAwesomeIcon icon={faShoppingCart} /> add to cart</button>
            </div> 
        </div>
    );
};

export default About;