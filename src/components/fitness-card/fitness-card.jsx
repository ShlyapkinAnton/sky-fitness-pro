import * as S from './fitness-card.styles'

export const FitnessCard = ({title, img}) => {
    return (
        <S.FitnessCard to='/'>
            <S.FitnessCardTitle>
                {title}
            </S.FitnessCardTitle>
            <img src={`/img/${img}.svg`} alt={title} />
        </S.FitnessCard>
    )
}