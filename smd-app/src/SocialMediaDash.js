import React from 'react';
import { useState } from 'react';
import { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme } from './theme/theme';
import { GlobalStyles } from './theme/global';
import { Navbar } from './components/Navbar/Navbar';
import { Followers } from './components/Followers/Followers';
import { Overview } from './components/Overview/Overview';

export const SocialMediaDash = () => {

    const [theme, setTheme] = useState('light');

    const toggleTheme = () => {

        if(theme === 'light') {
            setTheme('dark');
        } else {
            setTheme('light');
        }

    };

    return (
        <ThemeProvider theme={ theme === 'light' ? lightTheme : darkTheme }>
            <GlobalStyles />
            <div className="container">
                <Navbar 
                    toggleTheme={ toggleTheme }
                />
                <Followers />
                <Overview />
            </div>
        </ThemeProvider>
    );

};
