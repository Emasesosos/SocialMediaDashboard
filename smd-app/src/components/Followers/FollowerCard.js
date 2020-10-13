import React from 'react';
import face from './../../assets/images/icon-facebook.svg';
import up from './../../assets/images/icon-up.svg';
import insta from './../../assets/images/icon-instagram.svg';
import down from './../../assets/images/icon-down.svg';

export const FollowerCard = () => {
    
    return (
        <div className="follower-card">

            <div className="social-network face">
                <div className="img-user">
                    <img src={face} alt=""/>
                    <p>@nathanf</p>
                </div>
                <div className="follows">
                    <h1>1987</h1>
                    <p>FOLLOWERS</p>
                </div>
                <div className="status">
                    <img src={up} alt=""/>
                    <p>12 Today</p>
                </div>
            </div>

            <div className="social-network insta">
                <div className="img-user">
                    <img src={insta} alt=""/>
                    <p>@realnathanf</p>
                </div>
                <div className="follows">
                    <h1>11k</h1>
                    <p>FOLLOWERS</p>
                </div>
                <div className="status">
                    <img src={down} alt=""/>
                    <p>1099 Today</p>
                </div>
            </div>
        
        </div>
    );

};
