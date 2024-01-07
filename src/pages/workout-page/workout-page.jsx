import * as S from './workout-page.styles';
import { MainLayout } from '../../layouts/main-layout/main-layout';
import { useParams } from 'react-router';
import { useGetWorkoutQuery } from '../../serviceQuery/courses';

export const WorkoutPage = ({theme, isLoggedIn}) => {
    const {id} = useParams();
    const { data, isLoading } = useGetWorkoutQuery(id);

    const getExerciseName = (exercise) => {
        const [ name ] = exercise.split('(');
        return name;
    }

    const getColor = (index) => {
        const progressBarColors = ["#565EEF", "#FF6D00", "#9A48F1"];
        return progressBarColors[index % progressBarColors.length]
    }

    return (
        <MainLayout theme={theme} isLoggedIn={isLoggedIn} isLoading={isLoading}>
            <S.WorkoutPageContainer>
                <S.TitleBox>
                    <S.Title>Йога</S.Title>
                    <S.WorkoutText>{data?.name}</S.WorkoutText>
                </S.TitleBox>

                <S.WorkoutVideo>
                    {isLoading ? 
                    <img src="/img/subtract.svg" alt="subtract" /> :
                    <iframe 
                        width="100%" height="100%"
                        src={data?.video}
                        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture; allow-popups"
                        allowfullscreen>
                    </iframe>}
                </S.WorkoutVideo>

                {data?.exercises?.length && <S.WorkoutBlock>
                    <S.WorkoutExercise>
                        <S.WorkoutExerciseHeader>Упражнения</S.WorkoutExerciseHeader>
                        <S.WorkoutExerciseTextBox>
                            {data?.exercises?.map((exercise, index) => {
                                return (
                                    <S.WorkoutExerciseText key={index}>{exercise.name}</S.WorkoutExerciseText>
                                )
                            })}
                        </S.WorkoutExerciseTextBox>
                        <S.WorkoutExerciseButton>Заполнить свой прогресс</S.WorkoutExerciseButton>
                    </S.WorkoutExercise>

                    <S.WorkoutProgress>
                        <S.WorkoutProgressHeader>Мой прогресс по тренировке:</S.WorkoutProgressHeader>
                        <S.WorkoutProgressBlock>

                        {data?.exercises?.map((exercise, index) => {
                                return (
                                    <S.WorkoutProgressContent key={index}>
                                        <S.WorkoutProgressText>{getExerciseName(exercise.name)}</S.WorkoutProgressText>
                                        <S.WorkoutProgressBar $color={getColor(index)}>
                                            <S.WorkoutProgressBarLine 
                                                $width={exercise.quantity} 
                                                $color={getColor(index)}
                                            >
                                                <S.WorkoutProgressBarSpan>{exercise.quantity}%</S.WorkoutProgressBarSpan>
                                            </S.WorkoutProgressBarLine>
                                        </S.WorkoutProgressBar>
                                    </S.WorkoutProgressContent>
                                )
                            })}
                        </S.WorkoutProgressBlock>
                    </S.WorkoutProgress>
                </S.WorkoutBlock>}
                

            </S.WorkoutPageContainer>
        </MainLayout>    
    )
}
