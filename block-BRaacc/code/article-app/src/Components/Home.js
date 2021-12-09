import { Link } from "react-router-dom"
function Home() {
  return (
    <section className="home">
      <h2>Welcome to Home Page</h2>
      <Link to="/articles">
        <button>Articles</button>
      </Link>
    </section>
  )
}
export default Home;