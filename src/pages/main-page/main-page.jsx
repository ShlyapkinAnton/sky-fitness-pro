import { Header } from '../../components/header/header';
import './main-page.scss';

export const MainPage = () => {
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
            </div>
        </main>
    );
}