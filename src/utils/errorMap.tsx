export type authErrorCode = 
  'auth/credential-already-in-use' |
  'auth/email-already-in-use' |
  'auth/invalid-email' |
  'auth/invalid-credential' |
  'auth/invalid-multi-factor-session' |
  'auth/wrong-password' |
  'auth/login-blocked' |
  'auth/account-exists-with-different-credential' |
  'auth/rejected-credential' |
  'auth/user-token-expired' |
  'auth/user-cancelled' |
  'auth/user-not-found' |
  'auth/user-disabled' |
  'auth/user-mismatch' |
  'auth/user-signed-out' |
  'auth/too-many-requests';

export const HIDE_MODAL_TIMEOUT = 4000;
