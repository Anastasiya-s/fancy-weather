import React from 'react';

import * as S from './Icon.style';

const Icon = ({ className }) => (
  <div>
    <span>{className}</span>
    <S.Icon className={`wi wi-${className}`} ></S.Icon>
  </div>
);

export default Icon;