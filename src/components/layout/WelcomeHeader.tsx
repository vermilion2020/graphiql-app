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
  // 'min-w-max rounded-md bg-buttonBg-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-buttonBg-400 disabled:bg-disabledButton hover:text-white bg-gradient-to-r from-buttonColor-900 to-emerald-800';
  // 'min-w-max rounded-md bg-buttonBg-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-buttonBg-400 disabled:bg-disabledButton opacity-40';
  return (
    <div className="flex flex-row w-full justify-end gap-12 mt-4 px-4">
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
