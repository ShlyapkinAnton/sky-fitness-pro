import { BaseButton } from "../../components/button/button";
import { MainLayout } from "../../layouts/main-layout/main-layout";
import * as S from './course-page.style';
import { content } from '../../mock/courses-data'
import { ProgressBlock } from '../../components/progress-block/progress-block'
import { useState } from 'react';
import { useParams } from 'react-router-dom';

export const CoursePage = ({theme, isShowButton}) => {
    const [show, setShow] = useState(false)
    const handleLoginClick = () => {setShow(!show)}
    const param = useParams()
    const contentKey = param.id

    return (
        <MainLayout theme={theme} isShowButton={isShowButton}>
            <S.CoursePageContainer>
                <S.TitleBox>
                    <S.Title>{content[contentKey].title}</S.Title>
                    <img src={`/img/page-img/${content[contentKey].img}.svg`} alt={content[contentKey].title} />
                </S.TitleBox>
                
                <S.About>
                    <S.AboutTitle>Подойдет для вас, если:</S.AboutTitle>
                    <S.AboutList>
                        {content[contentKey].about.textList.map((item, index) => {
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
                        {content[contentKey].directions.textList.map((item, index) => {
                            return (
                                <S.DirectionsListItem key={index}>
                                    {item}
                                </S.DirectionsListItem>
                            );
                        })}
                    </S.DirectionsList>
                </S.Directions>

                <S.Text>
                    {content[contentKey].text}
                </S.Text>

                <S.SubmitApplication>
                    <S.SubmitApplicationText>
                        Оставьте заявку на пробное занятие, мы свяжемся 
                        с вами, поможем с выбором направления и тренера, с которым тренировки принесут здоровье и радость!
                    </S.SubmitApplicationText>
                    <BaseButton action={() => handleLoginClick()} theme='dark' text='Записаться на тренировку' />
                    <S.SubmitApplicationImg src="/img/phone.svg" alt="phone" />
                </S.SubmitApplication>
                {show && <ProgressBlock text = 'Вы успешно записались!' setShow={setShow}/>}
            </S.CoursePageContainer>
        </MainLayout>
    );
};