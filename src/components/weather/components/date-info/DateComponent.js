import React from 'react';

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
      <div>{this.state.time}</div>
    
    )
  }
}

export default DateComponent;