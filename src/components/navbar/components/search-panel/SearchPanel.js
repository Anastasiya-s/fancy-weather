import React, { useState, useEffect } from 'react';
import axios from 'axios';

import { Button } from '../button';
import { Input } from '../input';
import { OptionItem } from './components/option';

import { opencageUrl, opencageAccesskey } from '../../../../api/opencagedata/opencage';

import * as S from './SearchPanel.style';

const SearchPanel = (props) => {

  const [ inputValue, setInputValue ] = useState('');
  const [ cityOptions, setCityOptions ] = useState([]);

  const getCityOptions = (value) => {
    const url = `${opencageUrl}json?q=${value}&key=${opencageAccesskey}`;
    axios.get(url).then(res => {
      const result = res.data.results.map(result => {
        return {
        value: result.formatted,
        label: result.formatted
        }
      })
      setCityOptions(result);
      console.log(cityOptions);
    })
  }

  const loadOptions = (inputValue) => {
    // getCityOptions(inputValue);
    setTimeout(() => getCityOptions(inputValue), 1000);
  };


  const handleInputChange = (newValue) => {
    const inputValue = newValue.replace(/\W/g, '');
    if (inputValue.length > 1) {
      loadOptions(inputValue);
    }
    setInputValue(inputValue);
  };

  const handleSearchSubmit = () => {
    props.handleCitySearch(inputValue);
  }

  useEffect(() => {
    handleInputChange(inputValue)
  }, [inputValue])

  return (
    <S.SearchContainer>
      <Input onInputChange={handleInputChange}/>
      <Button onClick={handleSearchSubmit}>Search</Button>
      <S.Options>
        {cityOptions.map(option => {
          console.log(option)
          return (
            <OptionItem key={option.label} value={option.value} onClick={console.log(value)}>{option.label}</OptionItem>
            )
          }
          )
        }
      </S.Options>
    </S.SearchContainer>
  )
}

export default SearchPanel;