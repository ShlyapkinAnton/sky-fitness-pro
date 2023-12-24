import { NavLink } from "react-router-dom"

export const Logo = ({theme = 'dark'}) => {
    const logoTheme = theme === 'dark' ? 'white' : 'black';

    return (
    <NavLink to='/'>
        <img src={`/img/logo-${logoTheme}.svg`} alt="logo" />
    </NavLink>
    );
};