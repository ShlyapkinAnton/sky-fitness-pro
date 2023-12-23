import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const FitnessCard = styled(NavLink)`
    position: relative;
`

export const FitnessCardTitle = styled.h3`
    position: absolute;
    top: 30px;
    left: 30px;
    z-index: 2;
    color: var(--monochrome-black-20);
    font-size: 36px;
    font-weight: 800;
    line-height: 1.1;
    letter-spacing: -0.5px;
`