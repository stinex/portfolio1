
import { useState } from "react";
import { useEffect } from "react";
import { createContext } from "react";

import EN from '../en.json';
import RU from '../ru.json';

const langs = {
    en: EN,
    ru: RU
};

export const LanguageContext = createContext()

export const LanguageProvider = ({ children }) => {
    const [language, setlanguage] = useState(langs.en)
    const [eng, setEng] = useState(false)

    useEffect(() => {
        switch (eng) {
            case true:
                setlanguage(langs.ru)
                break
            case false:
            default:
                setlanguage(langs.en)
                break
        }
    }, [eng])

    return (
        <LanguageContext.Provider value={{ langs: language, setlanguage, setEng, eng }}>
            {children}
        </LanguageContext.Provider>
    )
}
