import React from 'react';
import './Wealth.css'

const Wealth = (props) => {
    const {wealth} = props;
    let total = 0;

    for (const profile of wealth){
        total = total + profile.netWorth;
    }
    return (
        <div>
            <h4>Profile: {props.wealth.length}</h4>
            <h5>Total-Wealth: ${total.toFixed(2)} Billion</h5>
            {/* <p>{props.profile.name}</p> */}
        </div>
    );
};

export default Wealth;