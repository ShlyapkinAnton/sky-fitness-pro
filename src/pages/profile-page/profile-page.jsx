import { useState, useEffect } from 'react';
import * as S from './profile-page.styles';
import { UpdateUserData } from '../../components/updata-user-data/updata-user-data';
import { Card } from '../../components/null-card/null-card';
import { MainLayout } from '../../layouts/main-layout/main-layout';
import { useGetWorkoutsQuery, useGetCoursesQuery, useGetCoursesUserQuery } from '../../serviceQuery/courses';
import { WorkoutsModal } from '../../components/workouts-modal/workouts-modal';
import { useDispatch, useSelector } from 'react-redux'
import { setAllWorkouts, setCurrentPage } from '../../store/slices/courses'
import { userCoursesSelector } from '../../store/selectors/courses'

export const ProfilePage = () => {
    const dispatch = useDispatch();
    const [isLoginMode, setIsLoginMode] = useState(null);
    const [loginShow, setLoginShow] = useState(false)
    const handleLoginClick = () => {setLoginShow(!loginShow); setIsLoginMode(true);}
    const [passwordShow, setPasswordShow] = useState(false)
    const handlePasswordClick = () => {setPasswordShow(!passwordShow); setIsLoginMode(false);}

    const {data, isError, isLoading} = useGetWorkoutsQuery();
    const [isShowWorkouts, setShowWorkouts] = useState(false)
    const user = JSON.parse(localStorage.getItem('auth')) ?? null;
    const courses = useGetCoursesQuery();
    const [workoutsData, setWorkoutsData] = useState([])
    const [courseId, setCourseId] = useState(null)
    const [courseUser, setCourseUser] = useState()
    const userCourses = useSelector(userCoursesSelector)
    const uid = JSON.parse(localStorage.getItem('auth')).userID
    const arrCourseUser = useGetCoursesUserQuery(uid).currentData;
    const [isActive, setIsActive] = useState(false);

    useEffect(() => {
        if (data) {
            dispatch(setAllWorkouts(data));
            dispatch(setCurrentPage('profile'))
        }
    }, [data, isError, isLoading])

    useEffect(() => {
        const course = arrCourseUser ?? userCourses;
        setCourseUser(course)
    },[arrCourseUser, courseUser, user, uid, data]);


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

    return (
            <MainLayout theme='white' isLoading={isLoading}>
                <S.MainInfo>
                    <S.MainTitle>Мой профиль</S.MainTitle>
                    <S.MainTextBlock>
                        <S.MainText>Логин: {user.userName}</S.MainText>
                    </S.MainTextBlock>
                    <S.MainButtonBlock>
                        <S.MainButton type="button" className="button" onClick={() => handleLoginClick()} >Изменить логин</S.MainButton>
                        <S.MainButton type="button" className="button" onClick={() => handlePasswordClick()}>Изменить пароль</S.MainButton>
                    </S.MainButtonBlock>
                </S.MainInfo> 
                <S.MainCards>
                    {courseUser ? courseUser.map(({id, img, title}) => {
                        return (
                            <S.FitnessCard key={title} onClick={() => handleShowWorkoutsModal(id)}>
                                <S.FitnessCardTitle>
                                    {title}
                                </S.FitnessCardTitle>
                                <img src={`/img/${img}.svg`} alt={title} />
                                <S.FitnessCardButton type="button">Перейти</S.FitnessCardButton>
                            </S.FitnessCard>
                        )
                    }) : (<Card/>)
                    }
                </S.MainCards>
                {isActive && <UpdateUserData isLoginMode={isLoginMode} setIsActive={setIsActive}/> }
                {isShowWorkouts && <WorkoutsModal action={handleShowWorkoutsModal} data={workoutsData} courseId={courseId} />}
            </MainLayout>
    )
}