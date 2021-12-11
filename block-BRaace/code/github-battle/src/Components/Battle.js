import React from "react";
import ProfileThumbnail from "./ProfileThumbnail";
import { Link } from "react-router-dom";
class Battle extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user1: null,
      user2: null,
      dataUser1: null,
      dataUser2: null,
    }
  }
  handleChange = ({target})=>{
    let { name, value } = target;
    this.setState({
      [name]: value,
    })
  }
  clearData = (user) => {
    user === "user1" ? this.setState({ dataUser1: null,user1:null }) : this.setState({ dataUser2: null ,user2:null});
  }
  handSubmit = (event, user) => {
    event.preventDefault();
    // alert(this.state[user]);
    user === "user1"? 
    fetch(`https://api.github.com/users/${this.state.user1}`)
      .then(res => res.json())
      .then(data => this.setState({
        dataUser1 : data,
    })) :
    fetch(`https://api.github.com/users/${this.state.user2}`)
    .then(res => res.json())
    .then(data => this.setState({
      dataUser2 : data,
    }))
  }
  
  render() {
    return (
      <section className="battle">
        <div className="container">
          <div className="battle-instructions">
            <h2>Instructions</h2>
            <ul className="instructions-graphics">
              <li>
                <span>Enter Two Github Users</span>
                <div className="instruction-icon-wrapper">
                  <i class="fas fa-user-friends"></i>
                </div>
              </li>
              <li>
                <span>Battle</span>
                <div className="instruction-icon-wrapper">
                  <i class="fas fa-plane"></i>
                </div>
              </li>
              <li>
                <span>Winner</span>
                <div className="instruction-icon-wrapper">
                  <i class="fas fa-trophy"></i>
                </div>
              </li>
            </ul>
          </div>
          <div className="battle-users">
            <h2>Players</h2>
            <ul className="player-list">
              <li>
                <span>Player One</span>
                {
                  this.state.dataUser1 ?
                    <ProfileThumbnail data={this.state.dataUser1} user="user1" clearData={this.clearData}/> :
                    <form onSubmit={(event)=>this.handSubmit(event,"user1")}>
                      <input name="user1" value={this.state.user1} onChange={this.handleChange} type="text" placeholder="github username" />
                      <button>SUBMIT</button>
                    </form>
                }
              </li>
              <li>
                <span>Player One</span>
                {
                  this.state.dataUser2 ?
                    <ProfileThumbnail data={this.state.dataUser2} user="user2" clearData={this.clearData}/> :
                    <form onSubmit={(event)=>this.handSubmit(event,"user2")}>
                      <input name="user2" value={this.state.user2} onChange={this.handleChange} type="text" placeholder="github username" />
                      <button>SUBMIT</button>
                    </form>
                    
                }
              </li>
            </ul>
            {
              this.state.dataUser1 && this.state.dataUser2 ?
                <div className="battle-btn-wrapper">
                  <Link to={
                    {
                      pathname:"/battle/results",
                      search: `?playerOne=${this.state.user1}&playerTwo=${this.state.user2}`,
                      state: this.state
                    }
                  }>
                    <button className="battle-btn">Battle</button>
                  </Link>
                </div>
                : null
            }
          </div>
        </div>
      </section>
    );
  }
}

export default Battle;
