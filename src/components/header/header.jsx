import {ReactComponent as HeaderLogoCat} from "../../img/svg/header-logo.svg";
import {ReactComponent as HeaderLogoText} from "../../img/svg/header-logo-text.svg";
import "../../styles/index.scss"

const Header = () => {
    return (
        <header className="header">
            <div className="header__container">
                <div className="logo">
                    <HeaderLogoCat className="logo__item"/>
                    <HeaderLogoText className="logo__item"/>
                </div>
                <div className="header__button-list">
                    <button className="header__button">Users</button>
                    <button className="header__button">Sign up</button>
                </div>
            </div>
        </header>
    );
};

export default Header;