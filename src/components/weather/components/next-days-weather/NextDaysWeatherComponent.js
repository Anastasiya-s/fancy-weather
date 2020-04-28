import React from 'react';

import { Icon } from '../weather-icon';

import * as S from './NextDaysWeatherComponent.style';

const NextDaysWeatherComponent = ({temperatureHigh, icon, time, unit}) => {
  // const { temperatureHigh, icon } = weather;
  const grad = unit === 'F' ? Math.round(temperatureHigh) : Math.round( (temperatureHigh - 32) * 5 / 9);
  const data = new Date();
  data.setDate(data.getDate() + time);

  return(
  <S.NextDay>
    <S.Date>{`${data.toDateString()}`}</S.Date>
    <S.Weather>{grad}°{unit}</S.Weather>
    <Icon className={icon}></Icon>
  </S.NextDay>
  )
}

export default NextDaysWeatherComponent;