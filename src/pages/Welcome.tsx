import { NavLink } from 'react-router-dom';
import { useContext } from 'react';
import { LocaleContext } from '../context/LocaleContext';

function WelcomePage() {
  const { texts } = useContext(LocaleContext);

  return (
    <div className="flex flex-row justify-center items-center box-decoration-slice bg-gradient-to-r from-buttonColor-600 to-pink-500 text-white p-8 text-center min-h-full">
      <div>
        <h1 className="mb-8">{texts.welcome.title}</h1>
        <div className="flex flex-row justify-around">
          <NavLink
            to="/sign-in"
            className="rounded-md bg-buttonBg-600 px-3 py-2 text-sm font-semibold 
              text-white shadow-sm hover:bg-buttonBg-400 disabled:bg-disabledButton hover:text-white"
          >
            {texts.welcome.signIn}
          </NavLink>
          <NavLink
            to="/sign-up"
            className="rounded-md bg-buttonBg-600 px-3 py-2 text-sm font-semibold 
              text-white shadow-sm hover:bg-buttonBg-400 disabled:bg-disabledButton hover:text-white"
          >
            {texts.welcome.signUp}
          </NavLink>
        </div>
      </div>
    </div>
  );
}

export default WelcomePage;
