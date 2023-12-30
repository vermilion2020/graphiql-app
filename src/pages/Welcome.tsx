import { useContext } from 'react';
import { LocaleContext } from '../context/LocaleContext';
import milaPhotoUrl from '../assets/developers/mila.jpg';
import nataliPhotoUrl from '../assets/developers/natali.jpg';
import victorPhotoUrl from '../assets/developers/victor.jpg';
import { firebaseConfig } from '../firebase';
import './Welcome.scss';

function WelcomePage() {
  const { texts } = useContext(LocaleContext);
  return (
    <div className="flex flex-col justify-start items-center grow bg-buttonBg-700 p-12 rounded-2xl bg-buttonBg-600 shadow-md mt-8 backdrop-opacity-70 bg-buttonBg-900/70">
      {firebaseConfig.apiKey === 'mock_key' ? (
        <h1 className="flex flex-row justify-center px-3 box-decoration-slice text-white text-center leading-10">
        {texts.welcome.noEnv}
        </h1>
      ) : (
        <div className="flex flex-col justify-center items-center max-w-3xl px-3 box-decoration-slice text-white">
          <h1 className="mb-8">{texts.welcome.title}</h1>
          <p className="self-start py-2">{texts.welcome.project}</p>
          <p className="self-start py-2">{texts.welcome.course}</p>
          <p className="self-start py-2">
            {texts.welcome.tecks}: React, Redux, Typescript, Vite, RTK,
            Firebase, Tailwind, GraphQL
          </p>
          <h2 className="mt-8 text-lg">{texts.welcome.developers.title}</h2>
          <hr className="border-white border-1 w-full m-1"></hr>
          <div className="flex w-full flex-col justify-center">
            <div className="flex max-sm:flex-col my-3 gap-3 items-start max-sm:items-center">
              <div className="w-32 h-32 flex flex-none">
                <img
                  className="w-full h-full object-cover rounded-full"
                  src={milaPhotoUrl}
                  alt="Mila"
                />
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
                  className="w-full h-full object-cover rounded-full"
                  src={nataliPhotoUrl}
                  alt="Natali"
                />
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
                  className="w-full h-full object-cover rounded-full"
                  src={victorPhotoUrl}
                  alt="Victor"
                />
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
      )}
    </div>
  );
}

export default WelcomePage;
