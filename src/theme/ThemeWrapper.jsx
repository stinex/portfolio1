import React, { useState, useEffect } from 'react';
import { ThemeContext, themes } from '../contexts/ThemeContext';
import Cookies from 'js-cookie'

export default function ThemeContextWrapper({ children }) {
    const [theme, setTheme] = useState(themes.light),
        themeCookies = Cookies.get('theme')

    const [darkMode, setDarkMode] = useState(false);

    function changeTheme(theme) {
        setTheme(theme)
    }

    useEffect(() => {
        setTheme(themeCookies)
    }, [])

    useEffect(() => {
        switch (theme) {
            case themes.dark:
                document.body.classList.add('dark-content')
                Cookies.set('theme', 'dark-content')
                setDarkMode(true)
                break
            case themes.light:
            default:
                document.body.classList.remove('dark-content')
                Cookies.set('theme', 'light-content')
                setDarkMode(false)
                break
        }
    }, [theme])
    return (
        <ThemeContext.Provider value={{ theme: theme, changeTheme: changeTheme, setDarkMode, darkMode }}>
            {children}
        </ThemeContext.Provider>
    );
}