import React from 'react';
import * as Styled from './MenuItem.Style.jsx';

const MenuItemFechado = ({ Icon, To }) => {
    return (
        <Styled.ContainerFechado to={To}>
            <Icon />
        </Styled.ContainerFechado>
    )
}

export default MenuItemFechado;