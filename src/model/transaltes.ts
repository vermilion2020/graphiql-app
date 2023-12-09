export type Locales = 'En' | 'Ru';

export const LOCALES = ['En', 'Ru'];

export type Component = 'menu' | 'main' | 'welcome' | 'signIn' | 'signUp';

export interface IComponentTexts {
  menu: { [key: string]: string },
  main: { [key: string]: string },
  welcome: { [key: string]: string },
  signIn: { [key: string]: string },
  signUp: { [key: string]: string },
}

export type LocaleTexts = Map<Locales, IComponentTexts>;

export const translates: LocaleTexts = new Map([
  [
    'En',
    {
      menu: {
        'welcome': 'Welcome',
        'main': 'GraphQL editor',
      },
      main: {
        'title': 'GraphQL editor',
      },
      welcome: {
        'title': 'GraphQL editor',
        'sign-in': 'Sign In',
        'sign-up': 'Sign Up'
      },
      signIn: {
        'title': 'Sign In',
      },
      signUp: {
        'title': 'Sign Up',
      },
    }
  ],
  [
    'Ru',
    {
      menu: {
        'welcome': 'Добро пожаловать',
        'main': 'GraphQL редактор',
      },
      main: {
        'title': 'GraphQL редактор',
      },
      welcome: {
        'title': 'GraphQL редактор',
        'sign-in': 'Регистрация',
        'sign-up': 'Вход'
      },
      signIn: {
        'title': 'Регистрация',
      },
      signUp: {
        'title': 'Вход',
      },
    }
  ]
]);
