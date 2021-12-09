import { NavLink } from "react-router-dom";
function NavigationSidbar() {
  return (
    <aside className="navigation">
      <nav className="nav-items">
        <ul className="nav-list">
          <NavLink ac to="/">
            <li>🏠 Home</li>
          </NavLink>
          <NavLink to="/articles">
            <li>📚 Articles</li>
          </NavLink>
        </ul>
      </nav>
    </aside>
  )
}
export default NavigationSidbar;