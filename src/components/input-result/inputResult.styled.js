import { styled } from 'styled-components'

export const PageContainer = styled.div`
  max-width: 100%;
  height: 100vh;
  // background-color: rgba(0, 0, 0, 0.85);
`
export const Modal = styled.div`
 height: 100%;
 width: 100%;

 /* background-color: rgba(255, 0, 0, 0.3); */
 /* position: fixed;
 padding-top: 16px; */

 `


export const ModalForm = styled.div`
  width: 366px;
  height: 439px;
  position: absolute;
  left: calc(50% - (var(--modal-width) / 2));
  top: calc(50% - (var(--modal-height) / 2));
  box-sizing: border-box;
  width: var(--modal-width);
  min-height: var(--modal-height);
  background-color: #ffffff;
  border-radius: 12px;
  padding: 43px 47px 47px 40px;
  /* position: relative;
    z-index: 1; */
`

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


export const ModalLogo = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  margin-bottom: 34px;
  background-color: transparent;
`

export const ModalLogoImage = styled.img`
  width: 140px;
  height: 21px;
`

export const ModalInput = styled.input`
  width: 100%;
  border: none;
  border-bottom: 1px solid #d0cece;
  padding: 8px 1px;

  font-size: 18px;
  font-weight: 400;
  line-height: 24px;
  letter-spacing: -0.05px;
  text-align: left;


  &::placeholder {
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 24px;
    color: #d0cece;
  }
`

const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;

  width: 278px;
  height: 52px;
  border-radius: 46px;
  border: none;
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 24px;

  &:disabled {
    background-color: #303030;
  }
`

export const PrimaryButton = styled(Button)`
  color: #ffffff;
  background-color: #580ea2;
  &:hover {
    background-color: #3f007d;
  }

  &:active {
    background-color: #271a58;
  }
`
export const SecondaryButton = styled(Button)`
  color: #000000;
  background-color: transparent;
  border: 1px solid #d0cece;

  &:hover {
    background-color: #f4f5f6;
  }

  &:active {
    background-color: #d9d9d9;
  }
`

export const Buttons = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-top: 60px;
  width: 100%;
`

export const Inputs = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
  width: 100%;
  margin-top: 38px;
`

export const Error = styled.div`
  color: coral;
  font-weight: 400;
  font-size: 18px;
  line-height: 24px;
  margin-top: 20px;
  text-align: left;
`