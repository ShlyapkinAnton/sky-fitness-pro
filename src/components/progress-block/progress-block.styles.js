import styled from "styled-components";

export const ProgressMain = styled.div`
    position: fixed;
    width: 100vw;
    height: 100vh;
    left: 0px; 
    top: 0px; 
    z-index: 999;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    align-items: center;
    justify-content: center;
`

export const PageClose = styled.div`
    position: absolute;
    z-index: 999;
    top: 0px;
    right: 0px;
    padding: 10px;
    cursor: pointer;
`

export const ProgressBlock = styled.div`
    background-color: white;
    border-radius: 12px;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 36px 42px 0 44px;
    position: relative;
`

export const ProgressText = styled.span`
    position: absolute;
    padding: 4px 88px 200px;
    font-size: 2rem;
`

export const ProgressImg = styled.div`
`