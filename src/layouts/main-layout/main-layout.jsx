import { Header } from "../../components/header/header"
import { Main } from './main-layout.style'
import { Container } from "../../styles/common.styles"
import { Preloader } from "../../components/preloader/preloader"
import { useState } from "react"
import { useEffect } from "react"

export const MainLayout = ({children, theme, isShowButton, isLoggedIn}) => {
    const [isLoading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);
        setTimeout(() => {
          setLoading(false);
        }, 1500);
      }, []);

    return (
        <> 
            <Header theme={theme} isShowButton={isShowButton} isLoggedIn={isLoggedIn} />
            <Main $theme={theme}>
                {isLoading && <Preloader />}
                <Container>
                    {children}
                </Container>
            </Main>
        </>
        
    )
}