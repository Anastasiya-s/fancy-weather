import React from 'react';
// import AsyncSelect from 'react-select';
import axios from 'axios';

import { Button } from '../button';
import { Input } from '../input';

import { opencageUrl, opencageAccesskey } from '../../../../api/opencagedata/opencage';

class SearchPanel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: '',
      cityOptions: []
    }
  }

  getCityOptions = (value) => {
    const url = `${opencageUrl}json?q=${value}&key=${opencageAccesskey}`;
    axios.get(url).then(res => {
      const result = res.data.results.map(result => {
        return {
          value: result.formatted,
          option: result.formatted,
          label: result.formatted
        }})
      this.setState({ cityOptions: result})     
    })
  }

  filterOptions = (inputValue) => {
    if (!this.state.cityOptions) return;
    return this.state.cityOptions.filter(city =>
      city.label.toLowerCase().includes(inputValue.toLowerCase())
    );
  };

  loadOptions = inputValue =>
    new Promise(resolve => {
      setTimeout(() => {
        resolve(this.filterOptions(inputValue));
      }, 1000);
  });

  handleInputChange = (value) => {
    this.setState({ inputValue: value });
    this.getCityOptions(value);
    this.loadOptions(value)
  }

  handleSearchSubmit = () => {
    this.props.handleCitySearch(this.state.inputValue);
  }

  render() {
    return (
      <div>
        {/* <AsyncSelect 
          cacheOptions
          defaultOptions={this.state.cityOptions}
          loadOptions={this.loadOptions}
          onInputChange={this.handleInputChange}
          /> */}
        <Input onInputChange={this.handleInputChange}/>
        <Button onClick={this.handleSearchSubmit}>Search</Button>
      </div>
    )
  }
}

export default SearchPanel;