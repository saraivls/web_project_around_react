
import headerLogo from "../../images/header_logo.png"; 

const Header = () => {
    return (
        <header className="header">
                    <img
                      className="header__logo"
                      src={headerLogo}
                      alt="Around US logo"
                    />
                </header>
    );
};
export default Header;