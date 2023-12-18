import { NavLink } from 'react-router-dom';
import { useContext } from 'react';
import { LocaleContext } from '../context/LocaleContext';
import { useAppSelector } from '../redux';
import Locale from '../components/common/Locale';
import milaPhotoUrl from '../assets/developers/mila.jpg';
import nataliPhotoUrl from '../assets/developers/natali.jpg';
import victorPhotoUrl from '../assets/developers/victor.jpg';

function WelcomePage() {
  const { texts } = useContext(LocaleContext);
  const isLoggedIn = useAppSelector((state) => state.appState.isLoggedIn);
  const buttonClass =
    'min-w-max rounded-md bg-buttonBg-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-buttonBg-400 disabled:bg-disabledButton hover:text-white';

  return (
    <div className="flex flex-col items-center bg-gradient-to-t from-buttonColor-600 to-pink-500 min-h-full grow">
      <div className="flex flex-row w-full justify-end p-3 gap-3">
        <Locale />
        {isLoggedIn ? (
          <>
            <NavLink to="/main" className={buttonClass}>
              {texts.welcome.main}
            </NavLink>
          </>
        ) : (
          <>
            <NavLink to="/sign-in" className={buttonClass}>
              {texts.welcome.signIn}
            </NavLink>
            <NavLink to="/sign-up" className={buttonClass}>
              {texts.welcome.signUp}
            </NavLink>
          </>
        )}
      </div>
      <div className="flex flex-col justify-center items-center max-w-3xl px-3 box-decoration-slice text-white">
        <h1 className="mb-8">{texts.welcome.title}</h1>
        <p className="self-start py-2">{texts.welcome.project}</p>
        <p className="self-start py-2">{texts.welcome.course}</p>
        <p className="self-start py-2">
          {texts.welcome.tecks}: React, Redux, Typescript, Vite, RTK, Firebase,
          Tailwind, GraphQL
        </p>
        <h2 className="my-3 text-lg">{texts.welcome.developers.title}</h2>
        <div className="flex max-w-3xl max-md:flex-col justify-center gap-5">
          <div className="flex flex-col w-[235px] items-center">
            <h3>{texts.welcome.developers.mila.name}</h3>
            <div className="w-32 h-24 my-2 flex justify-center">
              <img
                className="w-full h-full object-contain"
                src={milaPhotoUrl}
                alt="Mila"
              ></img>
            </div>
            <p>{texts.welcome.developers.mila.description}</p>
            <p className="self-start text-justify break-normal hyphens-auto py-2">
              {texts.welcome.developers.mila.contribution}
            </p>
          </div>
          <div className="flex flex-col w-[235px] items-center">
            <h3>{texts.welcome.developers.natali.name}</h3>
            <div className="w-32 h-24 my-2 flex justify-center">
              <img
                className="w-full h-full object-contain"
                src={nataliPhotoUrl}
                alt="Mila"
              ></img>
            </div>
            <p>{texts.welcome.developers.natali.description}</p>
            <p className="self-start text-justify break-normal hyphens-auto py-2">
              {texts.welcome.developers.natali.contribution}
            </p>
          </div>
          <div className="flex flex-col w-[235px] items-center">
            <h3>{texts.welcome.developers.victor.name}</h3>
            <div className="w-32 h-24 my-2 flex justify-center">
              <img
                className="w-full h-full object-contain"
                src={victorPhotoUrl}
                alt="Victor"
              ></img>
            </div>
            <p>{texts.welcome.developers.victor.description}</p>
            <p className="self-start text-justify break-normal hyphens-auto py-2">
              {texts.welcome.developers.victor.contribution}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WelcomePage;
