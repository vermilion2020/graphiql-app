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
        <hr className="border-white border-1 w-full m-1"></hr>
        <div className="flex w-full flex-col justify-center">
          <div className="flex max-sm:flex-col my-3 gap-3 items-start max-sm:items-center">
            <div className="w-32 h-32 flex flex-none">
              <img
                className="w-full h-full object-cover"
                src={milaPhotoUrl}
                alt="Mila"
              ></img>
            </div>
            <div className="flex flex-col w-full justify-start max-sm:items-center">
              <h3 className="mb-1 font-bold">
                {texts.welcome.developers.mila.name}
              </h3>
              <p className="mb-1">
                {texts.welcome.developers.mila.description}
              </p>
              <p className="mb-1 text-justify self-start max-sm:break-normal max-sm:hyphens-auto">
                {texts.welcome.developers.mila.contribution}
              </p>
            </div>
          </div>
          <hr className="border-white border-1 w-full my-1"></hr>
          <div className="flex max-sm:flex-col my-3 gap-3 items-start max-sm:items-center">
            <div className="w-32 h-32 flex flex-none">
              <img
                className="w-full h-full object-cover"
                src={nataliPhotoUrl}
                alt="Natali"
              ></img>
            </div>
            <div className="flex flex-col w-full justify-start max-sm:items-center">
              <h3 className="mb-1 font-bold">
                {texts.welcome.developers.natali.name}
              </h3>
              <p className="mb-1">
                {texts.welcome.developers.natali.description}
              </p>
              <p className="mb-1 text-justify max-sm:self-start max-sm:break-normal max-sm:hyphens-auto">
                {texts.welcome.developers.natali.contribution}
              </p>
            </div>
          </div>
          <hr className="border-white border-1 w-full my-1"></hr>
          <div className="flex max-sm:flex-col w-full max-sm:w-75 my-3 gap-3 items-start max-sm:items-center">
            <div className="w-32 h-32 flex flex-none">
              <img
                className="w-full h-full object-cover"
                src={victorPhotoUrl}
                alt="Victor"
              ></img>
            </div>
            <div className="flex flex-col w-full justify-start max-sm:items-center">
              <h3 className="mb-1 font-bold">
                {texts.welcome.developers.victor.name}
              </h3>
              <p className="mb-1">
                {texts.welcome.developers.victor.description}
              </p>
              <p className="mb-1 text-justify max-sm:self-start max-sm:break-normal max-sm:hyphens-auto">
                {texts.welcome.developers.victor.contribution}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WelcomePage;
