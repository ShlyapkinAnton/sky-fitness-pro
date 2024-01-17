import * as S from './fitness-card.styles'

export const FitnessCard = ({title, img, path}) => {
    return (
        <S.FitnessCard to={`/course/${path}`}>
            <S.FitnessCardTitle>
                {title}
            </S.FitnessCardTitle>
            <img src={`/img/${img}.svg`} alt={title} />
        </S.FitnessCard>
    )
}