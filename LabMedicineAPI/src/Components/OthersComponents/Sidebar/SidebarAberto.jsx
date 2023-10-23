import * as Styled from "./Sidebar.style.jsx";
import React from "react";
import "react-icons/im";
import { ImHome, ImCross, ImClipboard, ImPlus } from "react-icons/im";
import LabLogo from '../../../assets/LabLogo.png'


import MenuItem from './MenuItem/MenuItem.jsx';

const SidebarAberto = () => {
  
  

  return ( 
  
    <>


        <Styled.MenuContainer >
              <Styled.MenuArea>
                <Styled.DivCabecalho>
            <Styled.MenuLogo src={LabLogo} alt='Logo LABMedicineAPI'/>
            <Styled.H4Logo>LabMedicineAPI</Styled.H4Logo>
            </Styled.DivCabecalho>

            <Styled.MenuSetor>Geral</Styled.MenuSetor>
            <MenuItem Icon={ImHome} Text="INICIO" To='/' />
            <MenuItem Icon={ImCross} Text="SAIR" To='/login' />

            <Styled.MenuSetor>Pacientes</Styled.MenuSetor>
            <MenuItem Icon={ImClipboard} Text="CADASTRAR PACIENTE" To='/paciente' />
            <MenuItem Icon={ImPlus} Text="LISTAR PRONTUÁRIOS" To='/listaProntuarios'  />

            <Styled.MenuSetor>Exames</Styled.MenuSetor>
            <MenuItem Icon={ImPlus} Text="CADASTRAR CONSULTA" To='/consulta' />
            <MenuItem Icon={ImClipboard} Text="CADASTRAR EXAME" To='/exame' />
        </Styled.MenuArea>





         </Styled.MenuContainer>
        </>
  );
}

export default SidebarAberto;