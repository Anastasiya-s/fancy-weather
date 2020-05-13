import React, { useState, useEffect } from 'react';
import Select  from 'react-select';
import axios from 'axios';

import { Button } from '../button';
import { Input } from '../input';

import { opencageUrl, opencageAccesskey } from '../../../../api/opencagedata/opencage';

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


const  handleInputChange = (newValue) => {
    const inputValue = newValue.replace(/\W/g, '');
    setInputValue(inputValue);
    if (inputValue.length > 1) {
      loadOptions(inputValue);
    }
  };

  const handleSearchSubmit = () => {
    props.handleCitySearch(inputValue);
  }

  useEffect(() => {
    handleInputChange(inputValue)
  }, [inputValue])

  return (
    <div>
      {cityOptions.map(option => <div>{option.label}</div>)}
      <Input onInputChange={handleInputChange}/>
      <Button onClick={handleSearchSubmit}>Search</Button>
    </div>
  )
}

export default SearchPanel;