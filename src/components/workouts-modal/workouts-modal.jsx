import { useEffect } from 'react';
import * as S from './workouts-modal.style';
import { useState } from 'react';
import { useNavigate } from 'react-router';

export const WorkoutsModal = ({ action, data, courseId }) => {
    const navigate = useNavigate()

    const handleNavigate = (id) => {
        navigate(`workout/${courseId}/${id}`)
    }

    return (
        <S.WorkoutsModal>
            <S.WorkoutsModalWrapper>
                <S.WorkoutsModalClose src='/img/close.svg' alt='close' onClick={action}/>
                <S.WorkoutsModalTitle>
                    Выберите тренировку
                </S.WorkoutsModalTitle>
                <S.WorkoutsModalContent>
                    {data.map((item) => {
                        return (
                            <S.WorkoutsModalItem key={item._id} onClick={() => handleNavigate(item._id)}>
                                <S.WorkoutsModalItemTitle>
                                    {item.name}
                                </S.WorkoutsModalItemTitle>
                            </S.WorkoutsModalItem>
                        )
                    })}
                </S.WorkoutsModalContent>
            </S.WorkoutsModalWrapper>
        </S.WorkoutsModal>
    )
}