
import { useState } from "react";
import { useEffect } from "react";
import { createContext } from "react";
import Cookies from 'js-cookie'
import EN from '../en.json';
import RU from '../ru.json';

const langs = {
    en: EN,
    ru: RU
};

export const LanguageContext = createContext()

export const LanguageProvider = ({ children }) => {

    const [language, setlanguage] = useState(langs.en),
        [eng, setEng] = useState(false),
        languageCookies = Cookies.get('language')


    useEffect(() => {
        if (languageCookies === 'ru') {
            setlanguage(langs.ru)
            setEng(true)
        } else if (languageCookies === 'en') {
            setlanguage(langs.en)
            setEng(false)
        }
    }, [])

    useEffect(() => {
        switch (eng) {
            case true:
                setlanguage(langs.ru)
                Cookies.set('language', 'ru')
                break
            case false:
            default:
                setlanguage(langs.en)
                Cookies.set('language', 'en')
                break
        }
    }, [eng])

    return (
        <LanguageContext.Provider value={{ langs: language, setlanguage, setEng, eng }}>
            {children}
        </LanguageContext.Provider>
    )
}
