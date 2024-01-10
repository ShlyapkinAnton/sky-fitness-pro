import styled from 'styled-components'
import { NavLink } from 'react-router-dom'

export const NavMenu = styled.div`
  position: absolute;
  margin-left: 80px;
`

export const MenuList = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  list-style: none;
`

export const MenuItem = styled.li`
  padding: 5px 0;
`

export const MenuLink = styled(NavLink)`
  color: #000000;
  font-weight: 400;
  font-size: 20px;
  line-height: 24px;
  color: ${(props) => props.page === 'main' ? 'white' : 'black'}; 
`
