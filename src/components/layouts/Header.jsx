import { NavLink } from "react-router-dom";

function Header() {
  return (
    <div className="the-header">
      <div className="header-logo">TRAVEL SUN*</div>
      <div className="header-link">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/show">Show</NavLink>
      </div>
      <div className="header-user">
      </div>
    </div>
  )
}

export default Header;
