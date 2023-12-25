import styled from "styled-components"

export const Main = styled.main`
    padding: 100px 0 60px;
    background-color: ${(props) => props.$theme === 'dark' ? 'var(--color-main-bg-dark)' : 'var(--color-main-bg-light)'};
`