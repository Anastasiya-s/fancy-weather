import React from 'react';
import { YMaps, Map } from 'react-yandex-maps';

const LocationComponent = ({ coordinate }) => {
  if (!coordinate.length) {
    return (
      <div>
        I don't know, where you are
      </div>
    )
  } 
  if(coordinate.length) {
    return (
      <div>
        <YMaps>
          <div>
            <Map state={{ center: coordinate, zoom: 11 }} />
          </div>
        </YMaps>
      </div>
    )
  }

}

export default LocationComponent;