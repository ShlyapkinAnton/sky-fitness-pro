import { Header } from "../../components/header/header"
import { Main } from './main-layout.style'
import { Container } from "../../styles/common.styles"
import { Preloader } from "../../components/preloader/preloader"
import { useState } from "react"
import { useEffect } from "react"

export const MainLayout = ({children, theme, isShowButton, isLoggedIn, isLoading = false}) => {
    const [isLoadingPreloader, setLoadingPreloader] = useState(false);

    useEffect(() => {
        if (!isLoading) {
            setLoadingPreloader(true);
            setTimeout(() => {
                setLoadingPreloader(false);
            }, 1500);
        }
      }, []);

    return (
        <> 
            {(isLoading || isLoadingPreloader) && <Preloader />}
            <Header theme={theme} isShowButton={isShowButton} isLoggedIn={isLoggedIn} />
            <Main $theme={theme}>
                <Container>
                    {children}
                </Container>
            </Main>
        </>
        
    )
}