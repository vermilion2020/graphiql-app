import { NavLink, useNavigate } from 'react-router-dom';
import { signOut } from 'firebase/auth';
import { auth } from '../../firebase';
import { useContext } from 'react';
import { LocaleContext } from '../../context/LocaleContext';
import Locale from '../common/Locale';
import { setSignOut } from '../../redux/features/appSlice';
import { useAppDispatch } from '../../redux';

function Header() {
  const { texts } = useContext(LocaleContext);
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const handleLogout = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        dispatch(setSignOut());
        navigate('/');
      })
  };

  return (
    <header className='app-header'>
      <h1>GraphiQL</h1>
      <NavLink className={({ isActive }) => (isActive ? 'active-link' : '')} to='/' title={texts.menu.welcome}>
      {texts.menu.welcome}
      </NavLink>
      <NavLink className={({ isActive }) => (isActive ? 'active-link' : '')} to='/main' title={texts.menu.main}>
      {texts.menu.main}
      </NavLink>
      <Locale />
      <button type='button' className='btn btn-primary me-3' onClick={handleLogout}>
        Sign Out
      </button>
    </header>
  );
}

export default Header;
