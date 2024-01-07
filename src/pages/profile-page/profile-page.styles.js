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
    background-color: #FAFAFA;
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

// Main
export const Main = styled.div`
    padding: 100px 0 60px;
    background-color: #FAFAFA;
`

export const MainInfo = styled.div`
    margin-top: 75px;
    margin-bottom: 75px;
`

export const MainTitle = styled.h1`
    // font-family: 'StratosSkyeng', sans-serif;
    font-size: 48px;
    font-weight: 400;
    line-height: 56px;
`

export const MainTextBlock = styled.div`
    display: flex;
    flex-direction: column;
    row-gap: 20px;
    margin-top: 40px;
    margin-bottom: 40px;
`

export const MainText = styled.p`
    // font-family: 'StratosSkyeng', sans-serif;
    font-size: 24px;
    font-weight: 400;
    line-height: 32px;
`

export const MainButtonBlock = styled.div`
    display: flex;
    flex-direction: column;
    gap: 14px;
`

export const MainButton= styled.button`
    // font-family: 'StratosSkyeng', sans-serif;
    outline: none;
    border: none;
    width: 275px;
    height: 52px;
    border-radius: 46px;
    font-size: 20px;
    font-weight: 400;
    line-height: 24px;
    letter-spacing: -0.05px;
    padding: 12px 47px 16px 47px;
    color: #FFFFFF;
    background-color: #580EA2;
    cursor: pointer;

    &:hover {
        background: #3F007D;
    }
    &:active {
        background: #271A58;
    }
`

export const MainCards = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 44px 37px;
    margin-bottom: 34px;
`

// FitnessCard
export const FitnessCard = styled.div`
    position: relative;
    border-radius: 30px;
    box-shadow: 10px -10px 16px 0px #0000001A, -10px 10px 16px 0px #0000001A;
    cursor: pointer;
`

export const FitnessCardTitle = styled.h3`
    position: absolute;
    top: 30px;
    left: 30px;
    z-index: 2;
    color: var(--monochrome-black-20);
    font-size: 36px;
    font-weight: 800;
    line-height: 1.1;
    letter-spacing: -0.5px;
`

export const FitnessCardButton = styled.button`
    position: absolute;
    left: 30px;
    bottom: 30px;
    width: 136px;
    height: 43px;
    border-radius: 80px;
    background: #C7E957;
    border: none;
    // font-family: 'StratosSkyeng', sans-serif;
    font-size: 20px;
    font-weight: 400;
    line-height: 23px;
    text-align: center;
    color: black;
    cursor: pointer;

    &:hover {
        background: #DAF289;
    }
    &:active {
        background: #EBFFAB;
    }
`