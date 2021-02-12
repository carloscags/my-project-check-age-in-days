import React from 'react';

import { 
  Container,
  IconAge,
  ContainerButton,
  ItemButton0,
  ItemButton1,
  ItemButton2, 

} from './styles';

const Header: React.FC = () => {
  return (
    <Container>
      <h1>Navegation bar test</h1>
      <IconAge />
      <ContainerButton>
        <ItemButton0 />
        <ItemButton1 />
        <ItemButton2 />
      </ContainerButton>
      
    </Container>
  );
};

export default Header;
