import * as S from './workout-page.styles';
import { MainLayout } from '../../layouts/main-layout/main-layout';
import { useState, useEffect } from 'react';
import courses from '../../mock/data.json'

export const WorkoutPage = ({theme, isLoggedIn}) => {
    console.log(courses);
    return (
        <MainLayout theme={theme} isLoggedIn={isLoggedIn}>
            <S.WorkoutPageContainer>
                <S.TitleBox>
                    <S.Title>Йога</S.Title>
                    <S.WorkoutText>Красота и здоровье / Йога на каждый день / 2 день</S.WorkoutText>
                </S.TitleBox>

                <S.WorkoutVideo>
                    <img src="/img/subtract.svg" alt="subtract" />
                </S.WorkoutVideo>

                <S.WorkoutBlock>
                    <S.WorkoutExercise>
                        <S.WorkoutExerciseHeader>Упражнения</S.WorkoutExerciseHeader>
                        <S.WorkoutExerciseTextBox>
                            <S.WorkoutExerciseText>Ножницы горизонтальные (10 повторений)</S.WorkoutExerciseText>
                            <S.WorkoutExerciseText>Ножницы вертикальные (10 повторений)</S.WorkoutExerciseText>
                            <S.WorkoutExerciseText>Шлюпка (15 повторений)</S.WorkoutExerciseText>
                        </S.WorkoutExerciseTextBox>
                        <S.WorkoutExerciseButton>Заполнить свой прогресс</S.WorkoutExerciseButton>
                    </S.WorkoutExercise>

                    <S.WorkoutProgress>
                        <S.WorkoutProgressHeader>Мой прогресс по тренировке:</S.WorkoutProgressHeader>
                        <S.WorkoutProgressBlock>

                            <S.WorkoutProgressContent>
                                <S.WorkoutProgressText>Наклоны вперед</S.WorkoutProgressText>
                                <S.WorkoutProgressBar>
                                    <S.WorkoutProgressBarLine>
                                        <S.WorkoutProgressBarSpan>45%</S.WorkoutProgressBarSpan>
                                    </S.WorkoutProgressBarLine>
                                </S.WorkoutProgressBar>
                            </S.WorkoutProgressContent>

                            <S.WorkoutProgressContent>
                                <S.WorkoutProgressText>Наклоны назад</S.WorkoutProgressText>
                                <S.WorkoutProgressBar>
                                    <S.WorkoutProgressBarLine>
                                        <S.WorkoutProgressBarSpan>45%</S.WorkoutProgressBarSpan>
                                    </S.WorkoutProgressBarLine>
                                </S.WorkoutProgressBar>
                            </S.WorkoutProgressContent>

                            <S.WorkoutProgressContent>
                                <S.WorkoutProgressText>Поднятие ног, согнутых в коленях</S.WorkoutProgressText>
                                <S.WorkoutProgressBar>
                                    <S.WorkoutProgressBarLine>
                                        <S.WorkoutProgressBarSpan>45%</S.WorkoutProgressBarSpan>
                                    </S.WorkoutProgressBarLine>
                                </S.WorkoutProgressBar>
                            </S.WorkoutProgressContent>

                        </S.WorkoutProgressBlock>
                    </S.WorkoutProgress>
                </S.WorkoutBlock>

            </S.WorkoutPageContainer>
        </MainLayout>    
    )
}
