import React from 'react';
import face from './../../assets/images/icon-facebook.svg';
import up from './../../assets/images/icon-up.svg';
import insta from './../../assets/images/icon-instagram.svg';
import down from './../../assets/images/icon-down.svg';

export const OverviewCard = () => {

    return (
        <div className="overview-card">
            <div className="overview-title">
                <h2>Overview - Today</h2>
            </div>
            <div className="info">
                <div className="info-header">
                    <p>Page Views</p>
                    <img src={ face } alt=""/>
                </div>
                <div className="info-network">
                    <h1>87</h1>
                    <div className="info-porcent">
                        <img src={ up } alt=""/>
                        <p>3%</p>
                    </div>
                </div>
            </div>
            <div className="info">
                <div className="info-header">
                    <p>Likes</p>
                    <img src={ face } alt=""/>
                </div>
                <div className="info-network">
                    <h1>52</h1>
                    <div className="info-porcent">
                        <img src={ down } alt=""/>
                        <p>2%</p>
                    </div>
                </div>
            </div>
            
            <div className="info">
                <div className="info-header">
                    <p>Likes</p>
                    <img src={ insta } alt=""/>
                </div>
                <div className="info-network">
                    <h1>5462</h1>
                    <div className="info-porcent">
                        <img src={ up } alt=""/>
                        <p>2257%</p>
                    </div>
                </div>
            </div>
            <div className="info">
                <div className="info-header">
                    <p>Profile Views</p>
                    <img src={ insta } alt=""/>
                </div>
                <div className="info-network">
                    <h1>52k</h1>
                    <div className="info-porcent">
                        <img src={ up } alt=""/>
                        <p>1375%</p>
                    </div>
                </div>
            </div>
        </div>
    );

};
