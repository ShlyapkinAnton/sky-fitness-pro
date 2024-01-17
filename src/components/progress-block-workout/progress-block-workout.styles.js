import { styled } from 'styled-components'
// block
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
  padding: 36px 42px 44px 44px;
  position: relative;
`

export const ProgressHeader = styled.header`
  font-size: 2rem;
`
// Input
export const Inputs = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
  width: 100%;
  margin-top: 30px;
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

export const ModalInputHeader = styled.h4`
  font-size: 1.25rem;
  width: 370px;
`

export const Buttons = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 40px;
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