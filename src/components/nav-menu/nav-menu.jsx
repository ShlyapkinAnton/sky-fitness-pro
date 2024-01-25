import * as S from '../nav-menu/nav-menu.styles';
import { useDispatch } from 'react-redux'
import { setAuth } from '../../store/slices/auth'

export const NavMenu = ({page}) => {
  const dispatch = useDispatch();
  const handleLogout = () => {
    localStorage.removeItem('auth');  
    dispatch(setAuth({ accessToken: '', email: '', uid: '', refreshToken: ''}))
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
          <S.MenuLink to="/" page={page} >Выйти</S.MenuLink>
        </S.MenuItem>
      </S.MenuList>
    </S.NavMenu>
  )
}    