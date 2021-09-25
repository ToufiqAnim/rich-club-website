import React, { useEffect, useState } from 'react';
import About from '../About/About';
import Wealth from '../Wealth/Wealth';
import './Profile.css'
const Profile = () => {
    const [profiles, setProfiles] = useState([]);
    const [wealth, setWealth] = useState([]);
    useEffect(()=>{
        fetch('./profile.json')
        .then(res => res.json())
        .then(data => setProfiles(data));
    },[]);

    const handleWealth = (profile) =>{
        const totalWealth = [...wealth, profile];
        setWealth(totalWealth);

    }
    return (
        <div className='profiles-container'>
            <div className="profiles-data">
                {
                    profiles.map(profile => <About
                        key = {profile.id}
                        profile = {profile}
                        handleWealth  = {handleWealth }
                        >
                        
                    </About>)
                }
            </div>
              <div className="wealth-continer">
               <Wealth wealth = {wealth}></Wealth>
            </div>
        </div>
        
    );
};

export default Profile;