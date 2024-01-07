import { createContext, useState } from 'react';
import { LOCALES, Locales, en, ru } from '../model/translates';

export interface ILocaleContext {
  locale: Locales;
  texts: typeof en;
  setLocale: (locale: Locales) => void;
}

export const LocaleContext = createContext<ILocaleContext>({
  locale: 'En',
  texts: en,
  setLocale: () => {
    /**/
  },
});

export const LocaleState = ({ children }: { children: React.ReactNode }) => {
  const storedLang = localStorage.getItem('lang') ?? '';
  const defaultLang = LOCALES.includes(storedLang) ? storedLang : 'En';
  const [locale, setLocale] = useState(defaultLang as Locales);
  const texts = locale === 'En' ? en : locale === 'Ru' ? ru : en;

  return (
    <LocaleContext.Provider
      value={{
        locale,
        setLocale,
        texts,
      }}
    >
      {children}
    </LocaleContext.Provider>
  );
};
