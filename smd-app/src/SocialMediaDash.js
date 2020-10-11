import React from 'react';
import { Followers } from './components/Followers';
import { Overview } from './components/Overview';

export const SocialMediaDash = () => {
    return (
        <div className="container">
            <h1>SocialMediaDash</h1>
            <Followers />
            <Overview />
        </div>
    );
};
