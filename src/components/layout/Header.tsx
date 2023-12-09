import { NavLink } from 'react-router-dom';

function Header() {
  return (
    <header className="app-header">
      <h1>GraphiQL</h1>
      <NavLink className={({ isActive }) => (isActive ? 'active-link' : '')} to="/">Welcome</NavLink>
      <NavLink className={({ isActive }) => (isActive ? 'active-link' : '')} to="/main">Main</NavLink>
    </header>
  );
}

export default Header;
