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

            <Styled.MenuSetor>Listagem</Styled.MenuSetor>
            
            <MenuItem Icon={ImPlus} Text="LISTAR PRONTUÁRIOS" To='/lista-prontuarios'  />

            <Styled.MenuSetor>Cadastros</Styled.MenuSetor>
            <MenuItem Icon={ImClipboard} Text="CADASTRAR USUÁRIO" To='/cadastro-usuario' />
            <MenuItem Icon={ImClipboard} Text="CADASTRAR PACIENTE" To='/cadastro-paciente' />
            <MenuItem Icon={ImPlus} Text="CADASTRAR CONSULTA" To='/cadastrar-consulta' />
            <MenuItem Icon={ImClipboard} Text="CADASTRAR EXAME" To='/cadastrar-exame' />
            <MenuItem Icon={ImClipboard} Text="CADASTRAR MEDICAMENTO" To='/cadastrar-medicamento' />
            <MenuItem Icon={ImClipboard} Text="CADASTRAR DIETA" To='/cadastrar-dieta' />
            <MenuItem Icon={ImClipboard} Text="CADASTRAR EXERCÍCIO" To='/cadastrar-exercicio' />
        </Styled.MenuArea>





         </Styled.MenuContainer>
        </>
  );
}

export default SidebarAberto;