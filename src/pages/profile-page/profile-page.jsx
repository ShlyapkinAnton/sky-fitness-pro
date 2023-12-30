import { useState, useEffect } from 'react';
import * as S from './profile-page.styles';
import { Container } from '../../styles/common.styles';
import { Header } from '../../components/header/header';
// import { FitnessCard } from '../../components/fitness-card/fitness-card';
import { UpdateUserData } from '../../components/updata-user-data/updata-user-data';
import { userFitnessCards } from '../../mock/courses-data'

export const ProfilePage = () => {
    const [isLoginMode, setIsLoginMode] = useState(null);
    const [loginShow, setLoginShow] = useState(false)
    const handleLoginClick = () => {setLoginShow(!loginShow); setIsLoginMode(true);}
    const [passwordShow, setPasswordShow] = useState(false)
    const handlePasswordClick = () => {setPasswordShow(!passwordShow); setIsLoginMode(false);}

    // const [isActive, setIsActive] = useState(false);
    // useEffect(() => {
    //     if (loginShow === true || passwordShow === true) {
    //         setIsActive(true);
    //     }
    // }, [loginShow, passwordShow])


    return (
        <S.Main>
            <Container>
                <Header theme='white' isLoggedIn="true" />

                <S.MainInfo>
                    <S.MainTitle>Мой профиль</S.MainTitle>
                    <S.MainTextBlock>
                        <S.MainText>Логин: sergey.petrov96@gmail.com</S.MainText>
                        <S.MainText>Пароль: 12345678</S.MainText>
                    </S.MainTextBlock>
                    <S.MainButtonBlock>
                        <S.MainButton type="button" className="button" onClick={() => handleLoginClick()} >Изменить логин</S.MainButton>
                        <S.MainButton type="button" className="button" onClick={() => handlePasswordClick()}>Изменить пароль</S.MainButton>
                    </S.MainButtonBlock>
                </S.MainInfo> 
                <S.MainCards>
                    {
                        userFitnessCards.map(({title, img}) => {
                            return (
                                <S.FitnessCard key={title} to='/'>
                                    <S.FitnessCardTitle>
                                        {title}
                                    </S.FitnessCardTitle>
                                    <img src={`/img/${img}.svg`} alt={title} />
                                    <S.FitnessCardButton type="button">Перейти</S.FitnessCardButton>
                                </S.FitnessCard>
                            )
                        })
                    }
                </S.MainCards>
                {/* {isActive && <UpdateUserData isLoginMode={isLoginMode} /> } */}
                {loginShow && <UpdateUserData isLoginMode={isLoginMode} /> }
                {passwordShow && <UpdateUserData isLoginMode={isLoginMode} />}

            </Container>
        </S.Main>
    )
}