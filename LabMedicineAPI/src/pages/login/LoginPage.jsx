import { useState } from 'react';
import { LoginComponent } from '../../Components/LoginComponents/LoginComponent.jsx';
import ImgLogin from '../../assets/imglogin.svg';
import * as Styled from './LoginPage.Style.jsx';
import { ModalComponent } from '../../Components/LoginComponents/Modal/ModalComponent.jsx';

export const LoginPage = () => {
    const [modalOpen, setModalOpen] = useState(false);

    const handleCreateAccountClick = () => {
        setModalOpen(true);
    };

    const handleModalClose = () => {
        setModalOpen(false);
    };

    return (
        <>
        
        <Styled.ContainerLogin>
            <Styled.ImageLogin src={ImgLogin} alt="Imagem Login" />

            <Styled.BarraCentral/>

            <Styled.DivCriarConta>
                <Styled.LabelCriarConta >Não possui uma conta?</Styled.LabelCriarConta>
                <Styled.ButtonHeaderLogin onClick={handleCreateAccountClick}>Criar Conta</Styled.ButtonHeaderLogin>
            </Styled.DivCriarConta>

            <Styled.Login>
                <LoginComponent/>
            </Styled.Login>

            {modalOpen && <ModalComponent onClose={handleModalClose}/>}
        </Styled.ContainerLogin>
        </>
    );
}