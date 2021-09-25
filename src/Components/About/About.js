import React from 'react';
import './About.css'

const About = (props) => {
     const {name,age,country,netWorth,source,img} = props.profile;
    return (
        <div className='profile'>
            <div className="profile-info">
                <img src={img} alt="" /> 
                <h2>Name: {name}</h2>
                <h3>Age: {age}</h3>
                <h3>Source: {source}</h3>
                <h4>Country: {country}</h4>
                <h4>Net-Worth: ${netWorth}B </h4>
                <button className='btn' onClick = {() =>props.handleWealth(props.profile)}> add to cart</button>
            </div> 
        </div>
    );
};

export default About;