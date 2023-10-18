import React from "react";
import * as Styled from './ModalComponent.Style.jsx';

export const ModalComponent = ({ onClose }) => {
    return (
        <Styled.ModalWrapper>
            <Styled.ModalContent>
                <Styled.CloseButton onClick={onClose}>&times;</Styled.CloseButton>
                <p>Entre em contato com o administrador para criar uma nova conta.</p>
            </Styled.ModalContent>
        </Styled.ModalWrapper>
    )
}