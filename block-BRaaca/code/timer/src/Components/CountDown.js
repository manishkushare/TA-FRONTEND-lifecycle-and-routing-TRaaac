import React from "react";

class CountDown extends React.Component{
  constructor(props) {
    super(props);
    
  }
  handleCross = () => {
    this.props.callback(null,"countdown")
  }
  render() {
    return (
      <div className="countdown">
        <span onClick={this.handleCross} className="cress">X</span>
        <h2>Work in Progress</h2>
      </div>

    )
  }
}

export default CountDown;