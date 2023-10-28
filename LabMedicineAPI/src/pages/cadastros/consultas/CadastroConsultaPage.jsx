import React, { useContext, useEffect } from "react";
import { HeaderContext } from '../../../context/HeaderContext.jsx';
import { InputPageConsulta } from '../../../Components/InputComponents/InputPageConsulta.jsx';
import * as Styled from './CadastroConsultaPage.Style.jsx';

export const CadastroConsultaPage = () => {
    const { setData } = useContext(HeaderContext)
    useEffect(() => {
        setData({
            titulo: 'CADASTRAR CONSULTA',})
    }, []);

    const render = () => {
        return (
            <Styled.ConsultaContainer>
            
                <InputPageConsulta />
              
            
            </Styled.ConsultaContainer>
        )
    }
  
    return render();
    
}