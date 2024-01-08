import { Logo } from "../logo/logo.jsx";
import * as S from './header.styles.js';
import { useState } from 'react';
import { NavMenu } from '../../components/nav-menu/nav-menu.jsx';
import { useSelector } from 'react-redux'

export const Header = ({theme, isShowButton = true}) => {
    const [showMore, setShowMore] = useState(false)
    const handleMoreClick = () => {setShowMore(!showMore)}
    const user = useSelector((state) => state.auth);

    return (
        <S.Header $theme={theme}>
            <S.HeaderContainer>
                <Logo theme={theme}/>
                {isShowButton && (
                    <>{!user.userName ? <S.HeaderButton to='/auth'>Войти</S.HeaderButton> : 
                    <S.ProfileBlock onClick={() => handleMoreClick()}>
                        <S.ProfileIcon></S.ProfileIcon>
                        <S.ProfileMail>
                            {user.userName}
                            {showMore && <NavMenu /> }
                        </S.ProfileMail>
                        <S.ProfileSvg>
                            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="9" viewBox="0 0 14 9" fill="none"><path d="M12.3552 1.03308L6.67761 6.7107L0.999999 1.03308" stroke="black" strokeWidth="2"/></svg>
                        </S.ProfileSvg>
                </S.ProfileBlock>}</>
                )}
            </S.HeaderContainer>
        </S.Header>
    );
};