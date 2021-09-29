import React, { Component } from "react";

class Clock extends Component {
  constructor(props) {
    super(props);
    this.state = this.getTime();
  }

  componentDidMount() {
    return this.setTimer();
  }

  setTimer() {
    clearTimeout(this.timer);
    this.timer = setTimeout(this.updateTime.bind(this), 1000);
  }

  updateTime() {
    this.setState(this.getTime, this.setTimer);
  }

  getTime() {
    const currentTime = new Date();
    return {
      hours: currentTime.getHours(),
      minutes: currentTime.getMinutes(),
      seconds: currentTime.getSeconds(),
      ampm: currentTime.getHours() > 12 ? "am" : "pm",
    };
  }

  render() {
    const { hours, minutes, seconds, ampm } = this.state;
    return (
      <div className="clock">
        {hours === 0 ? 12 : hours > 12 ? hours - 12 : hours}:
        {("00" + minutes).slice(-2)}:{("00" + seconds).slice(-2)}
        {ampm}
      </div>
    );
  }
}

export default Clock;
