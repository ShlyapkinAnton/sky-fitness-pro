import * as S from '../nav-menu/nav-menu.styles';

export const NavMenu = ({page}) => {
  const handleLogout = () => {
    localStorage.removeItem('auth');
  }

  return (
    <S.NavMenu>
      <S.MenuList>
        <S.MenuItem>
          <S.MenuLink to="/" page={page} >На главную</S.MenuLink>
        </S.MenuItem>
        <S.MenuItem>
          <S.MenuLink to="/profile" page={page} >Профиль</S.MenuLink>
        </S.MenuItem>
        <S.MenuItem  onClick={() => handleLogout()}> 
          <S.MenuLink to="/auth" page={page} >Выйти</S.MenuLink>
        </S.MenuItem>
      </S.MenuList>
    </S.NavMenu>
  )
}    