import { FitnessCard } from '../../components/fitness-card/fitness-card';
import * as S from './main-page.styles';
import { MainLayout } from '../../layouts/main-layout/main-layout';

export const MainPage = ({theme}) => {
    const fitnessCards = [
        {title: 'Йога', img: 'card1', path: '/workout/yoga'},
        {title: 'Стретчинг', img: 'card2', path: '/workout/stretching'},
        {title: 'Танцевальный фитнес', img: 'card3', path: '/workout/dance-fitness'},
        {title: 'Степ-аэробика', img: 'card4', path: '/workout/step-aerobics'},
        {title: 'Бодифлекс', img: 'card5', path: '/workout/bodyflex'},
    ];

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