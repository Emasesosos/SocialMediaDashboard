import React from 'react';

export const Navbar = () => {

    return (
        <div className="navbar">
            <h1>Social Media Dashboard</h1>
            <p>Total Followers: 23,004</p>
            <hr/>
            <div className="toggle">
                <p>Dark Mode</p>
                <label className="switch">
                    <input 
                        type="checkbox" 
                    />
                    <span className="slider round"></span>
                </label>
            </div>
        </div>
    );
    
};
