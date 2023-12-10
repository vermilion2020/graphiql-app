import { NavLink } from 'react-router-dom';
import { useContext } from 'react';
import { LocaleContext } from '../../context/LocaleContext';
import Locale from '../common/Locale';

function Header() {
  const { texts } = useContext(LocaleContext);
  
  return (
    <header className="app-header">
      <h1>GraphiQL</h1>
      <NavLink
        className={({ isActive }) => (isActive ? 'active-link' : '')}
        to="/"
        title={texts.menu.welcome}
      >{texts.menu.welcome}</NavLink>
      <NavLink
        className={({ isActive }) => (isActive ? 'active-link' : '')}
        to="/main"
        title={texts.menu.main}
      >{texts.menu.main}</NavLink>
      <Locale />
    </header>
  );
}

export default Header;
