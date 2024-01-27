import styled from "styled-components";
import { NavLink } from "react-router-dom";

const Block = styled(NavLink)`
    width: 360px;
    height: 480px;
    border-radius: 30px;
    background: #CDCDCD1A;
    box-shadow: 10px -10px 16px 0px #0000001A, -10px 10px 16px 0px #0000001A;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 200px;
    color: #0000001A;
`

export const Card = () => {
    return (
        <Block to={'/'}>+</Block>
    )
}