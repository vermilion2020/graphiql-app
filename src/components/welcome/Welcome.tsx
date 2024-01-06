import { useContext } from 'react';
import { LocaleContext } from '../../context/LocaleContext';
import milaPhotoUrl from '../../assets/developers/mila.jpg';
import nataliPhotoUrl from '../../assets/developers/natali.jpg';
import victorPhotoUrl from '../../assets/developers/victor.jpg';
import { firebaseConfig } from '../../firebase';

function Welcome() {
  const { texts } = useContext(LocaleContext);

  return (
    <div className="welcome-page">
      {firebaseConfig.apiKey === 'mock_key' ? (
        <h1 className="flex flex-row justify-center px-3 box-decoration-slice text-white text-center leading-10">
          {texts.welcome.noEnv}
        </h1>
      ) : (
        <article className="flex flex-col justify-center items-center max-w-4xl px-3 box-decoration-slice text-white">
          <h1 className="mb-4">{texts.welcome.title}</h1>
          <p className="self-start py-2">{texts.welcome.project}</p>
          <p className="self-start py-2">{texts.welcome.course}</p>
          <p className="self-start py-2">
            {texts.welcome.tecks}: React, Redux, Typescript, Vite, RTK,
            Firebase, Tailwind, GraphQL
          </p>
          <div className="mt-8 mb-4 text-2xl">
            {texts.welcome.developers.title}
          </div>
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
                <div className="mb-1 text-xl mb-4">
                  {texts.welcome.developers.mila.name}
                </div>
                <p className="mb-2">
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
                <div className="mb-1 text-xl mb-4">
                  {texts.welcome.developers.natali.name}
                </div>
                <p className="mb-2">
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
                <div className="mb-1 text-xl mb-4">
                  {texts.welcome.developers.victor.name}
                </div>
                <p className="mb-2">
                  {texts.welcome.developers.victor.description}
                </p>
                <p className="mb-1 text-justify max-sm:self-start max-sm:break-normal max-sm:hyphens-auto">
                  {texts.welcome.developers.victor.contribution}
                </p>
              </div>
            </div>
          </div>
        </article>
      )}
    </div>
  );
}

export default Welcome;
