import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Header from "./Header";
import NavigationSidbar from "./NavigationSidebar";
import Home from "./Home";
import Articles from "./Articles";
import SingleArticle from "./SingleArticle";
class App extends React.Component {
  constructor(props) {
    super();
  }
  render() {
    return (
      <BrowserRouter>
        <Header />
        <main className="main">
          <NavigationSidbar />
          <Route path="/articles/:slug" exact component={SingleArticle} >
            
          </Route>
          <Route path="/articles" exact >
            <Articles />
          </Route>
          <Route path="/" exact>
            <Home />
          </Route>
        </main>
      </BrowserRouter>
    );
  }
}
export default App;
