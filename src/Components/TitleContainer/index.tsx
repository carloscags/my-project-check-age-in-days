import React from 'react';

import { TitleContainer } from './styles';

const Header: React.FC = () => {
  return (
    <TitleContainer>
      <h1>Check Age in Days</h1>
      <p>With this little project you can turn your age into days lived</p>
    </TitleContainer>
  );
};

export default Header;
