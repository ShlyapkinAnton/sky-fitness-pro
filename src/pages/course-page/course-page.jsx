import { BaseButton } from "../../components/button/button";
import { MainLayout } from "../../layouts/main-layout/main-layout";
import * as S from './course-page.style';
import { ProgressBlock } from '../../components/progress-block/progress-block'
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { currentCourseSelector } from '../../store/selectors/courses'
import { useGetCourseQuery } from '../../serviceQuery/courses'
import { setCurrentCourse, setCurrentPage } from '../../store/slices/courses'
import { useNavigate  } from "react-router-dom";

export const CoursePage = ({theme, isShowButton}) => {
    const [show, setShow] = useState(false)
    const auth = localStorage.getItem('auth')
    const navigate = useNavigate();
    const handleLoginClick = ({auth}) => {
        if (!!auth) {
            setShow(!show)
            localStorage.setItem('userCourses', id)
        }
        else {
            navigate('/auth', { replace: true });
        }
    }

    const dispatch = useDispatch()
    const { id } = useParams()
    const { data, isLoading } = useGetCourseQuery(id)   
    const course = useSelector(currentCourseSelector)

    useEffect(() => {
        if (data) {
            dispatch(setCurrentCourse(data))
            dispatch(setCurrentPage('course'))
        }
    }, [data])

    return (
        <MainLayout theme={theme} isShowButton={isShowButton} isLoading={isLoading}>
            <S.CoursePageContainer>
                <S.TitleBox>
                    <S.Title>{course.nameRU}</S.Title>
                    <img src={`/img/page-img/${course.nameEN}.svg`} alt={course.nameRU} />
                </S.TitleBox>
                
                <S.About>
                    <S.AboutTitle>Подойдет для вас, если:</S.AboutTitle>
                    <S.AboutList>
                        {course.fitting?.map((item, index) => {
                            return (
                                <S.AboutListItem key={index}>
                                    <S.AboutListItemIndex>
                                        {index + 1}
                                    </S.AboutListItemIndex>
                                    {item}
                                </S.AboutListItem>
                            );
                        })}
                    </S.AboutList>
                </S.About>

               <S.Directions>
                    <S.AboutTitle>Направления:</S.AboutTitle>
                    <S.DirectionsList>
                        {course.directions?.map((item, index) => {
                            return (
                                <S.DirectionsListItem key={index}>
                                    {item}
                                </S.DirectionsListItem>
                            );
                        })}
                    </S.DirectionsList>
                </S.Directions>

                <S.Text>
                    {course.description}
                </S.Text>

                <S.SubmitApplication>
                    <S.SubmitApplicationText>
                        Оставьте заявку на пробное занятие, мы свяжемся 
                        с вами, поможем с выбором направления и тренера, с которым тренировки принесут здоровье и радость!
                    </S.SubmitApplicationText>
                    <BaseButton action={() => handleLoginClick({auth})} theme='dark' text='Записаться на тренировку' />
                    <S.SubmitApplicationImg src="/img/phone.svg" alt="phone" />
                </S.SubmitApplication>
                {show && <ProgressBlock text = 'Вы успешно записались!' setShow={setShow}/>} 
            </S.CoursePageContainer>
        </MainLayout>
    );
};