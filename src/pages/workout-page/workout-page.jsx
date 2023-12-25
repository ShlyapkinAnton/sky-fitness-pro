import { BaseButton } from "../../components/button/button";
import { MainLayout } from "../../layouts/main-layout/main-layout";
import * as S from './workout-page.style';
import { useNavigate } from "react-router";
import { content } from '../../mock/courses-data'

export const WorkoutPage = ({theme, contentKey, isShowButton}) => {
    const navigate = useNavigate();

    const handleNavigation = () => {
        navigate('/');
    };

    return (
        <MainLayout theme={theme} isShowButton={isShowButton}>
            <S.WorkoutPageContainer>
                <S.TitleBox>
                    <S.Title>{content[contentKey].title}</S.Title>
                    <img src={`/img/page-img/${content[contentKey].img}.png`} alt={content[contentKey].title} />
                </S.TitleBox>
                
                <S.About>
                    <S.AboutTitle>{content[contentKey].about.title}:</S.AboutTitle>
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
                    <S.AboutTitle>{content[contentKey].directions.title}:</S.AboutTitle>
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
                    <BaseButton action={handleNavigation} theme='dark' text='Записаться на тренировку' />
                    <S.SubmitApplicationImg src="/img/phone.svg" alt="phone" />
                </S.SubmitApplication>
            </S.WorkoutPageContainer>
        </MainLayout>
    );
};