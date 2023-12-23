import './header.scss'
import { Logo } from "../logo/logo.jsx"
import { NavLink } from 'react-router-dom';

export const Header = () =>  {
    return (
        <header className="header">
            <div className="container header__container">
                <Logo theme="light"/>
                <NavLink to='/' className="header__button">
                    Войти
                </NavLink>
            </div>
        </header>
    );
};