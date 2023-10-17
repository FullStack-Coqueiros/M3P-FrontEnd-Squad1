import { LoginComponent } from '../../Components/LoginComponents/LoginComponent.jsx';
import ImgLogin from '../../assets/imglogin.svg';
import * as Styled from './LoginPage.Style.jsx';

export const LoginPage = () => {
    return (
        <>
        
        <Styled.ContainerLogin>
            <Styled.ImageLogin src={ImgLogin} alt="Imagem Login" />

            <Styled.BarraCentral/>

            <Styled.DivCriarConta>
                <Styled.LabelCriarConta >Não possui uma conta?</Styled.LabelCriarConta>
                <Styled.ButtonHeaderLogin onClick={() => alert('Em breve você poderá criar sua conta...')}>Criar Conta</Styled.ButtonHeaderLogin>
            </Styled.DivCriarConta>

            <Styled.Login>
                <LoginComponent/>
            </Styled.Login>
        </Styled.ContainerLogin>
        </>
    );
}