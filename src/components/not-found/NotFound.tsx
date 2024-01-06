import notFoundImage from '../../assets/404-error.jpg';
import { LocaleContext } from '../../context/LocaleContext';
import { useContext } from 'react';

function NotFound() {
  const { texts } = useContext(LocaleContext);

  return (
    <div className="not-found" data-testid="not-found">
      <h2 className="mb-4 text-3xl font-extrabold md:text-5xl lg:text-6xl text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">
        {texts.notFound.title}
      </h2>
      <div className="content--heading">{texts.notFound.heading}</div>
      <div className="content--desctiption">{texts.notFound.description}</div>
      <img className="content--img" src={notFoundImage} alt="Not found" />
    </div>
  );
}

export default NotFound;
