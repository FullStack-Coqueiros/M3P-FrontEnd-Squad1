import React from "react";
import { Route, Navigate } from 'react-router-dom';
import AuthService from '../../services/Auth.Service.jsx';
import CadastroUsuarioPage from "../../pages/cadastros/usuarios/CadastroUsuariosPage.jsx";


const PrivateRoute = ({ element: Element, ...rest }) => {
    const isAuthorized = AuthService.isAdministrator();

    return isAuthorized ? <Element {...rest} /> : <Navigate to="/sem-permissao" />;
};

export default PrivateRoute;