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
export const WorkoutProgressBarSpanFull = styled.span`
    position: relative;
    right: -4rem;
    font-size: 24px;
    font-weight: 400;
    line-height: 32px;
    letter-spacing: 0em;
    text-align: left;
    color: white;
    padding-left: 50px
`

export const Modal = styled.div`
 height: 400px;
 width: 400px;
 background-color: red;
 position:absolute;

 /* background-color: rgba(255, 0, 0, 0.3); */
 /* position: fixed;
 padding-top: 16px; */

 `


// export const ModalForm = styled.div`
//   width: 366px;
//   height: 439px;
//   position: absolute;
//   left: calc(50% - (var(--modal-width) / 2));
//   top: calc(50% - (var(--modal-height) / 2));
//   box-sizing: border-box;
//   width: var(--modal-width);
//   min-height: var(--modal-height);
//   background-color: #ffffff;
//   border-radius: 12px;
//   padding: 43px 47px 47px 40px;
//   /* position: relative;
//     z-index: 1; */
// `

export const ModalContentText = styled.a`
    //  height: 100vh;
    //  width: 100vw;
    background-color: rgba(0, 0, 0, 0);
    //  position: fixed;
    color: #FFF;
    font-variant-numeric: lining-nums proportional-nums;
    font-family: StratosSkyeng;
    font-size: 20px;
    font-style: normal;
    font-weight: 400;
    line-height: 24px;
    padding-top: 16px;
    &:hover{
    color: #B672FF;
    font-variant-numeric: lining-nums proportional-nums;
    font-family: StratosSkyeng;
    font-size: 20px;
    font-style: normal;
    font-weight: 400;
    line-height: 24px;
    text-decoration-line: underline;
}
 `
export const PageContainer = styled.div`
    position: fixed;
    left: 0px;
    top: 0px;
    z-index: 999;
    width: 100vw;
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    align-items: center;
    justify-content: center;
`




export const ModalForm2 = styled.div`
    width: 444px;
    height: 554px;
    border-radius: 12px;
    background: #FFF;

    /* --modal-width: 366px;
    --modal-height: 439px;
    position: absolute;
    left: calc(50% - (var(--modal-width) / 2));
    top: calc(50% - (var(--modal-height) / 2));
    box-sizing: border-box;
    width: var(--modal-width);
    min-height: var(--modal-height);
    background-color: #ffffff;
    border-radius: 12px;
    padding: 43px 47px 47px 40px; */
    position: relative;
    overflow-y: auto;

    position: relative;
    z-index: 1;
    &::-webkit-scrollbar {
        width: 5px;
    }

    /* Track */
    &::-webkit-scrollbar-track {
        border-radius: 10px;
        background: rgba(0, 0, 0, 0.05);
    }

    /* Handle */
    &::-webkit-scrollbar-thumb {
        border-radius: 10px;
        background: rgba(0, 0, 0, 0.15);
    }


`
export const FixedOverlayModal = styled.div`
    text-align: center;
    white-space: nowrap;
    &::after {
    display: inline-block;
    vertical-align: middle;
    width: 0;
    height: 100%;
    content: '';
}
`
export const ModalWindow = styled.div`
    display: inline-block;
    vertical-align: middle;
`

export const ModalContainer = styled.div`
    margin: 50px;
    padding: 20px;
    min-width: 200px;
    text-align: left;
    white-space: normal;
    background-color: #fff;    
    color: #000;
`
export const CloseArea = styled.img`
    position: absolute;
    z-index: 999;
    top: 0px;
    right: 0px;
    padding: 10px;
    cursor: pointer;
`
export const CloseButton = styled.div`
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
`
export const ProgressBox = styled.div`
    
    border-radius: 12px;
    background: rgb(255, 255, 255);
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 30px;
    padding: 36px 42px 44px;
    
    /* overflow-y: scroll;
    position: absolute;
    opacity: 0.8;
    position: relative;
    z-index: 1; */
`
export const ProgressBoxTitle = styled.span`
    color: #000;
    font-variant-numeric: lining-nums proportional-nums;
    font-size: 32px;
    font-style: normal;
    font-weight: 400;
    line-height: 40px;
`
export const ResultInputBox = styled.div`
    display: flex;
    flex-direction: column;
    gap: 30px;
    margin-bottom: 12px;
    width: 361px;
    height: 75px;
    

`
export const ResultInputText = styled.div`
    color: #000;
    font-variant-numeric: lining-nums proportional-nums;
    font-size: 18px;
    font-style: normal;
    font-weight: 400;
    line-height: 24px;
    letter-spacing: -0.05px;
`
export const ResultInput = styled.input`
    height: 28px;
    width: 100%;
    box-sizing: border-box;
    border: none;
    border-bottom: 1px solid;
    border-color:#D0CECE;
    text-align: left;
    display: block;
    /* vertical-align: bottom; */
    outline: none;
   
`
export const ResultInputButton = styled.button`
    outline: none;
    border: none;
    border-radius: 5rem;
    padding: 12px 1rem 16px;
    min-width: 17rem;
    font-size: 1.25rem;
    color: rgb(255, 255, 255);
    background-color: rgb(88, 14, 162);
    margin-top: 20px;
    cursor: pointer;
`

export const ProgressMain = styled.div`
    position: fixed;
    width: 100vw;
    height: 100vh;
    left: 0px; 
    top: 0px; 
    z-index: 999;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    align-items: center;
    justify-content: center;
`

export const PageClose = styled.div`
    position: absolute;
    z-index: 999;
    top: 0px;
    right: 0px;
    padding: 10px;
    cursor: pointer;
`

export const ProgressBlock = styled.div`
    background-color: white;
    border-radius: 12px;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 36px 42px 0 44px;
    position: relative;
    width: 444px;
    height: 360px;
`

export const ProgressText = styled.span`
    position: absolute;
    padding: 4px 88px 200px;
    font-size: 2rem;
`

export const ProgressImg = styled.div`
`

export const Error = styled.div`
  color: coral;
  font-weight: 400;
  font-size: 18px;
  line-height: 24px;
  margin-top: 10px;
  margin-bottom: -20px;
  text-align: left;
`
