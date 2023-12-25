import { Header } from "../../components/header/header"
import { Main } from './main-layout.style'
import { Container } from "../../styles/common.styles"

export const MainLayout = ({children, theme, isShowButton}) => {
    return (
        <>
            <Header theme={theme} isShowButton={isShowButton} />
            <Main $theme={theme}>
                <Container>
                    {children}
                </Container>
            </Main>
        </>
    )
}