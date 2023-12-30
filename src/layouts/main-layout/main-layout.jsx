import { Header } from "../../components/header/header"
import { Main } from './main-layout.style'
import { Container } from "../../styles/common.styles"

export const MainLayout = ({children, theme, isShowButton, isLoggedIn}) => {
    return (
        <>
            <Header theme={theme} isShowButton={isShowButton} isLoggedIn={isLoggedIn} />
            <Main $theme={theme}>
                <Container>
                    {children}
                </Container>
            </Main>
        </>
    )
}