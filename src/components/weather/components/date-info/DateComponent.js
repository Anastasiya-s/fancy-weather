import React from 'react';

import * as S from './DateComponent.style';

const DateComponent = () => {
  const options = { weekday: 'short', day: 'numeric', month: 'long', year: 'numeric', hour: '2-digit', minute: '2-digit' };
  const time = new Date().toLocaleString('en-US', options)

  return (
    <S.Date>{time}</S.Date>
  )
}

export default DateComponent;