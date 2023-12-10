export type Locales = 'En' | 'Ru';

export const LOCALES = ['En', 'Ru'];

export const en = {
  menu: {
    welcome: 'Welcome',
    main: 'GraphQL editor',
  },
  main: {
    title: 'GraphQL editor',
  },
  welcome: {
    title: 'GraphQL editor',
    signIn: 'Sign In',
    signUp: 'Sign Up'
  },
  signIn: {
    title: 'Sign In',
  },
  signUp: {
    title: 'Sign Up',
  },
  notFound: {
    title: 'Not Found',
    heading: 'Page or item you are requesting does not exist',
    description: 'Check the URL or ask for help if you are sure that it is correct'
  }
};

export const ru: typeof en = {
  menu: {
    welcome: 'Добро пожаловать',
    main: 'GraphQL редактор',
  },
  main: {
    title: 'GraphQL редактор',
  },
  welcome: {
    title: 'GraphQL редактор',
    signIn: 'Регистрация',
    signUp: 'Вход'
  },
  signIn: {
    title: 'Регистрация',
  },
  signUp: {
    title: 'Вход',
  },
  notFound: {
    title: 'Страница не найдена',
    heading: 'Страница, которую Вы запрашиваете не существует',
    description: 'Проверьте адрес, который Вы указываете или обратитесь за помощью'
  }
};

