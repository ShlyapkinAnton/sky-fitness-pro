import { styled } from 'styled-components'

export const WorkoutPageContainer = styled.div`

`

export const TitleBox = styled.div`
`

export const Title = styled.h1`
    font-size: 48px;
    font-weight: 400;
    line-height: 56px;
    letter-spacing: 0em;
    text-align: left;
    margin-bottom: 40px;
`

export const WorkoutText = styled.p`
    font-size: 32px;
    font-weight: 400;
    line-height: 40px;
    letter-spacing: 0em;
    text-align: left;
`

export const WorkoutVideo = styled.div`
    width: 1160px;
    height: 639px;
    background-color: grey;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 6px;
    margin: 40px 0 75px 0;
    overflow: hidden;
`

export const WorkoutBlock = styled.div`
    display: flex;
    justify-content: space-between;
`

export const WorkoutExercise = styled.div`
    
`

export const WorkoutExerciseHeader = styled.h1`
    font-size: 32px;
    font-weight: 400;
    line-height: 40px;
    letter-spacing: 0em;
    text-align: left;
    margin-bottom: 30px;
`
export const WorkoutExerciseTextBox = styled.ul`
    padding-left: 30px;
    margin-bottom: 10px;
    list-style-type: disc;
`

export const WorkoutExerciseText = styled.li`
    font-size: 24px;
    font-weight: 400;
    line-height: 32px;
    letter-spacing: 0em;
    text-align: left;
    display: list-item;
    list-style-type: disc;
`

export const WorkoutExerciseButton = styled.button`
    border-radius: 46px;
    background: #580EA2;
    padding: 12px 27px 16px 28px;
    margin-top: 40px;
    cursor: pointer;

    font-size: 18px;
    font-weight: 400;
    line-height: 24px;
    letter-spacing: -0.05px;
    text-align: left;
    color: #FAFAFA;
`

export const WorkoutProgress = styled.div`
    background: #F2F2F2;
    border-radius: 30px;
    padding: 32px 44px;
`

export const WorkoutProgressHeader = styled.h1`
    font-size: 32px;
    font-weight: 400;
    line-height: 40px;
    letter-spacing: 0em;
    text-align: center;
    margin-bottom: 30px;
`

export const WorkoutProgressBlock = styled.div`
    display: flex;
    flex-direction: column;
    gap: 26px;
`

export const WorkoutProgressContent = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    gap: 34px;
`

export const WorkoutProgressText = styled.p`
    font-size: 24px;
    font-weight: 400;
    line-height: 32px;
    letter-spacing: 0em;
    text-align: left;
    width: 227px;
`

export const WorkoutProgressBar = styled.div`
    width: 278px;
    height: 36px;
    border-radius: 22px;
    border: 2px solid ${(props) => props.$color};
    overflow: hidden;
`

export const WorkoutProgressBarLine = styled.div`
    color: ${(props) => props.$color};
    width: ${(props) => props.$width}%;
    height: 100%;
    position: relative;
    background-color: ${(props) => props.$color};
`

export const WorkoutProgressBarSpan = styled.span`
    position: absolute;
    right: -4rem;

    font-size: 24px;
    font-weight: 400;
    line-height: 32px;
    letter-spacing: 0em;
    text-align: left;
`