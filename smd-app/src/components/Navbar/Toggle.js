import React from 'react';

export const Toggle = ({ toggleTheme }) => {

    return (
        <div className="toggle">
            <p>Dark Mode</p>
            <label className="switch">
                <input 
                    type="checkbox" 
                    onChange={ toggleTheme }
                />
                <span className="slider round black"></span>
            </label>
        </div>
    );
};
