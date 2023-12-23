import { FitnessCard } from '../../components/fitness-card/fitness-card';
import { Header } from '../../components/header/header';
import './main-page.scss';

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
        <main className='main-page'>
            <div className='container'>
                <Header />
                <div className="main-page__info">
                    <div className="main-page__title-box">
                        <p className="main-page__super-title">
                            Онлайн-тренировки для занятий дома
                        </p>
                        <h1 className="main-page__title">
                            Начните заниматься спортом и улучшите качество жизни
                        </h1>
                    </div>
                    <img src="/img/sale-sticker.svg" alt="sale-sticker" className='main-page__info-img' />
                </div>
                <div className="main-page__cards">
                    {
                        fitnessCards.map(({title, img}) => {
                            return <FitnessCard title={title} img={img} key={img} />
                        })
                    }
                </div>
                <button className='main-page__button-up' onClick={handlerScrollToTop}>Наверх ↑</button>
            </div>
        </main>
    );
}