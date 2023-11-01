import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import React, { useContext } from "react";
import { AuthContext } from "../../context/AuthContext.jsx";
import { InputComponent } from "../LoginComponents/InputComponent.jsx";
import AuthService from "../../services/Auth.Service.jsx";

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
  
    try {
      const usuario = await AuthService.login(data.email, data.password);
  
      if (usuario) {
        redirectToHome(usuario);
      } else {
        alert("Erro de email e/ou senha");
      }
    } catch (error) {
      console.error("Erro ao autenticar:", error);
    }
  };
  
  const redirectToHome = (user) => {
    setAuth({
      user,
      isLogged: true,
    });
    navigate("/");
  };
  


  return (
    <form onSubmit={handleSubmit(submitForm)}>
      <div className="Header">
        <legend className="Title">Login</legend>
      </div>

      <div className="InputGroup">
        <InputComponent
          id="email"
          type="email"
          placeholder="Digite seu e-mail"
          label="email"
          register={{
            ...register("email", {
              required: true,
              validate: {
                matchPath: (v) =>
                  /^\w+([.-]?\w+)@\w+([.-]?\w+)(\.\w{2,3})+$/.test(v),
              },
            }),
          }}
          error={errors.email}
        />

        <InputComponent
          id="password"
          type="password"
          placeholder="Digite a sua senha"
          label="Senha"
          register={{
            ...register("password", {
              required: true,
              minLength: 8,
            }),
          }}
          error={errors.password}
        />
      </div>

      <button
        className={!errors.email && !errors.password ? "active" : "inactive"}
        type="submit"
        disabled={errors.email || errors.password}
      >
        Entrar
      </button>

      <div className="Action">
        <button
          className="LabelRecuperarSenha"
          onClick={() =>
            alert("Você receberá um e-mail para recuperar a senha")
          }
        >
          Esqueceu a senha?
        </button>
      </div>
    </form>
  );
};
