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
                    <div className="switch">
                        <input type="checkbox" name="link1" id="link1" />
                        <label htmlFor="link1"></label>
                    </div>

                    <div className="language">
                        RU
                    </div>
                </nav>
            </div>
        </header>
    )
}

export default Header