import React, {useState} from 'react';
import * as S from './workout-page.styles';
import { MainLayout } from '../../layouts/main-layout/main-layout';
import { useParams } from 'react-router';
import { useGetWorkoutQuery, useGetCoursesQuery } from '../../serviceQuery/courses';
import { setCurrentPage } from '../../store/slices/courses';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { InputResult } from '../../components/input-result/inputResult';
import { ProgressBlock } from '../../components/progress-block/progress-block.styles';

export const WorkoutPage = ({theme}) => {
    const dispatch = useDispatch();
    const { courseId, id } = useParams();
    const { data, isLoading } = useGetWorkoutQuery(id);
    const courses = useGetCoursesQuery();
    const [isInputResultActive, setIsInputResultActive] = useState(false);
    const [isProgressDone, setIsProgressDone] = useState(false);
    const [result, setResult] = useState([0,0,0,0,0])

    let quantity;
    let newUserInputData = [];
    let userInputData = [];

    const setInputProgress = () =>{
        !isInputResultActive ? setIsInputResultActive(true) : setIsInputResultActive(false);
        console.log(data.exercises);
    }
    
    const setProgressDone = () =>{
        !isProgressDone ? setIsProgressDone(true) : setIsProgressDone(false);
        setIsInputResultActive(false)
    }

    console.log(isInputResultActive);
    
    const countResultGuantity = (quantity, index)=>{
    userInputData[index] = quantity;    
    
    console.log(quantity);
        console.log(userInputData);
    }
    
    // Функция расчета результатов
    const countResultExersise = ()=>{
        let newResult = []
        console.log(`считаем результаты`);
        console.log(userInputData);
        let exercise = data.exercises;
        for(let i = 0; i < userInputData.length; i++){
            newResult.push((userInputData[i]/data.exercises[i].quantity)*100);
        }  

        console.log(result);
        setResult(newResult);
    }


    const getExerciseName = (exercise) => {
        const [ name ] = exercise.split('(');
        return name;
    }

    const getColor = (index) => {
        const progressBarColors = ["#565EEF", "#FF6D00", "#9A48F1"];
        return progressBarColors[index % progressBarColors.length]
    }

    useEffect(() => {
        if (courses) {
            dispatch(setCurrentPage('workout'))
        }
    }, [courses])

    return (
        <MainLayout theme={theme} isLoading={isLoading}>
            <S.WorkoutPageContainer>
                <S.TitleBox>
                    <S.Title>{courses.data[courseId]?.nameRU}</S.Title>
                    <S.WorkoutText>{data?.name}</S.WorkoutText>
                </S.TitleBox>

                <S.WorkoutVideo>
                    {isLoading ? 
                    <img src="/img/subtract.svg" alt="subtract" /> :
                    <iframe 
                        width="100%" height="100%"
                        src={data?.video}
                        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture;"
                    >
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
                            <S.WorkoutExerciseButton onClick={()=>{
                                
                                setInputProgress()
                                 
                                }}>Заполнить свой прогресс
                            </S.WorkoutExerciseButton>
                    {isInputResultActive ? (
                        <S.PageContainer>
                            <S.ModalForm2>
                                <S.CloseArea src='/img/close.svg' alt='close' onClick={()=>{setInputProgress()}}>
                                {/* <svg width="20px" height="20px" viewBox="0 0 25 25" xmlns="http://www.w3.org/2000/svg" fill="#000000"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"><title>cross</title><desc>Created with Sketch Beta.</desc><defs></defs><g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd" ><g id="Icon-Set-Filled" transform="translate(-469.000000, -1041.000000)" fill="#b1aaaa"><path d="M487.148,1053.48 L492.813,1047.82 C494.376,1046.26 494.376,1043.72 492.813,1042.16 C491.248,1040.59 488.712,1040.59 487.148,1042.16 L481.484,1047.82 L475.82,1042.16 C474.257,1040.59 471.721,1040.59 470.156,1042.16 C468.593,1043.72 468.593,1046.26 470.156,1047.82 L475.82,1053.48 L470.156,1059.15 C468.593,1060.71 468.593,1063.25 470.156,1064.81 C471.721,1066.38 474.257,1066.38 475.82,1064.81 L481.484,1059.15 L487.148,1064.81 C488.712,1066.38 491.248,1066.38 492.813,1064.81 C494.376,1063.25 494.376,1060.71 492.813,1059.15 L487.148,1053.48" id="cross"></path></g></g></g></svg> */}
                                
                                </S.CloseArea>
                                <S.ProgressBox>
                                   <S.ProgressBoxTitle>Мой прогресс</S.ProgressBoxTitle>
                                   {/* далее должен быть цикл по массиву упражнений */}
                                   {data?.exercises?.map((exercise, index) => {
                                return (
                                    
                                    <S.ResultInputBox key={index}>
                                        <S.ResultInputText >{exercise.name}</S.ResultInputText>
                                        <S.ResultInput type="number" step="1" min="0" placeholder='Введите значение' value={quantity} onInput={(event)=>{countResultGuantity(event.target.value, index)}}>

                                        </S.ResultInput>
                                    </S.ResultInputBox>        
                                    
                                    
                                    )
                                        })}
                                    
                                    <S.ResultInputButton onClick={()=>{
                                        countResultExersise()
                                        setProgressDone()
                                        }}>Отправить
                                    </S.ResultInputButton>
                                </S.ProgressBox>

                            </S.ModalForm2>
                        </S.PageContainer>
                    ):(null)}
                    </S.WorkoutExercise>

                    {isProgressDone ? (
                        <S.ProgressMain >
                        <S.ProgressBlock>
                            <S.PageClose onClick={()=>{setIsProgressDone()}}>
                                <svg width="20px" height="20px" viewBox="0 0 25 25" xmlns="http://www.w3.org/2000/svg" fill="#000000"><g id="SVGRepo_iconCarrier"><g id="Page-1" stroke="none" fill="none"  ><g id="Icon-Set-Filled"  transform="translate(-469.000000, -1041.000000)" fill="#b1aaaa"><path d="M487.148,1053.48 L492.813,1047.82 C494.376,1046.26 494.376,1043.72 492.813,1042.16 C491.248,1040.59 488.712,1040.59 487.148,1042.16 L481.484,1047.82 L475.82,1042.16 C474.257,1040.59 471.721,1040.59 470.156,1042.16 C468.593,1043.72 468.593,1046.26 470.156,1047.82 L475.82,1053.48 L470.156,1059.15 C468.593,1060.71 468.593,1063.25 470.156,1064.81 C471.721,1066.38 474.257,1066.38 475.82,1064.81 L481.484,1059.15 L487.148,1064.81 C488.712,1066.38 491.248,1066.38 492.813,1064.81 C494.376,1063.25 494.376,1060.71 492.813,1059.15 L487.148,1053.48" id="cross" ></path></g></g></g></svg>
                            </S.PageClose>
                            <S.ProgressText>Ваш прогресс засчитан!</S.ProgressText>
                            <S.ProgressImg>
                                <img width='400px' height='320px' src="/img/ok.svg" alt="ok" />
                            </S.ProgressImg>
                        </S.ProgressBlock>
                    </S.ProgressMain>
                     ):(null)}
                    
                    <S.WorkoutProgress>
                        <S.WorkoutProgressHeader>Мой прогресс по тренировке:</S.WorkoutProgressHeader>
                        <S.WorkoutProgressBlock>

                        {data?.exercises?.map((exercise, index) => {
                                return (
                                    <S.WorkoutProgressContent key={index}>
                                        <S.WorkoutProgressText>{getExerciseName(exercise.name)}</S.WorkoutProgressText>
                                        <S.WorkoutProgressBar $color={getColor(index)}>
                                            <S.WorkoutProgressBarLine 
                                                $width={result[index]}
                                                // $width={exercise.quantity} 
                                                $color={getColor(index)}
                                            >
                                                {/* <S.WorkoutProgressBarSpan>{exercise.quantity}%</S.WorkoutProgressBarSpan> */}
                                                {result[index] >= 80 ? <S.WorkoutProgressBarSpanFull>{result[index]}%</S.WorkoutProgressBarSpanFull> : <S.WorkoutProgressBarSpan>{result[index]}%</S.WorkoutProgressBarSpan>}
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
