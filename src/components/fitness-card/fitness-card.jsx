import { NavLink } from 'react-router-dom'
import './fitness-card.scss'

export const FitnessCard = ({title, img}) => {
    return (
        <NavLink to='/' className="fitness-card">
            <h3 className="fitness-card__title">
                {title}
            </h3>
            <img src={`/img/${img}.svg`} alt={title} />
        </NavLink>
    )
}