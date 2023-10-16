import { LoginComponent } from '../../Components/LoginComponents/LoginComponent.jsx';
import ImgLogin from '../../assets/imglogin.svg';

export const LoginPage = () => {
    return (
        <>
        
        <div className="ContainerLogin">
            <img className="ImageLogin" src={ImgLogin} alt="Imagem Login" />
            <div className="BarraCentral"></div>

            <div className="DivCriarConta">
                <div className="LabelCriarConta" >Não possui uma conta?</div>
                <button className='ButtonHeaderLogin'onClick={() => alert('Em breve você poderá criar sua conta...')}>Criar Conta</button>
            </div>

            <div className="Login">
                <LoginComponent/>
            </div>
        </div>
        </>
    );
}