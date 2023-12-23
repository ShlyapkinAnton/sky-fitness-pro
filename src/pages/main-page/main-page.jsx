import { FitnessCard } from '../../components/fitness-card/fitness-card';
import { Header } from '../../components/header/header';
import * as S from './main-page.styles';
import { Container } from '../../styles/common.styles';

export const MainPage = () => {
    const fitnessCards = [
        {title: 'Йога', img: 'card1'},
        {title: 'Стретчинг', img: 'card2'},
        {title: 'Танцевальный фитнес', img: 'card3'},
        {title: 'Степ-аэробика', img: 'card4'},
        {title: 'Бодифлекс', img: 'card5'},
    ];

    const handlerScrollToTop = () => {
        window.scrollTo({top: 0, behavior: 'smooth'});
    };

    return (
        <S.Main>
            <Container>
                <Header />
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
                        fitnessCards.map(({title, img}) => {
                            return <FitnessCard title={title} img={img} key={img} />
                        })
                    }
                </S.MainCards>
                <S.MainButtonUp onClick={handlerScrollToTop}>
                    Наверх ↑
                </S.MainButtonUp>
            </Container>
        </S.Main>
    );
}