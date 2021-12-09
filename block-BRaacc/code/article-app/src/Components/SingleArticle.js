import React from "react";
import data  from "../data.json";
class SingleArticle extends React.Component{
  constructor(props) {
    super(props)
    this.state = {
      article: null
    }
  }
  componentDidMount() {
    const slug = this.props.match.params.slug;
    const article = data.find(elem => elem.slug === slug);
    console.log(article);
    this.setState({article})
  }
    
 
  
  render() {
    const { article } = this.state;
    if (!article) {
      return <h2>Loading......</h2>
    }
    return (
      <section className="singleArticle">
        <h2>{article.title}</h2>
        <h3>{article.author}</h3>
      </section>
    )
  }
}
export default SingleArticle;