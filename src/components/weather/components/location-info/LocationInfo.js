import React from 'react';

import * as S from './LocationInfo.style';

const LocationInfo = ({ city, country }) => {
  if (!city && !country) {
    return (
      <div>no lacation detected</div>
    )
  }
  return (
  <div>
    <S.Location>{city}, {country}</S.Location>
  </div>
  )
}

export default LocationInfo;