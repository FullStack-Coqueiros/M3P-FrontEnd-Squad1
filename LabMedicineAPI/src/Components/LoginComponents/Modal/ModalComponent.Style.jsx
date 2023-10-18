import styled from 'styled-components';

export const ModalWrapper = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const ModalContent = styled.div`
    background: #fff;
    padding: 20px;
    border-radius: 5px;
    text-align: center;
`;

export const CloseButton = styled.span`
    position: absolute;
    top: 10px;
    right: 10px;
    font-size: 20px;
    cursor: pointer;
`;