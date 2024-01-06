import { FitnessCard } from '../../components/fitness-card/fitness-card';
import * as S from './main-page.styles';
import { MainLayout } from '../../layouts/main-layout/main-layout';
import { fitnessCards } from '../../mock/courses-data';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setAllCourses } from '../../store/slices/courses'
import { useGetCoursesQuery } from '../../serviceQuery/courses'
import { allCoursesSelector } from '../../store/selectors/courses'

export const MainPage = ({theme}) => {
    const handlerScrollToTop = () => {
        window.scrollTo({top: 0, behavior: 'smooth'});
    };

    const [errorFetch, setErrorFetch] = useState(null)
    const { data, isError, isLoading } = useGetCoursesQuery()
    const courseAll = useSelector(allCoursesSelector)
    const dispatch = useDispatch()
    
    useEffect(() => {
        if (data) {
            const arr = Object.values(data).sort((a, b) => a.order - b.order)
            dispatch(setAllCourses(arr))
            setErrorFetch(null)
        }
        if (isError) {
            setErrorFetch('Не удалось загрузить плейлист, попробуйте позже')
        }
    }, [data, isError])

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
                {fitnessCards.map(({title, img, path}) => {
                    return <FitnessCard title={title} img={img} key={img} path={path} />
                })}
            </S.MainCards>
            <S.MainButtonUp onClick={handlerScrollToTop}>
                Наверх ↑
            </S.MainButtonUp>
        </MainLayout>
    );
}