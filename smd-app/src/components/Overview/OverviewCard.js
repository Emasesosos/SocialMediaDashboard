import React from 'react';
import fb from './../../assets/images/icon-facebook.svg';
import ig from './../../assets/images/icon-instagram.svg';
import twr from './../../assets/images/icon-twitter.svg';
import yt from './../../assets/images/icon-youtube.svg';
import up from './../../assets/images/icon-up.svg';
import down from './../../assets/images/icon-down.svg';

export const OverviewCard = ({ overview }) => {

    const { network, type, views, percent, status } = overview;
    const todayClass = status === 'up' ? 'up' : 'down';

    return (
        <div className="overview-card">
            <div className="info">
                <div className="info-header">
                    <p>{ type }</p>
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
                </div>
                <div className="info-network">
                    <h1>{ views }</h1>
                    <div className="info-porcent">
                        <img 
                            src={
                                status === 'up' ? up : down
                            } 
                            alt={
                                status === 'up' ? 'up' : 'down'
                            } 
                        />
                        <p className={`${todayClass}`}>{ percent }% </p>
                    </div>
                </div>
            </div>
        </div>
    );

};
