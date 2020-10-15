import React from 'react';
import fb from './../../assets/images/icon-facebook.svg';
import ig from './../../assets/images/icon-instagram.svg';
import twr from './../../assets/images/icon-twitter.svg';
import yt from './../../assets/images/icon-youtube.svg';
import up from './../../assets/images/icon-up.svg';
import down from './../../assets/images/icon-down.svg';

export const FollowerCard = ({infoUser}) => {
    
    const { network, user, status } = infoUser;
    const todayClass = status.index === 'up' ? 'up' : 'down';

    return (
        <div className="follower-card">

            <div className={`social-network ${network}`}>
                <div className="img-user">
                    <img 
                        src={
                            network === 'facebook' ? 
                                fb : network === 'instagram' ? 
                                    ig : network === 'twitter' ?
                                        twr : network === 'youtube' ?
                                            yt : ''
                        } 
                        alt={
                            network === 'facebook' ? 
                                'facebook' : network === 'instagram' ? 
                                    'instagram' : network === 'twitter' ?
                                        'twitter' : network === 'youtube' ?
                                            'youtube' : ''
                        }
                    />
                    <p>{user}</p>
                </div>
                <div className="follows">
                    <h1>{status.followersOrSubs}</h1>
                    <p>FOLLOWERS</p>
                </div>
                <div className="status">
                    <img 
                        src={
                            status.index === 'up' ? up : down
                        } 
                        alt={
                            status.index === 'up' ? 'up' : 'down'
                        } 
                    />
                    <p className={`${todayClass}`}>{status.today} Today</p>
                </div>
            </div>
            
        
        </div>
    );

};
