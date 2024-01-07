export type Locales = 'En' | 'Ru';

export const LOCALES = ['En', 'Ru'];

export const en = {
  menu: {
    welcome: 'Welcome',
    main: 'GraphQL editor',
    signOut: 'Sign Out',
  },
  main: {
    title: 'GraphQL editor',
    response: 'Response',
    saveEndpoint: {
      heading: 'Enter new endpoint URL:',
      button: 'SAVE',
    },
    variables: 'Variables',
    headers: 'Headers',
    docs: {
      title: 'Documentation',
      officialDocs: 'GraphQL official docs',
      query: 'query',
      mutation: 'mutation',
      kind: 'is a type of a kind',
      inputFields: 'Input Fields for',
      fields: 'Fields for',
      noType: `Type doesn't exist`,
      back: 'Docs',
    },
    errors: {
      vars: 'Error in variables. Variables should be a valid JSON',
      headers: 'Error in headers. Headers should be a valid JSON',
      query:
        'An error found in the query. Use documentation to fix the query and try again',
      emptyQuery: `You can't send an empty query`,
    },
    info: {
      heading: 'GraphQL Info',
      btnText: 'Set testing data',
      exampleVars: 'And variables:',
      exampleQuery: 'An example GraphQL query might look like:',
    },
  },
  welcome: {
    title: 'GraphQL editor',
    signIn: 'Sign In',
    signUp: 'Sign Up',
    main: 'MAIN PAGE',
    noEnv:
      'Sorry, but to continue the local functioning of the application, you should put .env file to the project root folder.',
    project:
      'This application is an educational project on GraphiQL developed within RS School React course',
    course:
      'RS School React is a free-of-charge course for JavaScript/Front-End developers, who want to get acquainted with React library for web application development',
    tecks: 'Technologies',
    developers: {
      title: 'Developers',
      mila: {
        name: 'Mila',
        description: 'Team lead, Front-end developer',
        contribution:
          'Contribution to the project: basic structure of the project, main page - requests, documentation, prettifier',
      },
      natali: {
        name: 'Natali',
        description: 'Front-end developer',
        contribution:
          'Contribution to the project: sign-in / sign-up pages, authentication with use of Firebase, adaptive / responsive layout',
      },
      victor: {
        name: 'Victor',
        description: 'Front-end developer',
        contribution:
          'Contribution to the project: welcome page, endpoint saving, validation for query body, variables and headers',
      },
    },
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
    loading: 'Loading...',
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
    loading: 'Loading...',
  },
  notFound: {
    title: 'Not Found',
    heading: 'Page or item you are requesting does not exist',
    description:
      'Check the URL or ask for help if you are sure that it is correct',
  },
  errorMessages: {
    'auth/credential-already-in-use':
      'This credential is already associated with a different user account.',
    'auth/email-already-in-use':
      'The email address is already in use by another account.',
    'auth/invalid-email': 'The email address is badly formatted.',
    'auth/invalid-credential':
      'The supplied auth credential is incorrect, malformed or has expired.',
    'auth/invalid-multi-factor-session':
      'The request does not contain a valid proof of first factor successful sign-in.',
    'auth/wrong-password':
      'The password is invalid or the user does not have a password.',
    'auth/login-blocked': 'Login was blocked.',
    'auth/account-exists-with-different-credential':
      'An account already exists with the same email address.',
    'auth/rejected-credential':
      'The request contains malformed or mismatching credentials.',
    'auth/user-token-expired': `The user's credential is no longer valid. The user must sign in again.`,
    'auth/user-cancelled':
      'The user did not grant your application the permissions it requested.',
    'auth/user-not-found':
      'There is no user record corresponding to this identifier. The user may have been deleted.',
    'auth/user-disabled':
      'The user account has been disabled by an administrator.',
    'auth/user-mismatch':
      'The supplied credentials do not correspond to the previously signed in user.',
    'auth/too-many-requests': 'Too many requests',
    'auth/user-signed-out': '',
    'auth/custom-authentication-error': 'Authentication error.',
    'docs/no-enpoint':
      'No endpoint provided. Save an endpoint to view the documentation',
    'endpoint/empty': `You can't save en empty endpoint`,
    'request/url': 'Invalid URL is provided. Scheme check request was failed',
    'request/docs': 'An error occurs while SDL request',
    'request/query':
      'An endpoint responses with an error. Check the query or try later',
  },
  errorBoundary: {
    p1: 'An error occured in the application, or the environment variables for Firebase were not set.',
    p2: 'If you failed to solve the problem on your own, do not hesitate to contact us:',
  },
};

