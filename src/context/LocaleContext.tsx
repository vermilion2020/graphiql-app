import { createContext, useState } from 'react';

export interface ILocaleContext {
  locale: string;
  setLocale: (locale: string) => void;
}

export const LocaleContext = createContext<ILocaleContext>({
  locale: 'en',
  setLocale: () => {
    /**/
  }
});

export const LocaleState = ({ children }: { children: React.ReactNode }) => {
  const defaultLang = localStorage.getItem('lang') ?? 'en';
  const [locale, setLocale] = useState(defaultLang);

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
