import React, { useState, useEffect, useContext } from 'react';
import { AuthContext } from '../../../context/AuthContext.jsx';
import { HeaderContext } from '../../../context/HeaderContext.jsx';

function Toolbar() {
    const { data } = useContext(HeaderContext);
    const { auth } = useContext(AuthContext);
    
    return (
        <div className="container">

            <h3 className="txtheader" id="titulo">{data.titulo}</h3>
            

            <div className="userheader">
                <h6 className="txtuser">{auth.user.name}</h6>
                <img src="" alt="ícone do usuário" />{""}

            </div>

        </div>
    )
}
export default Toolbar;