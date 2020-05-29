import React from 'react';

import { Icon } from '../weather-icon';

import * as S from './NextDaysWeatherComponent.style';

const NextDaysWeatherComponent = ({temperatureHigh, icon, time, unit}) => {
  const grad = unit === 'F' ? Math.round(temperatureHigh) : Math.round( (temperatureHigh - 32) * 5 / 9);
  const data = new Date();
  data.setDate(data.getDate() + time);
  const day = data.getDay();
  const daysArray = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday' ]

  return(
  <S.NextDay>
    <S.Date>{daysArray[day]}</S.Date>
    <S.Weather>{grad}°{unit}</S.Weather>
    <Icon className={icon}></Icon>
  </S.NextDay>
  )
}

export default NextDaysWeatherComponent;