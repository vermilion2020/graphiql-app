import { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { useAppSelector } from '../../redux';
import Locale from '../common/Locale';
import { LocaleContext } from '../../context/LocaleContext';
import { firebaseConfig } from '../../firebase';

export default function WelcomeHeader() {
  const { texts } = useContext(LocaleContext);

  const isLoggedIn = useAppSelector((state) => state.appState.isLoggedIn);
  const buttonClass = 'text-white uppercase ';

  return (
    <div className="flex flex-row w-full justify-end items-center gap-12 mt-4 xs:mt-16 px-6 lg:px-28 ">
      {isLoggedIn ? (
        <>
          <NavLink to="/main">{texts.welcome.main}</NavLink>
        </>
      ) : (
        firebaseConfig.apiKey !== 'mock_key' && (
          <>
            <NavLink to="/sign-in" className={buttonClass}>
              {texts.welcome.signIn}
            </NavLink>
            <NavLink to="/sign-up" className={buttonClass}>
              {texts.welcome.signUp}
            </NavLink>
          </>
        )
      )}
      <Locale />
    </div>
  );
}
