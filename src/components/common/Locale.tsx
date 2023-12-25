import { useState, useEffect, useContext } from 'react';
import { LOCALES, Locales } from '../../model/translates';
import { LocaleContext } from '../../context/LocaleContext';
function Locale() {
  const [opened, setOpened] = useState(false);
  const { locale, setLocale } = useContext(LocaleContext);

  useEffect(() => {
    setOpened(false);
  }, []);

  const handleClick = (locale: Locales) => {
    localStorage.setItem('lang', locale);
    setLocale(locale);
    setOpened(false);
  };

  return (
    <div className="locale">
      <div
        className="locale--current"
        data-testid="locale-current"
        onClick={() => setOpened(!opened)}
      >
        {locale}
      </div>
      {opened && (
        <ul className="locale--container" data-testid="locale-container">
          {LOCALES.map((l) => {
            const loc = l as Locales;
            return (
              <li
                key={loc}
                title={`${loc}`}
                data-testid={`locale-${loc}`}
                onClick={() => handleClick(loc)}
                className={loc === locale ? 'active' : ''}
              >
                {loc}
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}

export default Locale;
