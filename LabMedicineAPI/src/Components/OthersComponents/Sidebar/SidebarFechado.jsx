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
            <Styled.MenuSetor></Styled.MenuSetor>
            <MenuItemFechado Icon={ImHome}  To='/' />
            <MenuItemFechado Icon={ImCross}  To='/login' />
            <Styled.MenuSetor></Styled.MenuSetor>
            <MenuItemFechado Icon={ImClipboard}  To='/paciente' />
            <MenuItemFechado Icon={ImPlus}  To='/listaProntuarios'  />
            <Styled.MenuSetor></Styled.MenuSetor>
            <MenuItemFechado Icon={ImPlus}  To='/consulta' />
            <MenuItemFechado Icon={ ImClipboard }  To='/exame' />


             
            </Styled.MenuFechado>
        </>
  );
}

export default SidebarFechado;