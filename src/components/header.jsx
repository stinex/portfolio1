import { ThemeContext, themes } from '../contexts/ThemeContext';

const Header = () => {
    return (
        <header>
            <div className="container_big">
                <a href="/" className="logo">
                    &#60;V/A&#62;
                </a>
                <nav>
                    <div className="links">
                        <a href="#1">&#60; skills /&#62;</a>
                        <a href="#2">&#60; experience /&#62;</a>
                        <a href="#3">&#60; about /&#62;</a>
                        <a href="#4">&#60; contact /&#62;</a>
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
                    <div className="language">
                        RU
                    </div>
                </nav>
            </div>
        </header>
    )
}

export default Header