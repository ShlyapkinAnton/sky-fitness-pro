import { FitnessCard } from '../../components/fitness-card/fitness-card';
import * as S from './main-page.styles';
import { MainLayout } from '../../layouts/main-layout/main-layout';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setAllCourses, setCurrentPage } from '../../store/slices/courses'
import { useGetCoursesQuery } from '../../serviceQuery/courses'
import { allCoursesSelector } from '../../store/selectors/courses'

export const MainPage = ({theme}) => {
    const dispatch = useDispatch();
    const [errorFetch, setErrorFetch] = useState(null)
    const { data, isError, isLoading } = useGetCoursesQuery()
    const workout = useSelector(allCoursesSelector);
    const handlerScrollToTop = () => {
        window.scrollTo({top: 0, behavior: 'smooth'});
    };

    useEffect(() => {
        if (data) {
            const arr = Object.values(data).sort((a, b) => a.order - b.order);
            const arr2 = arr.flat().map(({_id, nameEN, nameRU}) => {
                let arr = { _id, nameEN, nameRU } 
                return arr
            })
            dispatch(setAllCourses(arr2))
            setErrorFetch(null)
            dispatch(setCurrentPage('main'))
        }
        if (isError) {
            setErrorFetch('Не удалось загрузить данные, попробуйте позже')
        }
    }, [data, isError])

    return (
        <MainLayout theme={theme} isLoading={isLoading}>
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
                {workout.map(({_id, nameEN, nameRU}) => {
                    return <FitnessCard title={nameRU} img={nameEN} key={_id} path={_id} />
                })}
            </S.MainCards>
            <S.MainButtonUp onClick={handlerScrollToTop}>Наверх ↑</S.MainButtonUp>
        </MainLayout>
    );
}