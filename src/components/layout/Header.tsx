import { NavLink, useNavigate } from 'react-router-dom';
import { signOut } from 'firebase/auth';
import { auth } from '../../firebase';
import { useContext } from 'react';
import { LocaleContext } from '../../context/LocaleContext';
import Locale from '../common/Locale';
import { setError, setSignOut } from '../../redux/features/appSlice';
import { useAppDispatch, useAppSelector } from '../../redux';

function Header() {
  const { texts } = useContext(LocaleContext);
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { isLoggedIn } = useAppSelector((state) => state.appState);

  const handleLogout = async() => {
    try {
      await signOut(auth);
      dispatch(setSignOut());
      navigate('/');
    } catch (error) {
      dispatch(setError("There was an error"));
    }
  };

  return (
    <header className="app-header">
      <h1>GraphiQL</h1>
      <NavLink
        className={({ isActive }) =>
          isActive ? 'menu-link active-link' : 'menu-link'
        }
        to="/"
        title={texts.menu.welcome}
      >
        {texts.menu.welcome}
      </NavLink>
      <Locale />
      {isLoggedIn && (
        <button
          type="button"
          className="btn btn-primary me-3 hover:text-buttonColor-400"
          onClick={handleLogout}
        >
          {texts.menu.signOut}
        </button>
      )}
    </header>
  );
}

export default Header;
