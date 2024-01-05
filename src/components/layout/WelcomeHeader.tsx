import { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { useAppSelector } from '../../redux';
import Locale from '../common/Locale';
import { LocaleContext } from '../../context/LocaleContext';
import { firebaseConfig } from '../../firebase';
import GraphQL from '../../assets/icons/GraphQL';
import SignUpIcon from '../../assets/icons/SignUpIcon';
import SignInIcon from '../../assets/icons/SignInIcon';
import MainIcon from '../../assets/icons/MainIcon';

export default function WelcomeHeader() {
  const { texts } = useContext(LocaleContext);

  const isLoggedIn = useAppSelector((state) => state.appState.isLoggedIn);
  const buttonClass = 'text-white uppercase';

  return (
    <header className="header-wrapper">
      <GraphQL />
      <nav className="menu-wrapper">
        {isLoggedIn ? (
          <>
            <NavLink
              className={({ isActive }) =>
                isActive ? 'menu-link active-link' : 'menu-link'
              }
              to="/main"
            >
              <MainIcon />
              <span className="menu-item">
                &#32;
                {texts.welcome.main}
              </span>
            </NavLink>
          </>
        ) : (
          firebaseConfig.apiKey !== 'mock_key' && (
            <>
              <NavLink to="/sign-in" className={buttonClass}>
                <SignInIcon />
                <span className="menu-item">
                  &#32;
                  {texts.welcome.signIn}
                </span>
              </NavLink>
              <NavLink to="/sign-up" className={buttonClass}>
                <SignUpIcon />
                <span className="menu-item">
                  &#32;
                  {texts.welcome.signUp}
                </span>
              </NavLink>
            </>
          )
        )}
        <Locale />
      </nav>
    </header>
  );
}
