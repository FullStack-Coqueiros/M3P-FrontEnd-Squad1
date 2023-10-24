import * as Styled from "./Sidebar.style.jsx";
import React from "react";
import "react-icons/im";
import { ImHome, ImCross, ImClipboard, ImPlus } from "react-icons/im";
import MenuItemFechado from './MenuItem/MenuItemFechado.jsx';
import LabLogo from '../../../assets/LabLogo.png'

const SidebarFechado = () => {
  

  return (
    <>
            <Styled.MenuFechado>
            
            <Styled.DivCabecalho>
            <Styled.MenuLogoFechado src={LabLogo} />

            </Styled.DivCabecalho>
            <Styled.MenuSetor>Geral</Styled.MenuSetor>
            <MenuItemFechado Icon={ImHome}  To='/' />
            <MenuItemFechado Icon={ImCross}  To='/login' />
            <Styled.MenuSetor>Listagem</Styled.MenuSetor>
            <MenuItemFechado Icon={ImPlus} To='/lista-prontuarios'  />
            <Styled.MenuSetor>Cadastros</Styled.MenuSetor>
            <MenuItemFechado Icon={ImClipboard} To='/cadastro-usuario' />
            <MenuItemFechado Icon={ImClipboard} To='/cadastro-paciente' />
            <MenuItemFechado Icon={ImPlus} To='/cadastrar-consulta' />
            <MenuItemFechado Icon={ImClipboard} To='/cadastrar-exame' />
            <MenuItemFechado Icon={ImClipboard} To='/cadastrar-medicamento' />
            <MenuItemFechado Icon={ImClipboard} To='/cadastrar-dieta' />
            <MenuItemFechado Icon={ImClipboard} To='/cadastrar-exercicio' />


             
            </Styled.MenuFechado>
        </>
  );
}

export default SidebarFechado;