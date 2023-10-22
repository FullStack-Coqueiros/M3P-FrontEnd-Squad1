import React from "react";
import { Route, Navigate } from 'react-router-dom';
import AuthService from '../../services/Auth.Service.jsx';

const PrivateRoute = ({ element: Element, ...rest }) => {
    const isAuthorized = AuthService.isAuthenticated();

    return isAuthorized ? <Route {...rest} element={<Element />} /> : <Navigate to="/sem-permissao" />;
};

export default PrivateRoute;