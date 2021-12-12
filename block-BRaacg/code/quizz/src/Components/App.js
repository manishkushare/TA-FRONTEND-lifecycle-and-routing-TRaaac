import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from "./Header";
import Home from "./Home";
class App extends React.Component {
  constructor(props) {
    super();
    this.state = {
      category : null,
      difficulty: null,
      questions: null,
      score: 0,
    }
  }
  
  render() {
    return (
      <Router>
        <Header />
        
        <Route path="/">
            <Home />
        </Route>

        
      </Router>
    )
  }
}
export default App;