import { NavLink, useNavigate } from 'react-router-dom';
import { signOut } from 'firebase/auth';
import { auth } from '../../firebase';
import { useContext } from 'react';
import { LocaleContext } from '../../context/LocaleContext';
import Locale from '../common/Locale';
import { setError, setSignOut } from '../../redux/features/appSlice';
import { useAppDispatch, useAppSelector } from '../../redux';
import GraphQL from '../../assets/icons/GraphQL';
import LogOut from '../../assets/icons/LogOut';
import Smile from '../../assets/icons/Smile';

function Header() {
  const { texts } = useContext(LocaleContext);
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { isLoggedIn } = useAppSelector((state) => state.appState);

  const handleLogout = async () => {
    try {
      await signOut(auth);
      dispatch(setSignOut());
      navigate('/');
    } catch (error) {
      dispatch(setError('There was an error'));
    }
  };

  return (
    <header className="header-wrapper">
      <a
        href="https://graphql.org/"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="GraphQL logo"
        title="GraphQL logo"
      >
        <GraphQL />
      </a>

      <div className="menu-wrapper">
        <NavLink
          className={({ isActive }) =>
            isActive ? 'menu-link active-link' : 'menu-link'
          }
          to="/"
          title={texts.menu.welcome}
        >
          <Smile />
          <span className="menu-item">
            &#32;
            {texts.menu.welcome}
          </span>
        </NavLink>
        {isLoggedIn && (
          <button
            type="button"
            className="btn-link menu-link"
            onClick={handleLogout}
          >
            <LogOut />
            <span className="menu-item">
              &#32;
              {texts.menu.signOut}
            </span>
          </button>
        )}
        <Locale />
      </div>
    </header>
  );
}

export default Header;
