import React from 'react';
import { Toggle } from './Toggle';

export const Navbar = ({ toggleTheme }) => {

    return (
        <div className="navbar">
            <div className="navbar-title">
                <h2>Social Media Dashboard</h2>
                <p>Total Followers: 23,004</p>
            </div>
            <div className="separador">
                <hr/>
            </div>
            <Toggle 
                toggleTheme={ toggleTheme }
            />
        </div>
    );
    
};
