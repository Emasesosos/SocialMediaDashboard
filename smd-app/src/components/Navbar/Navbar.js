import React from 'react';

export const Navbar = () => {

    const handleToggle = () => {
        console.log('handleToggle');
    };

    return (
        <div className="navbar">
            <div className="navbar-title">
                <h2>Social Media Dashboard</h2>
                <p>Total Followers: 23,004</p>
            </div>
            <hr/>
            <div className="toggle">
                <p>Dark Mode</p>
                <label className="switch">
                    <input 
                        type="checkbox" 
                        onChange={handleToggle}
                    />
                    <span className="slider round black"></span>
                </label>
            </div>
        </div>
    );
    
};
