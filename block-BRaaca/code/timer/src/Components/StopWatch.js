import React from "react";

class StopWatch extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      timerOn: false,
      timeStart: 0,
      timerTime: 0,
    };
    this.timer = null;
  }
  handleCross = () => {
    this.props.callback(null, "stopwatch");
  };
  startTimer = () => {
    this.setState({
      timerOn: true,
      timerTime: this.state.timerTime,
      timeStart: Date.now() - this.state.timerTime,
    });
    this.timer = setInterval(() => {
      console.log(`Time is ${Date.now() - this.state.timeStart}`);
      this.setState({
        timerTime: Date.now() - this.state.timeStart,
      });
    }, 10);
  };

  stopTimer = () => {
    this.setState({
      timerOn: false,
    });
    clearInterval(this.timer);
  };
  resetTimer = () => {
    this.setState({
      timerTime: 0,
      timeStart: 0,
    });
  };
  resumeTimer = () => {
    this.setState({
      timerOn: true,
      timerTime: this.state.timerTime,
      timeStart: Date.now() - this.state.timerTime,
    });
    this.timer = setInterval(() => {
      console.log(`Time is ${Date.now() - this.state.timeStart}`);
      this.setState({
        timerTime: Date.now() - this.state.timeStart,
      });
    }, 10);
  };
  componentWillUnmount() {
    clearInterval(this.timer);
  }
  handleButtons = () => {
    if (this.state.timerOn === false && this.state.timerTime === 0) {
      return <button onClick={this.startTimer}>Start</button>;
    } else if (this.state.timerOn === true) {
      return (
        <div>
          <button onClick={this.stopTimer}>Stop</button>
          {/* <button onClick={this.resetTimer}>Reset</button> */}
        </div>
      );
    } else if (this.state.timerOn === false && this.state.timerTime > 0) {
      return (
        <div>
          <button onClick={this.resumeTimer}>Resume</button>
          <button onClick={this.resetTimer}>Reset</button>
        </div>
      );
    }
   
  };
  render() {
    const { timerTime } = this.state;
    const hours = ("0" + Math.floor(timerTime / 3600000)).slice(-2);
    const minutes = ("0" + Math.floor(timerTime / 60000)).slice(-2);
    const seconds = ("0" + Math.floor(timerTime / 1000)).slice(-2);
    const miliseconds = ("0" + Math.floor(timerTime / 10)).slice(-2);
    return (
      <div className="stopwatch">
        <span onClick={this.handleCross} className="cross">
          X
        </span>
        <div className="stopwatch-header">
          <h2>Stop Watch</h2>
        </div>
        <div className="stopwatch-display">
          {hours}:{minutes}:{seconds}:{miliseconds}
        </div>

        {this.handleButtons()}
      </div>
    );
  }
}

export default StopWatch;
