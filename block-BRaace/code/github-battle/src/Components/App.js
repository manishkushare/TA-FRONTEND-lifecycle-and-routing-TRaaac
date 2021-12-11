import React from "react";
import Header from "./Header";
import Popular from "./Popular";
import Battle from "./Battle";
import Result from "./Result";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

class App extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      darkMode : false
    }
  }
  displayMode = () => {
    this.setState((prevState) => {
      return {
        darkMode: !prevState.darkMode
      }
    })
  };
  render() {
    const {darkMode} = this.state
    return (
      <Router>
        <Header darkMode={darkMode} displayMode={this.displayMode} />
        <Switch>
          <Route path="/battle/results" component={Result}>
            
          </Route>
          <Route path="/battle">
              <Battle />
          </Route>
          <Route path={["/popular","/"]} exact>
              <Popular />
          </Route>
        </Switch>
        
      </Router>
    )
  }
}

export default App;