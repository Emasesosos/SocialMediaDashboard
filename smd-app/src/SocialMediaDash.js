import React from 'react';
import { ThemeProvider } from 'styled-components';
import { useDarkMode } from './hooks/useDarkMode';
import { lightTheme, darkTheme } from './theme/theme';
import { GlobalStyles } from './theme/global';
import { Navbar } from './components/Navbar/Navbar';
import { Followers } from './components/Followers/Followers';
import { Overview } from './components/Overview/Overview';

export const SocialMediaDash = () => {

    const [theme, toggleTheme, componentMounted] = useDarkMode();
    const themeMode = theme === 'Light' ? lightTheme : darkTheme;

    if (!componentMounted) {
        return <div />
    };

    return (
        <ThemeProvider theme={ themeMode }>
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
