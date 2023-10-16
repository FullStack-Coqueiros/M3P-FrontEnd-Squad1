import React from 'react'
import { useContext, useEffect, useState } from 'react'
import { HeaderContext } from '../../context/HeaderContext.jsx';
import { AuthContext } from '../../context/AuthContext.jsx';
import { Navigate } from 'react-router-dom';

export const HomePage = () => {

  const { setData } = useContext(HeaderContext)
  useEffect(() => {
    setData({
      titulo: 'ESTATÍSTICAS E INFORMAÇÕES',
    })
  }, []);

  useEffect
  //const { auth } = useContext(AuthContext)

  const render = () => {
    return (
      <>
      </>
    )
  }
  //return auth.isLogged ? render() : <Navigate to={'/login'}/>
}
