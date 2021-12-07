import React from "react";
import CountDown from "./CountDown";
import StopWatch from "./StopWatch";
class Timer extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      countDown: false,
      stopWatch : false
    }
  }
  handleClick = (event, option) => {
    if (option === "countdown") {
      this.setState((prevState) => {
        console.log(prevState);
        return {
          countDown : !prevState.countDown
        }
      })
    }
    if (option === "stopwatch") {
      this.setState((prevState) => {
        return {
          stopWatch : !prevState.stopWatch
        }
      })
    }
  }
  render() {
    return (
      <section className="hero">
        <div className="container">
          <article className="flex">
            <div>
              {
                this.state.countDown ? <CountDown callback={this.handleClick} /> : <button onClick={(event)=>this.handleClick(event,"countdown")}>Show Countdown</button>
              }
            </div>
            <div>
              {
                this.state.stopWatch ? <StopWatch callback={this.handleClick} /> : <button onClick={(event) => this.handleClick(event, "stopwatch")}>Show Stopwatch</button>
              }
            </div>
          </article>
        </div>
      </section>
    )
  }
}
export default Timer;