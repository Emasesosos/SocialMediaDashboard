import React from 'react';
import { func, string } from 'prop-types';

export const Toggle = ({ theme, toggleTheme }) => {

    return (
        <div className="toggle">
            <p>{theme === 'Light' ? 'Dark' : 'Light'} Mode</p>
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

Toggle.propTypes = {
    theme: string.isRequired,
    toggleTheme: func.isRequired
};