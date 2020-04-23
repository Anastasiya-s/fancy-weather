import React from 'react';

import * as S from './Button.style';

const Button = ({ children, onClick }) => (
  <S.Btn onClick={onClick}>
    {children}
  </S.Btn>
);

export default Button;