import React from "react";
class Home extends React.Component {
  constructor(props) {
    super();
    this.state = {
      categoryTags : null
    }
  }
  componentDidMount() {
    fetch('https://opentdb.com/api_category.php')
      .then(res => res.json())
      .then(data => this.setState({
      categoryTags : data
    }))
  }
  render() {
    console.log(this.state.categoryTags);
   
    // if (!categoryTags) {
    //   return <h2>Loading......</h2>
    // }
    return (
      <section className="home">
        <div className="container">
          <ul className="categories-list">
            {
              // categoryTags.map((cat => {
              //   return (
              //     <li
              //       data-id={cat.id}
              //       key={cat.id}
              //     >
              //       {cat.name}
              //     </li>
              //   )
              // }))
            }
          </ul>
        </div>
      </section>
    )
  }
}
export default Home;