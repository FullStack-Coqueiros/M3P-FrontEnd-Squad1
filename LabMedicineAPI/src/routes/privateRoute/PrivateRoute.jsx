import React, { Component } from "react";
import { Route, Redirect } from 'react-router-dom';
import AuthService from '../../services/Auth.Service';

const PrivateRoute = ({ component: Component, ...rest }) => (
    <Route
        {...rest}
        render={(props) => 
        AuthService.isAdministrator() ? (
            <Component {...props} />
        ) : (
            <Redirect to='/sem-permissao'/>
        )
        }
    />
);

export default PrivateRoute;