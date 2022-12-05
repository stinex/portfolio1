import { useContext } from 'react';
import { LanguageContext } from '../contexts/LanguageContext';
import { ThemeContext, themes } from '../contexts/ThemeContext';


const Header = () => {
    const { langs, setEng, eng } = useContext(LanguageContext);

    return (
        <header>
            <div className="container_big">
                <a href="/" className="logo">
                    &#60;V/A&#62;
                </a>
                <nav>
                    <div className="links">
                        <a href="#1">&#60; {langs.header_links_one} /&#62;</a>
                        <a href="#2">&#60; {langs.header_links_two} /&#62;</a>
                        <a href="#3">&#60; {langs.header_links_three} /&#62;</a>
                        <a href="#4">&#60; {langs.header_links_four} /&#62;</a>
                    </div>
                    <ThemeContext.Consumer>
                        {({ changeTheme, setDarkMode, darkMode }) => (
                            <div className="switch" >
                                <input
                                    type="checkbox"
                                    checked={darkMode}
                                    onChange={() => {
                                        setDarkMode(!darkMode)
                                        changeTheme(!darkMode ? themes.dark : themes.light);
                                    }}
                                    name="link1"
                                    id="link1" />
                                <label htmlFor="link1"></label>
                            </div>
                        )}

                    </ThemeContext.Consumer>
                    <div className="language" onClick={() => setEng(!eng)}>
                        {langs.language}
                    </div>
                </nav>
            </div>
        </header>
    )
}

export default Header