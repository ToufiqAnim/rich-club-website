import React from 'react';
import './Wealth.css'

const Wealth = (props) => {
    const {wealth} = props;
   
    let total = 0;
    
    for (const profile of wealth){
        total = total + profile.netWorth;
    }
  
    return (
        <div className='wealth-container'>
            <div className='wealth-data'>
                <h1>Wealth Chart</h1>
                <hr />
                <h2>Profile: {props.wealth.length}</h2>
                <h2>Total-Wealth: ${total.toFixed(2)}B</h2>
                
            </div>
            {/* <p>{props.profile.name}</p> */}
        </div>
    );
};

export default Wealth;