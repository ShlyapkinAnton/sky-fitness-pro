import { Logo } from "../logo/logo.jsx";
import * as S from './header.styles.js';

export const Header = () =>  {
    return (
        <S.Header>
            <S.HeaderContainer>
                <Logo theme="light"/>
                <S.HeaderButton to='/'>
                    Войти
                </S.HeaderButton>
            </S.HeaderContainer>
        </S.Header>
    );
};