import { BaseButton } from "../../components/button/button";
import { MainLayout } from "../../layouts/main-layout/main-layout";
import * as S from './workout-page.style';
import { useNavigate } from "react-router";

export const WorkoutPage = ({theme, contentKey, isShowButton}) => {
    const navigate = useNavigate();

    const content = {
        yoga: {
            title: 'Йога',
            img: 'skill1',
            about: {
                title: 'Подойдет для вас, если',
                textList: [
                    'Давно хотели попробовать йогу, но не решались начать.',
                    'Хотите укрепить позвоночник, избавиться от болей в спине и суставах.',
                    'Ищете активность, полезную для тела и души.',
                ]
            },
            directions: {
                title: 'Направления',
                textList: [
                    'Йога для новичков',
                    'Классическая йога',
                    'Йогатерапия',
                    'Кундалини-йога',
                    'Хатха-йога',
                    'Аштанга-йога',
                ]
            },
            text: 'Благодаря комплексному воздействию упражнений происходит проработка всех групп мышц, тренировка суставов, улучшается циркуляция крови. Кроме того, упражнения дарят отличное настроение, заряжают бодростью и помогают противостоять стрессам.'
        },
        stretching: {
            title: 'Стретчинг',
            img: 'skill1',
            about: {
                title: 'Подойдет для вас, если',
                textList: [
                    'Давно хотели попробовать йогу, но не решались начать.',
                    'Хотите укрепить позвоночник, избавиться от болей в спине и суставах.',
                    'Ищете активность, полезную для тела и души.',
                ]
            },
            directions: {
                title: 'Направления',
                textList: [
                    'Йога для новичков',
                    'Классическая йога',
                    'Йогатерапия',
                    'Кундалини-йога',
                    'Хатха-йога',
                    'Аштанга-йога',
                ]
            },
            text: 'Благодаря комплексному воздействию упражнений происходит проработка всех групп мышц, тренировка суставов, улучшается циркуляция крови. Кроме того, упражнения дарят отличное настроение, заряжают бодростью и помогают противостоять стрессам.'
        },
        danceFitness: {
            title: 'Танцевальный фитнес',
            img: 'skill1',
            about: {
                title: 'Подойдет для вас, если',
                textList: [
                    'Давно хотели попробовать йогу, но не решались начать.',
                    'Хотите укрепить позвоночник, избавиться от болей в спине и суставах.',
                    'Ищете активность, полезную для тела и души.',
                ]
            },
            directions: {
                title: 'Направления',
                textList: [
                    'Йога для новичков',
                    'Классическая йога',
                    'Йогатерапия',
                    'Кундалини-йога',
                    'Хатха-йога',
                    'Аштанга-йога',
                ]
            },
            text: 'Благодаря комплексному воздействию упражнений происходит проработка всех групп мышц, тренировка суставов, улучшается циркуляция крови. Кроме того, упражнения дарят отличное настроение, заряжают бодростью и помогают противостоять стрессам.'
        },
        stepAerobics: {
            title: 'Степ-аэробика',
            img: 'skill1',
            about: {
                title: 'Подойдет для вас, если',
                textList: [
                    'Давно хотели попробовать йогу, но не решались начать.',
                    'Хотите укрепить позвоночник, избавиться от болей в спине и суставах.',
                    'Ищете активность, полезную для тела и души.',
                ]
            },
            directions: {
                title: 'Направления',
                textList: [
                    'Йога для новичков',
                    'Классическая йога',
                    'Йогатерапия',
                    'Кундалини-йога',
                    'Хатха-йога',
                    'Аштанга-йога',
                ]
            },
            text: 'Благодаря комплексному воздействию упражнений происходит проработка всех групп мышц, тренировка суставов, улучшается циркуляция крови. Кроме того, упражнения дарят отличное настроение, заряжают бодростью и помогают противостоять стрессам.'
        },
        bodyflex: {
            title: 'Бодифлекс',
            img: 'skill1',
            about: {
                title: 'Подойдет для вас, если',
                textList: [
                    'Давно хотели попробовать йогу, но не решались начать.',
                    'Хотите укрепить позвоночник, избавиться от болей в спине и суставах.',
                    'Ищете активность, полезную для тела и души.',
                ]
            },
            directions: {
                title: 'Направления',
                textList: [
                    'Йога для новичков',
                    'Классическая йога',
                    'Йогатерапия',
                    'Кундалини-йога',
                    'Хатха-йога',
                    'Аштанга-йога',
                ]
            },
            text: 'Благодаря комплексному воздействию упражнений происходит проработка всех групп мышц, тренировка суставов, улучшается циркуляция крови. Кроме того, упражнения дарят отличное настроение, заряжают бодростью и помогают противостоять стрессам.'
        },
    };

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
                    <BaseButton action={handleNavigation} theme='dark' text='Оставьте заявку' />
                    <S.SubmitApplicationImg src="/img/phone.svg" alt="phone" />
                </S.SubmitApplication>
            </S.WorkoutPageContainer>
        </MainLayout>
    );
};