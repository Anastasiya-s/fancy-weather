import React from 'react';

import * as S from './DateComponent.style';

class DateComponent extends React.Component {
  constructor() {
    super();
    this.state = {
      time: new Date().toLocaleString()
    }
  }

  componentDidMount() {
    let date
    setInterval(() => {
      date = new Date().toLocaleString();
      this.setState({ time: date})
    }, 1000);
  }
  render() {
    return (
      <S.Date>{this.state.time}</S.Date>
    
    )
  }
}

export default DateComponent;