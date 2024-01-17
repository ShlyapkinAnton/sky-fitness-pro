import { useState, useEffect } from 'react';
import * as S from './profile-page.styles';
import { UpdateUserData } from '../../components/updata-user-data/updata-user-data';
import { userFitnessCards } from '../../mock/courses-data'
import { MainLayout } from '../../layouts/main-layout/main-layout';
import { useGetWorkoutsQuery, useGetCoursesQuery } from '../../serviceQuery/courses';
import { WorkoutsModal } from '../../components/workouts-modal/workouts-modal';
import { useSelector, useDispatch } from 'react-redux'
import { setAllWorkouts, setCurrentPage } from '../../store/slices/courses'
import { currentCourseSelector } from '../../store/selectors/courses'

export const ProfilePage = () => {
    const dispatch = useDispatch();
    const [isLoginMode, setIsLoginMode] = useState(null);
    const [loginShow, setLoginShow] = useState(false)
    const handleLoginClick = () => {setLoginShow(!loginShow); setIsLoginMode(true);}
    const [passwordShow, setPasswordShow] = useState(false)
    const handlePasswordClick = () => {setPasswordShow(!passwordShow); setIsLoginMode(false);}

    const {data, isError, isLoading} = useGetWorkoutsQuery(); 
    useEffect(() => {
        if (data) {
            dispatch(setAllWorkouts(data));
            dispatch(setCurrentPage('profile'))
        }
    }, [data, isError, isLoading])

    const [isShowWorkouts, setShowWorkouts] = useState(false)
    const user = useSelector((state) => state.auth);
    const courses = useGetCoursesQuery();
    const [workoutsData, setWorkoutsData] = useState([])
    const [courseId, setCourseId] = useState(null)

    const [isActive, setIsActive] = useState(false);
    useEffect(() => {
        if (loginShow || passwordShow) {
            setIsActive(true);
        }
    }, [loginShow, passwordShow, data])

    const handleShowWorkoutsModal = (id) => {
        if (isShowWorkouts) {
            setShowWorkouts(false);
            return;
        }

        setWorkoutsData(courses.data[id].workouts.map(id => data[id]))
        setCourseId(id)
        setShowWorkouts(true);
    }

    // // получить курс из LS и отобразить его вместо userFitnessCards
    // const courseUserId = localStorage.getItem('userCourses');
    // useEffect(() => {
    //     // console.log('workoutsData', workoutsData);
    //     if (courseUserId) {
    //         const arr = courses.data[courseUserId].workouts.map(id => data[id])
    //         console.log( arr);
    //     }
    // },[data, courseUserId])
    // //

    return (
            <MainLayout theme='white' isLoading={isLoading}>
                <S.MainInfo>
                    <S.MainTitle>Мой профиль</S.MainTitle>
                    <S.MainTextBlock>
                        <S.MainText>Логин: {user.userName}</S.MainText>
                        <S.MainText>Пароль: 12345678</S.MainText>
                    </S.MainTextBlock>
                    <S.MainButtonBlock>
                        <S.MainButton type="button" className="button" onClick={() => handleLoginClick()} >Изменить логин</S.MainButton>
                        <S.MainButton type="button" className="button" onClick={() => handlePasswordClick()}>Изменить пароль</S.MainButton>
                    </S.MainButtonBlock>
                </S.MainInfo> 
                <S.MainCards>
                    {userFitnessCards.map(({title, img, id}) => {
                        return (
                            <S.FitnessCard key={title} onClick={() => handleShowWorkoutsModal(id)}>
                                <S.FitnessCardTitle>
                                    {title}
                                </S.FitnessCardTitle>
                                <img src={`/img/${img}.svg`} alt={title} />
                                <S.FitnessCardButton type="button">Перейти</S.FitnessCardButton>
                            </S.FitnessCard>
                        )
                    })}
                </S.MainCards>
                {isActive && <UpdateUserData isLoginMode={isLoginMode} setIsActive={setIsActive}/> }
                {isShowWorkouts && <WorkoutsModal action={handleShowWorkoutsModal} data={workoutsData} courseId={courseId} />}
            </MainLayout>
    )
}