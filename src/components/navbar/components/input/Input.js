import React from 'react';

import * as S from './Input.style';

const Input = ({ onInputChange }) => (
  <S.Input onChange={(e) => onInputChange(e.target.value)}/>
); 

Input.defaultProps = {
  type: 'text'
};

export default Input;