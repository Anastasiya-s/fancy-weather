import React from 'react';

import { Icon } from '../weather-icon';

import * as S from './NextDaysWeatherComponent.style';

const NextDaysWeatherComponent = ({temperatureHigh, icon, time, unit}) => {
  // const { temperatureHigh, icon } = weather;
  const grad = unit === 'F' ? Math.round(temperatureHigh) : Math.round( (temperatureHigh - 32) * 5 / 9);

  return(
  <S.NextDay>
    Next Day Weather
    <div>{time.toLocaleString()}</div>
    <div>{grad}°{unit}</div>
    <Icon className={icon}></Icon>
  </S.NextDay>
  )
}

export default NextDaysWeatherComponent;