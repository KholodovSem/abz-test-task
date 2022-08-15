import AnchorLink from 'react-anchor-link-smooth-scroll';
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
                    <AnchorLink href="#users" className="header__button">Users</AnchorLink>
                    <AnchorLink href="#createUser" className="header__button">Sign up</AnchorLink>
                </div>
            </div>
        </header>
    );
};

export default Header;