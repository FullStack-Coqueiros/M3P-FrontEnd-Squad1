import * as Styled from './HomePage.style'
import { useContext, useEffect, useState } from 'react';
import { HeaderContext } from '../../context/HeaderContext.jsx';
import { AuthContext } from '../../Context/AuthContext.jsx';
import { Navigate } from 'react-router-dom';
import { InputPage } from '../../Components/HomeComponents/InputPage/InputPage.jsx';
import EstatisticasSistema from '../../Components/HomeComponents/InfoSistema/InfoSistema.jsx';


export const HomePage = () => {
  
  
  
  const { setData } = useContext(HeaderContext)
  useEffect(() => {
    setData({       
      titulo: 'ESTATÍSTICAS E INFORMAÇÕES',}) 
      
    }, []);

    useEffect
    
    
    const { auth } = useContext(AuthContext)
  
    const render = () => {
        return (
          <>
          <Styled.MainHome>
          
          <EstatisticasSistema/>
          <InputPage/>
          
          </Styled.MainHome>
          </>
      )
    }

    return auth.isLogged ? render() : <Navigate to={'./login'}/>
    
  }