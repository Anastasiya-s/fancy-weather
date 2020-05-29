import React from 'react';

import * as S from './OptionItem.style';

const OptionItem = ({children, onClick, value }) => (
  <S.Option onClick={onClick(value)}>
    {children}
  </S.Option>
);

export default OptionItem;