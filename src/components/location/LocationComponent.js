import React from 'react';
import { YMaps, Map } from 'react-yandex-maps';

const LocationComponent = ({ coordinate }) => {
  if (!coordinate) {
    return (
      <div>
        I don't know, where you are
      </div>
    )
  } 
  if(coordinate) {
    return (
      <div>
        <YMaps>
          <div>
            <Map defaultState={{ center: coordinate, zoom: 11 }} />
          </div>
        </YMaps>
      </div>
    )
  }

}

export default LocationComponent;