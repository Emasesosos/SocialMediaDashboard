import React from 'react';
import face from './../../assets/images/icon-facebook.svg';
import up from './../../assets/images/icon-up.svg';
import insta from './../../assets/images/icon-instagram.svg';
import down from './../../assets/images/icon-down.svg';

export const FollowerCard = () => {
    
    return (
        <div className="follower-card">
            <div className="social-network">
                <img src={face} alt=""/>
                <p>@nathanf</p>
            </div>
            <h1>1987</h1>
            <p>FOLLOWERS</p>
            <div className="up">
                <img src={up} alt=""/>
                <p>12 Today</p>
            </div>
            <div className="social-network">
                <img src={insta} alt=""/>
                <p>@realnathanf</p>
            </div>
            <h1>11k</h1>
            <p>FOLLOWERS</p>
            <div className="up">
                <img src={down} alt=""/>
                <p>1099 Today</p>
            </div>
        </div>
    );

};
