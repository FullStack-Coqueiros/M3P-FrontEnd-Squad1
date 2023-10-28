import React, { useContext, useEffect } from "react";
import { HeaderContext } from '../../../context/HeaderContext.jsx';
import { InputPageConsulta } from '../../../Components/InputComponents/InputPageConsulta.jsx';
import * as Styled from './CadastroConsultaPage.Style.jsx';

const CadastroConsultaPage = () => {
    const { setData } = useContext(HeaderContext)
    useEffect(() => {
        setData({
            titulo: 'CADASTRAR CONSULTA',})
    }, []);

   
    return (
        <Styled.ConsultaContainer>
        
            <InputPageConsulta />
            
        
        </Styled.ConsultaContainer>
    )
}

export default CadastroConsultaPage;