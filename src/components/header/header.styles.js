import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const Header = styled.header`
    position: fixed;
    top: 0;
    right: 0;
    left: 0;
    z-index: 999;
    width: 100%;
    padding: 24px 0;
    background-color: ${(props) => props.$theme === 'dark' ? 'var(--color-main-bg-dark)' : 'var(--color-main-bg-light)'};
`

export const HeaderContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 1190px;
    width: 100%;
    margin: 0 auto;
    padding: 0 15px;
`

export const HeaderButton = styled(NavLink)`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 5px 16px 7px 16px;
    font-size: 16px;
    line-height: 1.5;
    border-radius: 46px;
    background: var(--color-button-bg);
    transition: all 0.2s ease-in-out;

    &:hover {
        background: var(--color-button-bg-hover);
    }

    &:active {
        background: var(--color-button-bg-active);
    }
`

export const ProfileBlock = styled.div`
    display: flex;
    align-items: center;
    cursor: pointer;
`

export const ProfileIcon = styled.div`
    width: 3rem;
    height: 3rem;
    border-radius: 50%;
    background-color: rgb(105, 105, 105);
`

export const ProfileMail = styled.span`
    font-family: 'StratosSkyeng', sans-serif;
    font-size: 24px;
    line-height: 32px;
    text-align: right;
    margin-left: 15px;
    margin-right: 12px;
    color: ${(props) => props.page === 'main' ? 'white' : 'black'}; 
    max-width: 10rem;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
`
export const ProfileSvg = styled.div``