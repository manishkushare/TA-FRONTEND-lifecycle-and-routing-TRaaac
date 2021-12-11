import { NavLink } from "react-router-dom";
function Header(props) {
  return (
    <header className="header">
      <div className="container">
        <nav className="navigation">
          <ul className="nav-list">
            <NavLink to="/popular">
              <li>Popular</li>
            </NavLink>
            <NavLink to="/battle">
              <li>Battle</li>
            </NavLink>
          </ul>
          <span onClick={props.displayMode}>
            {
              props.darkMode?<i className="fas fa-sun"></i>: <i className="fas fa-moon"></i>
            }
            
          </span>
        </nav>

      </div>
    </header>
  )
}
export default Header;