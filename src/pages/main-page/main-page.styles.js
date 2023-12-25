import styled from "styled-components";

export const MainInfo = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`

export const MainTitleBox = styled.div`
    width: 850px;
`

export const MainSuperTitle = styled.p`
    margin-bottom: 17px;
    color: var(--monochrome-white-20);
    opacity: 0.5;
    font-size: 20px;
    line-height: 1.15;
    letter-spacing: -0.05px;
`

export const MainTitle = styled.h1`
    color: var(--color-text-light-grey);
    font-size: 60px;
    line-height: 0.9;
    letter-spacing: -1.169px;
`

export const MainImg = styled.img`
    margin-right: -75px;
`

export const MainCards = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 44px 37px;
    margin-bottom: 34px;
`

export const MainButtonUp = styled.button`
    position: relative;
    left: 50%;
    transform: translateX(-50%);
    display: inline-flex;
    justify-content: center;
    align-items: center;
    padding: 7px 24px 9px 24px;
    font-size: 24px;
    font-style: normal;
    font-weight: 400;
    line-height: 1.3;
    letter-spacing: -0.1px;
    border-radius: 46px;
    background: var(--color-text-light-green);
    transition: all 0.2s ease-in-out;
    cursor: pointer;

    &:hover {
        background: var(--color-text-light-green-hover);
    }

    &:active {
        background: var(--color-text-light-green-active);
    }
`
