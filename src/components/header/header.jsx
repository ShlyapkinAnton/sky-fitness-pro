import { Logo } from "../logo/logo.jsx";
import * as S from './header.styles.js';

export const Header = ({theme, isLoggedIn = false}) =>  {
    return (
        <S.Header $theme={theme}>
            <S.HeaderContainer>
                <Logo theme={theme}/>
                {!isLoggedIn ? <S.HeaderButton to='/'>
                    Войти
                </S.HeaderButton> : 'Сергей'}
            </S.HeaderContainer>
        </S.Header>
    );
};