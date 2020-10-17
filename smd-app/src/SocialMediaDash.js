import React from 'react';
import { useState } from 'react';
import { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme } from './theme/theme';
import { GlobalStyles } from './theme/global';
import { Navbar } from './components/Navbar/Navbar';
import { Followers } from './components/Followers/Followers';
import { Overview } from './components/Overview/Overview';

export const SocialMediaDash = () => {

    const [theme, setTheme] = useState('Light');

    const toggleTheme = () => {

        if(theme === 'Light') {
            setTheme('Dark');
        } else {
            setTheme('Light');
        }

    };

    return (
        <ThemeProvider theme={ theme === 'Light' ? lightTheme : darkTheme }>
            <GlobalStyles />
            <div className="container">
                <Navbar 
                    theme={ theme }
                    toggleTheme={ toggleTheme }
                />
                <Followers />
                <Overview />
            </div>
        </ThemeProvider>
    );

};
