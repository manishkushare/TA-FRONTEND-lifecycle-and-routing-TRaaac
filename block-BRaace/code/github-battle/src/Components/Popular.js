import React from "react";
import Loader from "./Loader";
import Cards from "./Cards";
class Popular extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      tag :"All",
      data : null,
    }
  }
  handleTag = (event) => {
    const { target } = event;
    const tag = target.innerText;
    this.setState({tag})
  }
  componentDidMount() {
    fetch(`https://api.github.com/search/repositories?q=stars:%3E1+language:${this.state.tag}&sort=stars&order=desc&type=Repositories`)
    .then(res => res.json())
    .then(data => this.setState({data}))
  }
  componentDidUpdate(prevProps, prevState) {
    if (prevState.tag !== this.state.tag) {
      fetch(`https://api.github.com/search/repositories?q=stars:%3E1+language:${this.state.tag}&sort=stars&order=desc&type=Repositories`)
      .then(res => res.json())
      .then(data => this.setState({data}))
      
    }
  }
  render() {
    let tags = ["All", "JavaScript", "Ruby", "Java", "CSS", "Python"];
    const {data} = this.state
    return (
      <section className="popular">
        <div className="container">
          <article className="tags">
            <ul className="tags-list">
              {
                tags.map((tags) => {
                  return (
                    <li
                      onClick={(event) => this.handleTag(event)}
                      key={tags}
                      className={tags === this.state.tag? "active-tag":"inactive-tag"}
                    >
                      {tags}
                    </li>
                  )
                })
              }
            </ul>
          </article>
            {
              data ? <Cards data={data} />:<Loader />
            }

        </div>
      </section>
    )
  }
}

export default Popular;