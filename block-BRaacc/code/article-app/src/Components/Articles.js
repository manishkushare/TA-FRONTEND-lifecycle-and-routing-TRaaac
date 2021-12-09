import React from "react";
import data from "../data.json"
import {Link} from 'react-router-dom'
class Articles extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      data: null
    }
  }
  componentDidMount() {
    this.setState({ data: data });
  }
  render() {
    if (!this.state.data) {
      return <h1>Laoding....</h1>
    }
    const data = this.state.data;
    console.log(data);
    return (
      <section className="articles">
        <ul>
          {
            data.map(article => {
              return (
                <li key={article.slug}>
                  <Link to={`/articles/${article.slug}`}>
                    <h2>{article.title}</h2>
                  </Link>
                </li>
              )
            })
          }
        </ul>
      </section>
    )
  }
}
export default Articles;