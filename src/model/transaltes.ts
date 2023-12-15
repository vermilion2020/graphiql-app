export type Locales = 'En' | 'Ru';

export const LOCALES = ['En', 'Ru'];

export const en = {
  menu: {
    welcome: 'Welcome',
    main: 'GraphQL editor',
  },
  main: {
    title: 'GraphQL editor',
    saveEndpoint: {
      heading: 'Enter new endpoint URL:',
      button: 'SAVE'
    }
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
  errorMessages: {
    'auth/credential-already-in-use': 'This credential is already associated with a different user account.',
    'auth/email-already-in-use': 'The email address is already in use by another account.',
    'auth/invalid-email': 'The email address is badly formatted.',
    'auth/invalid-credential': 'The supplied auth credential is incorrect, malformed or has expired.',
    'auth/invalid-multi-factor-session': 'The request does not contain a valid proof of first factor successful sign-in.',
    'auth/wrong-password': 'The password is invalid or the user does not have a password.',
    'auth/login-blocked': 'Login was blocked.',
    'auth/account-exists-with-different-credential': 'An account already exists with the same email address.',
    'auth/rejected-credential': 'The request contains malformed or mismatching credentials.',
    'auth/user-token-expired': `The user's credential is no longer valid. The user must sign in again.`,
    'auth/user-cancelled': 'The user did not grant your application the permissions it requested.',
    'auth/user-not-found': 'There is no user record corresponding to this identifier. The user may have been deleted.',
    'auth/user-disabled': 'The user account has been disabled by an administrator.',
    'auth/user-mismatch': 'The supplied credentials do not correspond to the previously signed in user.',
    'auth/too-many-requests': 'Too many requests',
    'auth/user-signed-out': '',
    'auth/custom-authentication-error': 'Authentication error.',
  }
};

export const ru: typeof en = {
  menu: {
    welcome: 'Добро пожаловать',
    main: 'GraphQL редактор',
  },
  main: {
    title: 'GraphQL редактор',
    saveEndpoint: {
      heading: 'Введите адрес новой конечной точки:',
      button: 'СОХРАНИТЬ'
    }
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
  errorMessages: {
    'auth/credential-already-in-use': 'Эти учетные данные уже связаны с другой учетной записью пользователя.',
    'auth/email-already-in-use': 'Адрес электронной почты уже используется другой учетной записью.',
    'auth/invalid-email': 'Адрес электронной почты неправильно отформатирован.',
    'auth/invalid-credential': 'Предоставленные учетные данные для авторизации неверны, неправильно сформированы или срок их действия истек.',
    'auth/invalid-multi-factor-session': 'Запрос не содержит валидного подтверждения первого фактора успешного входа в систему.',
    'auth/wrong-password': 'Пароль неверен или у пользователя нет пароля.',
    'auth/login-blocked': 'Вход в систему был заблокирован.',
    'auth/account-exists-with-different-credential': 'Учетная запись с таким же адресом электронной почты уже существует.',
    'auth/rejected-credential': 'Запрос содержит неправильно сформированные или не соответствующие друг другу учетные данные.',
    'auth/user-token-expired': 'Учетные данные пользователя больше недействительны. Пользователь должен снова войти в систему.',
    'auth/user-cancelled': 'Пользователь не предоставил вашему приложению запрошенные им разрешения.',
    'auth/user-not-found': 'Нет записи пользователя, соответствующей этому идентификатору. Возможно, пользователь был удален.',
    'auth/user-disabled': 'Учетная запись пользователя была отключена администратором.',
    'auth/user-mismatch': 'Предоставленные учетные данные не соответствуют ранее зарегистрированному пользователю.',
    'auth/too-many-requests': 'Слишком много запросов.',
    'auth/user-signed-out': '',
    'auth/custom-authentication-error': 'Ошибка аутентификации.',
  }
};
