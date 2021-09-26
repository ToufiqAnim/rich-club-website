import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDollarSign} from '@fortawesome/free-solid-svg-icons';
import { FaFacebook,FaTwitter } from "react-icons/fa";



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
                <button className='btn' onClick = {() =>props.handleWealth(props.profile)}><FontAwesomeIcon icon={faDollarSign} /> Add Wealth</button>
                <h1>
                    <span className='icon'><FaFacebook color = '#4267B2'></FaFacebook></span> 
                    <span><FaTwitter color = '#1d9bf0'></FaTwitter></span>
                </h1>
            </div> 
        </div>
    );
};

export default About;