import React from 'react';

import { Icon } from '../weather-icon';

import * as S from './TodayWeatherComponent.style';

const TodayWeatherComponent = ({ weather, unit }) => {
  const { temperature, summary, icon, windSpeed, humidity } = weather;
  const grad = unit === 'F' ? Math.round(temperature) : Math.round( (temperature - 32) * 5 / 9);
  return (
    <S.Container>
      <S.Temperature>{grad}°{unit}</S.Temperature>
      <div>
        <Icon className={icon} style={{fill: 'red'}}/>
        <S.Span>{summary}</S.Span>
        <S.Span>Wind: {windSpeed}</S.Span>
        <S.Span>Humidity: {humidity}</S.Span>
      </div>
    </S.Container>
  )
}

export default TodayWeatherComponent;