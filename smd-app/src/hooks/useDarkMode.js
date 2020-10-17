import { useEffect, useState } from "react";

export const useDarkMode = () => {

    const [theme, setTheme] = useState('Light');
    const [componentMounted, setComponentMounted] = useState(false);

    const setMode = (mode) => {
        window.localStorage.setItem('theme', mode)
        setTheme(mode);
    };

    const toggleTheme = () => {

        if (theme === 'Light') {
            window.localStorage.setItem('theme', 'Dark');
            setTheme('Dark');
        } else {
            window.localStorage.setItem('theme', 'Light');
            setTheme('Light');
        }

    };

    useEffect(() => {

        const localTheme = window.localStorage.getItem('theme');

        if (localTheme) {
            setTheme(localTheme);
        } else {
            setMode('Light');
        }

        setComponentMounted(true);

    }, []);

    return [theme, toggleTheme, componentMounted];

};