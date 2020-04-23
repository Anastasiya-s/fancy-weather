import React from 'react';

import { Button } from './components/button';
import { Input } from './components/input';
import { SearchPanel } from './components/search-panel';

import * as S from './Navbar.style';

const Navbar = ({ handleBgChange, getCurrentLocation, handleUnitChangeToC, handleUnitChangeToF, handleInputSubmit }) => (
  <S.Nav>
    <div>
      <Button onClick={handleBgChange}>Change Background</Button>
      <Button>Set Language</Button>
      <S.ButtonGroup>
        <Button onClick={handleUnitChangeToC}>C</Button>
        <Button onClick={handleUnitChangeToF}>F</Button>
      </S.ButtonGroup>
      <Button onClick={getCurrentLocation}>GetLocation</Button>
    </div>
    <div>
      <SearchPanel 
        handleCitySearch={handleInputSubmit}
      />
    </div>
  </S.Nav>
);

export default Navbar;