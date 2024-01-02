import styled from "styled-components";

export const CoursePageContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 75px;
    font-size: 24px;
    line-height: 1.3;
`

export const TitleBox = styled.div`
    position: relative;
    border-radius: 30px;
    width: 1160px;
    height: 310px;
    background-color: rgb(255, 255, 255);
`

export const Title = styled.h1`
    position: absolute;
    top: 30px;
    left: 30px;
    font-size: 64px;
    line-height: 1.12;
    letter-spacing: -0.8px;
    text-transform: capitalize;
`

export const About = styled.div``;

export const AboutTitle = styled.h3`
    margin-bottom: 40px;
    font-size: 40px;
    font-weight: 400;
    line-height: 1.2;
`

export const AboutList = styled.ul`
    display: flex;
    gap: 87px;
    align-items: center;
`

export const AboutListItem = styled.li`
    position: relative;
    padding-left: 96px;
`

export const AboutListItemIndex = styled.span`
    position: absolute;
    top: 0;
    left: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 67px;
    height: 67px;
    font-size: 32px;
    line-height: 1.25; 
    border-radius: 50%;
    background-color: var(--color-text-light-green);
`;

export const Directions = styled.div``;
export const DirectionsList = styled.ul`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    padding-left: 40px;
`;
export const DirectionsListItem = styled.li`
    list-style-type: disc;
`;

export const Text = styled.p``;

export const SubmitApplication = styled.div`
    position: relative;
    padding: 46px 285px 48px 52px;
    border-radius: 30px;
    background: var(--color-bg-light-purple);
`;

export const SubmitApplicationImg = styled.img`
    position: absolute;
    top: 50%;
    right: 0;
    transform: translateY(-50%);
`;

export const SubmitApplicationText = styled.p`
    margin-bottom: 34px;
    font-size: 32px;
    line-height: 1.25;
`;