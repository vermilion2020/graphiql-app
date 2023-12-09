import { createContext, useState } from 'react';
import { LOCALES, Locales } from '../model/transaltes';

export interface ILocaleContext {
  locale: Locales;
  setLocale: (locale: Locales) => void;
}

export const LocaleContext = createContext<ILocaleContext>({
  locale: 'En',
  setLocale: () => {
    /**/
  }
});

export const LocaleState = ({ children }: { children: React.ReactNode }) => {
  const storedLang = localStorage.getItem('lang') ?? '';
  const defaultLang = LOCALES.includes(storedLang) ? storedLang : 'En';
  const [locale, setLocale] = useState(defaultLang as Locales);

  return (
    <LocaleContext.Provider
      value={{
        locale,
        setLocale
      }}
    >
      {children}
    </LocaleContext.Provider>
  );
};
