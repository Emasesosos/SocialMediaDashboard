import React from 'react';
import { Navbar } from './components/Navbar/Navbar';
import { Followers } from './components/Followers/Followers';
import { Overview } from './components/Overview/Overview';

export const SocialMediaDash = () => {

    return (
        <div className="container">
            <Navbar />
            <Followers />
            <Overview />
        </div>
    );

};
