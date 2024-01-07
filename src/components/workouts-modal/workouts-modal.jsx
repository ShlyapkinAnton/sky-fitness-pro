import { useEffect } from 'react';
import * as S from './workouts-modal.style';
import { useState } from 'react';
import { useNavigate } from 'react-router';

export const WorkoutsModal = ({ action, data }) => {
    const [workoutsIds, setWorkoutsIds] = useState([]);
    const navigate = useNavigate()

    useEffect(() => {
        if (data) {
            const keys = Object.keys(data)
            setWorkoutsIds(keys)
        }
    }, [data])

    const handleNavigate = (id) => {
        navigate(`workout/${id}`)
    }

    return (
        <S.WorkoutsModal>
            <S.WorkoutsModalWrapper>
                <S.WorkoutsModalClose src='/img/close.svg' alt='close' onClick={action}/>
                <S.WorkoutsModalTitle>
                    Выберите тренировку
                </S.WorkoutsModalTitle>
                <S.WorkoutsModalContent>
                    {workoutsIds.map((id) => {
                        return (
                            <S.WorkoutsModalItem key={id} onClick={() => handleNavigate(data[id]._id)}>
                                <S.WorkoutsModalItemTitle>
                                    {data[id].name}
                                </S.WorkoutsModalItemTitle>
                            </S.WorkoutsModalItem>
                        )
                    })}
                </S.WorkoutsModalContent>
            </S.WorkoutsModalWrapper>
        </S.WorkoutsModal>
    )
}