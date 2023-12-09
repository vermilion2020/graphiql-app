import { NavLink, useNavigate } from 'react-router-dom';
import { signOut } from 'firebase/auth';
import { auth } from '../../firebase';

function Header() {
  const navigate = useNavigate();

  const handleLogout = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        navigate('/');
        console.log('Signed out successfully');
      })
      .catch((error: unknown) => {
        // An error happened.
        console.log('error', error);
      });
  };

  return (
    <header className='app-header'>
      <h1>GraphiQL</h1>
      <NavLink className={({ isActive }) => (isActive ? 'active-link' : '')} to='/'>
        Welcome
      </NavLink>
      <NavLink className={({ isActive }) => (isActive ? 'active-link' : '')} to='/main'>
        Main
      </NavLink>
      <button type='button' className='btn btn-primary me-3' onClick={handleLogout}>
        Sign Out
      </button>
    </header>
  );
}

export default Header;
