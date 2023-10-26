import React, { useContext, useEffect } from "react";
import { HeaderContext } from '../../../context/HeaderContext.jsx';
import { InputPageConsulta } from '../../../Components/InputComponents/InputPageConsulta.jsx';

export const CadastroConsultaPage = () => {
    const { setData } = useContext(HeaderContext)
    useEffect(() => {
        setData({
            titulo: 'CADASTRAR CONSULTA',})
    }, []);

    const render = () => {
        return (
            <></>
        )
    }
    return render();
}