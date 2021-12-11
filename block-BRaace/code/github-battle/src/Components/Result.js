import React from "react";
import { Link } from "react-router-dom";
class Result extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      winner: null,
      loser: null,
    };
  }
  
  componentDidMount() {
    const { dataUser1 } = { ...this.props.location.state };
    const { dataUser2 } = { ...this.props.location.state };
    let user1Score = dataUser1.followers * 20 + dataUser1.public_repos;
    let user2Score = dataUser2.followers * 20 + dataUser2.public_repos;
    user1Score > user2Score
      ? this.setState({
          winner: {
            profile: dataUser1,
            score: user1Score,
          },
          loser: {
            profile: dataUser2,
            score: user2Score,
          },
        })
      : this.setState({
          winner: {
            profile: dataUser2,
            score: user2Score,
          },
          loser: {
            profile: dataUser1,
            score: user1Score,
          },
        });
  }
  render() {
    const { winner } = this.state;
    const { loser } = this.state;
    console.log(winner, " :winner", loser, " :loser");
    if (!winner || !loser) {
      return <h1>Loading....</h1>;
    }
    return (
      <section className="result">
        <div className="container">
          <ul className="user_list">
            <li className="winner result_user">
              <h2>Winner</h2>
              <div className="result_user_image_wrapper">
                <img src={winner.profile.avatar_url} alt="" />
              </div>
              <h2>Winner : {winner.score}</h2>
              <h2>{winner.profile.login}</h2>
              <div className="result_user_info">
                <span>
                  <i class="fas fa-user"></i>
                  {winner.profile.name}
                </span>
                <span>
                  <i class="fas fa-compass"></i>
                  {winner.profile.location}
                </span>
                <span>
                  <i class="fas fa-suitcase"></i>
                  {winner.profile.company}
                </span>
                <span>
                  <i class="fas fa-users"></i>
                  {winner.profile.followers} followers
                </span>
                <span>
                  <i class="fas fa-user-friends"></i>
                  {winner.profile.following} followings
                </span>
                <span>
                  <i class="fas fa-code"></i>
                  {winner.profile.public_repos} repositories
                </span>

              </div>
            </li>
            <li className="loser result_user">
              <h2>Loser</h2>
              <div className="result_user_image_wrapper">
                <img src={loser.profile.avatar_url} alt="" />
              </div>
              <h2>Winner : {loser.score}</h2>
              <h2>{loser.profile.login}</h2>
              <div className="result_user_info">

                <span>
                  <i class="fas fa-user"></i>
                  {loser.profile.name}
                </span>
                <span>
                  <i class="fas fa-compass"></i>
                  {loser.profile.location}
                </span>
                <span>
                  <i class="fas fa-suitcase"></i>
                  {loser.profile.company}
                </span>
                <span>
                  <i class="fas fa-users"></i>
                  {loser.profile.followers} followers
                </span>
                <span>
                  <i class="fas fa-user-friends"></i>
                  {loser.profile.following} followings
                </span>
                <span>
                  <i class="fas fa-code"></i>
                  {loser.profile.public_repos} repositories
                </span>
              </div>
            </li>
          </ul>
          <div className="reset">
            <Link to="/battle">
              <button>RESET</button>
            </Link>
          </div>
        </div>
      </section>
    );
  }
}
export default Result;
