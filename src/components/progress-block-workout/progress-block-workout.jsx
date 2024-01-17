import * as S from './progress-block-workout.styles';
import { useState, useEffect } from 'react';

export const ProgressBlock = ({ workout, setShow, userProgress, setUserProgress}) => {
    const [buttonActive, setButtonActive] = useState(false);

    const handleActiveClick = () => {
        console.log('click-active', userProgress);
        setShow(false);
    }

    const handleChange = (event) => {
        const { name, value } = event.target;
        setUserProgress({...userProgress,[name]: value,});
    }

    return (
        <S.ProgressMain >
                    <S.ProgressBlock>
                        <S.PageClose onClick={() => setShow(false)}>
                            <svg width="20px" height="20px" viewBox="0 0 25 25" xmlns="http://www.w3.org/2000/svg" fill="#000000"><g id="SVGRepo_iconCarrier"><g id="Page-1" stroke="none" fill="none"  ><g id="Icon-Set-Filled"  transform="translate(-469.000000, -1041.000000)" fill="#b1aaaa"><path d="M487.148,1053.48 L492.813,1047.82 C494.376,1046.26 494.376,1043.72 492.813,1042.16 C491.248,1040.59 488.712,1040.59 487.148,1042.16 L481.484,1047.82 L475.82,1042.16 C474.257,1040.59 471.721,1040.59 470.156,1042.16 C468.593,1043.72 468.593,1046.26 470.156,1047.82 L475.82,1053.48 L470.156,1059.15 C468.593,1060.71 468.593,1063.25 470.156,1064.81 C471.721,1066.38 474.257,1066.38 475.82,1064.81 L481.484,1059.15 L487.148,1064.81 C488.712,1066.38 491.248,1066.38 492.813,1064.81 C494.376,1063.25 494.376,1060.71 492.813,1059.15 L487.148,1053.48" id="cross" ></path></g></g></g></svg>
                        </S.PageClose>
                        <S.ProgressHeader>Мой прогресс</S.ProgressHeader>
                        <S.Inputs>
                            {workout.exercises.map((exercise, index) => {
                            return (
                                <div key={index}>
                                    <S.ModalInputHeader>{exercise.name} выполнено повторений:</S.ModalInputHeader>
                                    <S.ModalInput
                                        type="number"
                                        name={index}
                                        placeholder="Введите значение"
                                        min="0"
                                        value={userProgress.name}
                                        onChange={(event) => {handleChange(event)}}
                                    />
                                </div>
                                )
                            })}
                        </S.Inputs>

                        <S.Buttons>
                            <S.PrimaryButton
                                disabled={buttonActive}
                                onClick={() => handleActiveClick()}
                            >
                                {buttonActive ? 'Отправление..' : 'Отправить'}
                            </S.PrimaryButton>
                        </S.Buttons>

                    </S.ProgressBlock>
                </S.ProgressMain>
    )
}