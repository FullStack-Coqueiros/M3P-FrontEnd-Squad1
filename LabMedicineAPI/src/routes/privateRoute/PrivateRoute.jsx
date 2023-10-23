import React from "react";
import { Navigate } from 'react-router-dom';
import AuthService from '../../services/Auth.Service.jsx';


const PrivateRoute = ({ element: Element, ...rest }) => {
    const isAuthorized = AuthService.isAdministrator();

    return isAuthorized ? <Element {...rest} /> : <Navigate to="/sem-permissao" />;
};

export default PrivateRoute;