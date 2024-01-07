import styled from "styled-components";

export const WorkoutsModal = styled.div`
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

export const WorkoutsModalWrapper = styled.div`
    position: relative;
    z-index: 99;
    width: 444px;
    max-height: 626px;
    padding: 36px 53px 58px;
    border-radius: 12px;
    background: var(--monochrome-white-20);
    overflow: hidden;
`
export const WorkoutsModalClose = styled.img`
    position: absolute;
    z-index: 100;
    top: 20px;
    right: 20px;
    cursor: pointer;
`

export const WorkoutsModalTitle = styled.h3`
    margin-bottom: 40px;
    font-size: 32px;
    font-weight: 400;
    line-height: 1.25;
`

export const WorkoutsModalContent = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 12px;
    max-height: 462px;
    padding: 0 24px;
    overflow-y: auto;
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

export const WorkoutsModalItem = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 6px;
    width: 100%;
    padding: 11px 25px 17px;
    font-weight: 400;
    text-align: center;
    border-radius: 26px;
    border: 1px solid var(--monochrome-black-20);
    cursor: pointer;
`

export const WorkoutsModalItemTitle = styled.h5`
    font-size: 20px;
    font-weight: inherit;
    line-height: 1.15;
    letter-spacing: -0.05px;
`

export const WorkoutsModalItemText = styled.p`
   font-size: 16px;
    line-height: 1.12;
    letter-spacing: 0.016px;
`