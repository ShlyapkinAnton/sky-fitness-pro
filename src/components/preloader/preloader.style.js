import styled from "styled-components";

export const Preloader = styled.div`
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 1999;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    flex-grow: 1;
    background-color: var(--color-main-bg-dark);
`;

export const PreloaderWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`;