export const ru: typeof en = {
  menu: {
    welcome: 'Добро пожаловать',
    main: 'GraphQL редактор',
    signOut: 'Выход',
  },
  main: {
    title: 'GraphQL редактор',
    response: 'Ответ',
    saveEndpoint: {
      heading: 'Введите адрес новой конечной точки:',
      button: 'СОХРАНИТЬ',
    },
    variables: 'Переменные',
    headers: 'Заголовки',
    docs: {
      title: 'Документация',
      officialDocs: 'GraphQL документация',
      query: 'запрос',
      mutation: 'мутация',
      kind: 'это тип вида',
      inputFields: 'Поля ввода для',
      fields: 'Поля для',
      noType: `Такого типа не существует`,
      back: 'Назад',
    },
    errors: {
      vars: 'Ошибка в переменных. Переменные должны иметь формат JSON',
      headers: 'Ошибка в заголовках. Заголовки должны иметь формат JSON',
      query:
        'Ошибка в запросе. Используйте документацию, чтобы поправить ошибку и попробуйте снова',
      emptyQuery: 'Невозможно отправить пустой запрос',
    },
    info: {
      heading: 'GraphQL Инфо',
      btnText: 'Заполнить тестовые данные',
      exampleVars: 'И переменных:',
      exampleQuery: 'Пример GraphQL запроса:',
    },
  },
  welcome: {
    title: 'GraphQL редактор',
    signIn: 'Вход',
    signUp: 'Регистрация',
    main: 'НА ГЛАВНУЮ',
    noEnv:
      'Извините, но для продолжения локальной работы приложения необходимо поместить файл .env в корневую папку проекта.',
    project:
      'Данное приложение является учебным проектом по GraphiQL, разработанным в рамках курса RS School React',
    course:
      'RS School React – бесплатный курс для JavaScript/Frontend-разработчиков, желающих ознакомиться с библиотекой React для разработки web-приложений',
    tecks: 'Технологии',
    developers: {
      title: 'Разработчики',
      mila: {
        name: 'Мила',
        description: 'Тимлид, Frontend-разработчик',
        contribution:
          'Личный вклад в проект: базовая структура проекта, главная страница – запросы, документация, претифаер',
      },
      natali: {
        name: 'Натали',
        description: 'Frontend-разработчик',
        contribution:
          'Личный вклад в проект: страницы входа и регистрации, аутентификация с использованием Firebase, адаптивный дизайн',
      },
      victor: {
        name: 'Виктор',
        description: 'Frontend-разработчик',
        contribution:
          'Личный вклад в проект: страница-приветствие, сохранение конечной точки, валидация тела запроса, переменных и заголовков',
      },
    },
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
    loading: 'Загрузка...',
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
    loading: 'Загрузка...',
  },
  notFound: {
    title: 'Страница не найдена',
    heading: 'Страница, которую Вы запрашиваете не существует',
    description:
      'Проверьте адрес, который Вы указываете или обратитесь за помощью',
  },
  errorMessages: {
    'auth/credential-already-in-use':
      'Эти учетные данные уже связаны с другой учетной записью пользователя.',
    'auth/email-already-in-use':
      'Адрес электронной почты уже используется другой учетной записью.',
    'auth/invalid-email': 'Адрес электронной почты неправильно отформатирован.',
    'auth/invalid-credential':
      'Предоставленные учетные данные для авторизации неверны, неправильно сформированы или срок их действия истек.',
    'auth/invalid-multi-factor-session':
      'Запрос не содержит валидного подтверждения первого фактора успешного входа в систему.',
    'auth/wrong-password': 'Пароль неверен или у пользователя нет пароля.',
    'auth/login-blocked': 'Вход в систему был заблокирован.',
    'auth/account-exists-with-different-credential':
      'Учетная запись с таким же адресом электронной почты уже существует.',
    'auth/rejected-credential':
      'Запрос содержит неправильно сформированные или не соответствующие друг другу учетные данные.',
    'auth/user-token-expired':
      'Учетные данные пользователя больше недействительны. Пользователь должен снова войти в систему.',
    'auth/user-cancelled':
      'Пользователь не предоставил вашему приложению запрошенные им разрешения.',
    'auth/user-not-found':
      'Нет записи пользователя, соответствующей этому идентификатору. Возможно, пользователь был удален.',
    'auth/user-disabled':
      'Учетная запись пользователя была отключена администратором.',
    'auth/user-mismatch':
      'Предоставленные учетные данные не соответствуют ранее зарегистрированному пользователю.',
    'auth/too-many-requests': 'Слишком много запросов.',
    'auth/user-signed-out': '',
    'auth/custom-authentication-error': 'Ошибка аутентификации.',
    'docs/no-enpoint':
      'Не сохранен эндроинт. Добавьте эндпоинт, чтобы увидеть документацию',
    'endpoint/empty': 'Вы не можете сохранить пустой эндпоинт',
    'request/url':
      'Вы запрашиваете некорректный URL или сервер отвечает с ошибкой. Проверьте URL или попробуйте позже',
    'request/docs': 'Во время SDL запроса произошла ошибка',
    'request/query':
      'Сервер ответил с ошибкой. Проверьте тело запроса или попробуйте позже',
  },
  errorBoundary: {
    p1: 'В приложении произошла ошибка или не были установлены переменные окружения для Firebase.',
    p2: 'Если у Вас не получается решить проблему, свяжитесь с нами:',
  },
};
