import { en } from '../model/translates';

export type authErrorCode =
  | 'auth/credential-already-in-use'
  | 'auth/email-already-in-use'
  | 'auth/invalid-email'
  | 'auth/invalid-credential'
  | 'auth/invalid-multi-factor-session'
  | 'auth/wrong-password'
  | 'auth/login-blocked'
  | 'auth/account-exists-with-different-credential'
  | 'auth/rejected-credential'
  | 'auth/user-token-expired'
  | 'auth/user-cancelled'
  | 'auth/user-not-found'
  | 'auth/user-disabled'
  | 'auth/user-mismatch'
  | 'auth/user-signed-out'
  | 'auth/too-many-requests';

export const getErrorMessage = (key: string, texts: typeof en) => {
  const errorMessageCode = Object.keys(texts.errorMessages).find(
    (item) => item === key
  );
  return errorMessageCode
    ? texts.errorMessages[errorMessageCode as authErrorCode]
    : texts.errorMessages['auth/custom-authentication-error'];
};

export const HIDE_MODAL_TIMEOUT = 4000;
