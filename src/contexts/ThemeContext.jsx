import { createContext } from "react";

export const themes = {
    light: "light-content",
    dark: "dark-content",
};

export const ThemeContext = createContext({
    theme: themes.light,
    changeTheme: () => { }
});
