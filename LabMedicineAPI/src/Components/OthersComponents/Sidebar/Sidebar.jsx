import React, { useState } from 'react';
import * as Styled from './Sidebar.style';
import { Switch } from 'antd';
import SidebarAberto from './SidebarAberto.jsx';
import SidebarFechado from './SidebarFechado.jsx';

export const Sidebar = () => {
  const [menu, setMenu] = useState(false);
  const onChange = () => {
      setMenu((SidebarAberto) => !SidebarAberto);
    };


    return (
      <>
      {menu ? <SidebarFechado /> : <SidebarAberto />}
      {/*           {menu ? menuAberto()  : menuFechado()} */}

  

          <Styled.LabelSwitch>
            MENU
          </Styled.LabelSwitch>

          <Styled.SwitchBtn>
          <Switch defaultChecked={menu} onClick={() => setMenu(!menu)} onChange={onChange} />
          </Styled.SwitchBtn>
    

    </>
      )
}




