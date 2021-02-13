import React from 'react';

import { 
  NavegationBar,
  IconAge,
  ContainerButton,
  ItemButton0,
  ItemButton1,
  ItemButton2, 

} from './styles';

const Header: React.FC = () => {
  return (
    <NavegationBar>
      <IconAge />
      <ContainerButton>
        <ItemButton0 className="Button-Styled" />
        <ItemButton1 className="Button-Styled" />
        <ItemButton2 className="Button-Styled" />
      </ContainerButton>
      
    </NavegationBar>
  );
};

export default Header;
