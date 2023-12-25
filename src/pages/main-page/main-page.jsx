import { FitnessCard } from '../../components/fitness-card/fitness-card';
import * as S from './main-page.styles';
import { MainLayout } from '../../layouts/main-layout/main-layout';
import { fitnessCards } from '../../mock/courses-data'

export const MainPage = ({theme}) => {

    const handlerScrollToTop = () => {
        window.scrollTo({top: 0, behavior: 'smooth'});
    };

    return (
        <MainLayout theme={theme}>
            <S.MainInfo>
                <S.MainTitleBox>
                    <S.MainSuperTitle>
                        Онлайн-тренировки для занятий дома
                    </S.MainSuperTitle>
                    <S.MainTitle>
                        Начните заниматься спортом и улучшите качество жизни
                    </S.MainTitle>
                </S.MainTitleBox>
                <S.MainImg src="/img/sale-sticker.svg" alt="sale-sticker" />
            </S.MainInfo>
            <S.MainCards>
                {
                    fitnessCards.map(({title, img, path}) => {
                        return <FitnessCard title={title} img={img} key={img} path={path} />
                    })
                }
            </S.MainCards>
            <S.MainButtonUp onClick={handlerScrollToTop}>
                Наверх ↑
            </S.MainButtonUp>
        </MainLayout>
    );
}