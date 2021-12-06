import React from "react";
import Name from "./Name";
import Age from "./Age";
import Address from "./Address";
import Contact from "./Contact";
import Email from "./Email";
import Password from "./Password";
import Loader from "./Loader";
// import { fetch } from "./fetch";

class Card extends React.Component{
  constructor(props) {
    super();
    this.state = {
      data: null,
      active : "name"
    }
    console.log("constructor");
  }
  componentDidMount() {
    // const data = fetch();
    console.log("componentDidMount");
    fetch("https://randomuser.me/api/").then(res=> res.json()).then(data => this.setState({data}))
    // this.setState({ data: d /ata });
  }
  componentDidUpdate() {
    console.log("componentDidUpdate");
  }
  componentWillUnmount() {
    console.log("componentWillUnmount");
  }
  handleMouseEnter = (event) => {
    const key = event.target.dataset.key;
    if (key) {
      return this.setState({
        active : key
      })
    }
  }
  handleMouseLeave = () => {
    this.setState({active :"name"})
  }
  handleClick = () => {
    fetch("https://randomuser.me/api/").then(res=> res.json()).then(data => this.setState({data}))

  }
  render() {
    console.log("render");
    const isDataAvailable = this.state.data;
    if (!isDataAvailable) {
      return <Loader />
    }
    const data = isDataAvailable.results[0];
    const active = this.state.active;
    return (
      <article className="card">
        <div className="image-wrapper">
          <img src={data.picture.medium} alt="" />

        </div>
        <div className="info">
          {
            active === "name" ? <Name data={data} /> :
            active === "email" ? <Email data={data} /> :
            active === "age" ? <Age data={data} /> :
            active === "contact" ? <Contact data={data} /> :
            active === "address" ? <Address data={data} /> :    
            active === "password" ? <Password data={data} /> :   <Name data={data}/> 
          }
        </div>
        <ul  className="icon-list">
          <li onMouseEnter={this.handleMouseEnter} onMouseLeave={this.handleMouseLeave} data-key="name">
            <i className="fas fa-user-alt"></i>
          </li>
          <li onMouseEnter={this.handleMouseEnter} onMouseLeave={this.handleMouseLeave} data-key="email">
            <i className="far fa-envelope-open"></i>
          </li>
          <li onMouseEnter={this.handleMouseEnter} onMouseLeave={this.handleMouseLeave} data-key="age">
            <i className="fas fa-calendar-times"></i>
          </li>
          <li onMouseEnter={this.handleMouseEnter} onMouseLeave={this.handleMouseLeave} data-key="address">
            <i className="fas fa-map"></i>
          </li>
          <li onMouseEnter={this.handleMouseEnter} onMouseLeave={this.handleMouseLeave} data-key="contact">
            <i className="fas fa-phone-alt"></i> 
          </li>
          <li onMouseEnter={this.handleMouseEnter} onMouseLeave={this.handleMouseLeave} data-key="password">
            <i className="fas fa-lock"></i>
          </li>
        </ul>
        <button onClick={this.handleClick}>
          Change
        </button>
      </article>

    )
  }
}

export default Card;