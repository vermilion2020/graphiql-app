import { NavLink } from 'react-router-dom';
import { useContext } from 'react';
import { LocaleContext } from '../../context/LocaleContext';
import { getTexts } from '../../helpers/localisation';
import Locale from '../common/Locale';

function Header() {
  const { locale } = useContext(LocaleContext);
  const texts = getTexts(locale, 'menu');
  
  return (
    <header className="app-header">
      <h1>GraphiQL</h1>
      <NavLink
        className={({ isActive }) => (isActive ? 'active-link' : '')}
        to="/"
        title={texts['welcome']}
      >{texts['welcome']}</NavLink>
      <NavLink
        className={({ isActive }) => (isActive ? 'active-link' : '')}
        to="/main"
        title={texts['main']}
      >{texts['main']}</NavLink>
      <Locale />
    </header>
  );
}

export default Header;
