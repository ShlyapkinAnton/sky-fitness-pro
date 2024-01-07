import * as S from '../nav-menu/nav-menu.styles';

export const NavMenu = () => {
  const handleLogout = () => {
    localStorage.removeItem('auth');
  }

  return (
    <S.NavMenu>
      <S.MenuList>
        <S.MenuItem>
          <S.MenuLink to="/">На главную</S.MenuLink>
        </S.MenuItem>
        <S.MenuItem>
          <S.MenuLink to="/profile">Профиль</S.MenuLink>
        </S.MenuItem>
        <S.MenuItem  onClick={() => handleLogout()}> 
          <S.MenuLink to="/auth">Выйти</S.MenuLink>
        </S.MenuItem>
      </S.MenuList>
    </S.NavMenu>
  )
}    