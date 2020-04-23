import React from 'react';
import axios from 'axios';

import { LocationComponent } from './location';
import { Navbar } from './navbar';
import { WeatherContainer } from './weather';
import { unsplashBaseUrl, accesskey, corsApiHost } from '../api/unsplash/unsplash';
import { darkskyBaseURL, darkskyAccessKey  } from '../api/darksky/darkskyAPI';
import { ipBaseUrl, ipToken} from '../api/ipinfo/ipinfo';
import { opencageUrl, opencageAccesskey } from '../api/opencagedata/opencage';

import * as S from './App.style';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      temperatureUnit: 'C',
      lang: 'ru',
      bgImageUrl: '',
      city: 'minsk',
      country: 'BY',
      coordinate: [],
      todayWeather: {},
      nextDaysWeather: [],
      // foundCity: '',
      // foundCountry: '',
      // foundCoordinate: [],
    };
    this.handleFetchingBgImage = this.handleFetchingBgImage.bind(this);
    this.convertTempToF = this.convertTempToF.bind(this);
    this.convertTempToC = this.convertTempToC.bind(this);
  }

  handleFetchingBgImage() {
    const url = `${unsplashBaseUrl}?client_id=${accesskey}&query=${this.state.location},city,nature`;

    axios.get(corsApiHost + url).then(res => {
      const bgImageUrl = res.data.urls.regular;
      this.setState({ bgImageUrl })
    })
  }

  handleGettingWeather(position) {
    const [lat, long] = position;
    const url = `${darkskyBaseURL}/${darkskyAccessKey}/${lat},${long}`;

    axios.get(corsApiHost + url).then(res => {
      const { temperature, summary, icon, windSpeed, humidity } = res.data.currently;
      const todayWeather = { temperature, summary, icon, windSpeed, humidity };
      const nextDaysWeather = [res.data.daily.data[0], res.data.daily.data[1], res.data.daily.data[2]];
      this.setState({ todayWeather });
      this.setState({ nextDaysWeather });
    })
  }

  convertTempToF() {
    this.setState({ temperatureUnit: 'F'});
  }

  convertTempToC() {
    this.setState({ temperatureUnit: 'C'});
  }

  getDataByCityName(value) {
    const url = `${opencageUrl}json?q=${value}&key=${opencageAccesskey}`;
    axios.get(corsApiHost + url).then(res => {
      const result = res.data.results[0];
      const [city, country] = result.formatted.split(', ');
      this.setState({ city });
      this.setState({ country });
      const coordinate = Object.values(result.geometry);
      this.setState({ coordinate });
      this.handleGettingWeather(coordinate);      
    })
  }

  handleGettingCurrentLocation() {
    const url = `${ipBaseUrl}json?token=${ipToken}`;
    axios.get(corsApiHost + url).then(res => {
      const {city, country, loc} = res.data;
      const coordinate = loc.split(',');
      this.setState({ city });
      this.setState({ coordinate });
      this.setState({ country })
      this.handleGettingWeather(coordinate);
    })
  }

  handleCitySearch = (value) => {
    this.setState({ city: value });
    this.getDataByCityName(value);
  }

  componentDidMount() {
    this.handleFetchingBgImage();
    this.handleGettingCurrentLocation();
  }

  render() {
    if (!this.state.todayWeather) return;
    if(!this.state.coordinate) return;
    if(!this.state.nextDaysWeather) return;
    return (
      <S.Container  imageUrl={this.state.bgImageUrl}>
        <Navbar 
          handleUnitChangeToC={this.convertTempToC}
          handleUnitChangeToF={this.convertTempToF}
          handleBgChange={this.handleFetchingBgImage}
          handleGettingCurrentLocation={this.handleGettingCurrentLocation}
          handleInputSubmit={this.handleCitySearch}
        />
        <S.Wrapper>
          <WeatherContainer 
            unit={this.state.temperatureUnit}
            currently={this.state.todayWeather} 
            city={this.state.city}
            country={this.state.country}
            forecast={this.state.nextDaysWeather}
          />
          <LocationComponent coordinate={this.state.coordinate}/>
        </S.Wrapper>
      </S.Container>
    );
  }
}

export default App;
