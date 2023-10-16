import { Form, useForm } from 'react-hook-form';
import { redirect, useNavigate } from 'react-router-dom';
import React, { useContext } from 'react';
import { AuthContext } from '../../context/AuthContext.jsx';
import { UserService } from '../../services/User.Service.jsx';
import { InputComponent } from '../LoginComponents/InputComponent.jsx';


export const LoginComponent = () => {
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm();

    const navigate = useNavigate();
    const { setAuth } = useContext(AuthContext);

    const submitForm = async (data) => {
        const { email, setEmail } = data;
        const user = await UserService.ShowByEmail(email);
        if(!user) {
            alert("Usuário não encontrado");
            reset();
            return;
        }
        password === user.password
            ? redirectToHome(user)
            : alert("Usuário com senha inválida");
    }
    const redirectToHome = (user) => {
        setAuth({
            user,
            isLogged: true,
        });
        navigate("/");
    };

    return (
        <Form onSubmit={ handleSubmit(submitForm) }>
            <div className="Header">
                <legend className='Title'>Login</legend>
            </div>

            <div className="InputGroup">
                <InputComponent
                    id='email'
                    type='email'
                    placeholder='Digite seu e-mail'
                    label='E-mail'
                    register={{...register('email', {
                        required: true,
                        validate: { matchPath: (v) => /^\w+([.-]?\w+)@\w+([.-]?\w+)(\.\w{2,3})+$/.test(v) }
                            })
                        }}
                        error={ errors.email }
                    />

                <InputComponent
                    id='password'
                    type='password'
                    placeholder='Digite a sua senha'
                    label='Senha'
                    register={{...register('password', {
                        required: true,
                        minLength: 8,
                    })
                }}
                error={ errors.password }
                />
            </div>

            <Button $active={ !errors.email && !errors.password } type='submit' disabled={ errors.email || errors.password }>Entrar</Button>

            <div className="Action">
                <button className='LabelRecuperarSenha' onClick={() => alert('Você receberá um e-mail para recuperar a senha')}>Esqueceu a senha?</button>
            </div>
        </Form>
    )
}