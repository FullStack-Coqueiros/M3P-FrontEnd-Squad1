import React, { useState, useEffect, useContext } from 'react';
import { AuthContext } from '../../../context/AuthContext.jsx';
import { HeaderContext } from '../../../context/HeaderContext.jsx';
import * as Styled from './Toolbar.style.jsx';
import UserPng from '../../../assets/user.png';

function Toolbar() {
    const { data } = useContext(HeaderContext);
    const { auth } = useContext(AuthContext);
    
    return (
        <Styled.Container>
        <Styled.TxtHeader id="titulo">{data.titulo}</Styled.TxtHeader>

        <Styled.UserHeader>
            <Styled.TxtUser>{auth.user.name}</Styled.TxtUser>
            <img
            alt="Imagem do usuário"
            src={UserPng}
            />{" "}
        </Styled.UserHeader>
        </Styled.Container>
    )
}
export default Toolbar;