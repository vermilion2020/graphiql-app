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
    signUp: 'Sign Up',
    main: 'Main Page',
  },
  signIn: {
    title: 'Sign In',
    emailLabel: 'Email address',
    emailPlaceholder: 'Email address',
    passwordLabel: 'Password',
    passwordPlaceholder: 'Password',
    question: 'No account yet?',
    linkText: 'Sign Up',
    btnText: 'Sign In',
    emailErr: 'Email address is required',
    emailMes: 'Please enter a valid email',
    passwordErr: 'Password is required',
  },
  signUp: {
    title: 'Sign Up',
    formTitle: 'Create an account',
    emailLabel: 'Email address',
    emailPlaceholder: 'Email address',
    passwordLabel: 'Create password',
    passwordPlaceholder: 'Password',
    confirmPasswordLabel: 'Confirm password',
    confirmPasswordPlaceholder: 'Confirm password',
    tacLabel: 'By signing up you agree to our Terms and conditions',
    question: 'Already have an account?',
    linkText: 'Sign In',
    emailErr: 'Email address is required',
    emailMes: 'Please enter a valid email',
    emailWhitespace: 'Whitespace is not allowed',
    passwordLength: 'Password must be at least 8 characters',
    passwordSpecial: 'Password must have at least 1 special character',
    passwordDigit: 'Password must have at least 1 digit character',
    passwordLowercase: 'Password must have at least 1 lowercase character',
    passwordUppercase: 'Password must have at least 1 uppercase character',
    passwordErr: 'Password is required',
    confirmPasswordMatch: 'Passwords must match',
    confirmPasswordErr: 'Confirm password is required',
    acceptErr: 'Your agreement is required',
  },
  notFound: {
    title: 'Not Found',
    heading: 'Page or item you are requesting does not exist',
    description:
      'Check the URL or ask for help if you are sure that it is correct',
  },
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
    signIn: 'Вход',
    signUp: 'Регистрация',
    main: 'Главная страница',
  },
  signIn: {
    title: 'Вход',
    emailLabel: 'Адрес электронной почты',
    emailPlaceholder: 'Электронная почта',
    passwordLabel: 'Пароль',
    passwordPlaceholder: 'Пароль',
    question: 'Еще нет аккаунта?',
    linkText: 'Регистрация',
    btnText: 'Войти',
    emailErr: 'Требуется адрес электронной почты',
    emailMes: 'Введите действующий адрес электронной почты',
    passwordErr: 'Требуется пароль',
  },
  signUp: {
    title: 'Регистрация',
    formTitle: 'Создание учетной записи',
    emailLabel: 'Адрес электронной почты',
    emailPlaceholder: 'Электронная почта',
    passwordLabel: 'Создайте пароль',
    passwordPlaceholder: 'Пароль',
    confirmPasswordLabel: 'Подтвердите пароль',
    confirmPasswordPlaceholder: 'Подтвердите пароль',
    tacLabel: 'Регистрируясь, вы соглашаетесь с нашими положениями и условиями',
    question: 'У вас уже есть учетная запись?',
    linkText: 'Войти',
    emailErr: 'Требуется адрес электронной почты',
    emailMes: 'Введите действующий адрес электронной почты',
    emailWhitespace: 'Пробелы не допускаются',
    passwordLength: 'Пароль должен содержать не менее 8 символов',
    passwordSpecial: 'Пароль должен содержать как минимум 1 специальный символ',
    passwordDigit: 'Пароль должен содержать не менее 1 цифры',
    passwordLowercase:
      'Пароль должен содержать не менее 1 символа в нижнем регистре',
    passwordUppercase:
      'Пароль должен содержать не менее 1 символа в верхнем регистре',
    passwordErr: 'Требуется пароль',
    confirmPasswordMatch: 'Пароли должны совпадать',
    confirmPasswordErr: 'Требуется подтвердить пароль',
    acceptErr: 'Требуется ваше согласие',
  },
  notFound: {
    title: 'Страница не найдена',
    heading: 'Страница, которую Вы запрашиваете не существует',
    description:
      'Проверьте адрес, который Вы указываете или обратитесь за помощью',
  },
};
