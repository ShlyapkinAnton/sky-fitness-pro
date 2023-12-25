import styled from "styled-components";

export const Button = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 275px;
    height: 52px;
    font-size: 18px;
    font-style: normal;
    font-weight: 400;
    line-height: 24px; /* 133.333% */
    letter-spacing: -0.05px;
    color: ${(props) => props.$theme === 'dark' ? 'var(--monochrome-white-20)' : 'var(--monochrome-black-20)'};
    background-color: ${(props) => props.$theme === 'dark' ? 'var(--color-bg-palette-purple-90)' : 'var(--monochrome-white-20)'};
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    border-radius: 46px;

    &:hover {
        background-color: ${(props) => props.$theme === 'dark' ? 'var(--color-bg-palette-purple-110)' : 'var(--color-bg-palette-grey-10)'};
    }

    &:active {
        background-color: ${(props) => props.$theme === 'dark' ? 'var(--color-bg-palette-purple-100)' : 'var(--color-bg-palette-grey-20)'};
    }
`;