import notFoundImage from '../../assets/not-found.svg';
import { LocaleContext } from '../../context/LocaleContext';
import { useContext } from 'react';

function NotFound() {
  const { texts } = useContext(LocaleContext);

  return (
    <div className="not-found text-white" data-testid="not-found">
      <h2 className="text-2xl">
        {texts.notFound.title}
      </h2>
      <div className="content--heading">{texts.notFound.heading}</div>
      <div className="content--desctiption">{texts.notFound.description}</div>
      <img className="content--img" src={notFoundImage} alt="Not found" />
    </div>
  );
}

export default NotFound;
