import React from 'react';

import { TodayWeatherComponent } from './components/today-weather';
import { NextDaysWeatherComponent } from './components/next-days-weather';
import { LocationInfo } from './components/location-info';
import { DateComponent } from './components/date-info';

import * as S from './Weather.style';

const WeatherContainer = ({ currently, city, country, forecast, unit }) => {
  if(!currently || !city || !country || !forecast) {
    return (
      <div>wait please</div>
    )    
  }
  if(currently && city && country && forecast){
    return(
      <S.Container>
        <LocationInfo city={city} country={country}/>
        <DateComponent />
        <TodayWeatherComponent unit={unit} weather={currently}/>
        <S.Wrapper>
          {forecast.map((forecast, index) => 
            <NextDaysWeatherComponent 
              unit={unit}
              key={index}
              temperatureHigh={forecast.temperatureHigh}
              icon={forecast.icon}
              time={index + 1}
            />
          )}
        </S.Wrapper>
      </S.Container>
    )
  }
}

export default WeatherContainer;