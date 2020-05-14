import React from 'react';

import { Icon } from '../weather-icon';

import * as S from './TodayWeatherComponent.style';

const TodayWeatherComponent = ({ weather, unit }) => {
  const { temperature, summary, icon, windSpeed, humidity } = weather;
  const grad = unit === 'F' ? Math.round(temperature) : Math.round( (temperature - 32) * 5 / 9);
  const windSpeedMS = parseInt(windSpeed * 1.6);
  const humidityPercent = Math.round(humidity * 100);
  return (
    <S.Container>
      <S.Temperature>{grad}°{unit}</S.Temperature>
      <S.Details>
        <Icon className={icon} style={{fill: 'red'}}/>
        <S.Span>{summary}</S.Span>
        <S.Span>Wind: {windSpeedMS} m/s</S.Span>
        <S.Span>Humidity: {humidityPercent} %</S.Span>
      </S.Details>
    </S.Container>
  )
}

export default TodayWeatherComponent;