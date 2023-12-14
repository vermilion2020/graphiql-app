const authErrorCode = [
  {code: 'auth/credential-already-in-use', mess: 'This credential is already associated with a different user account.'},
  {code: 'auth/email-already-in-use', mess: 'The email address is already in use by another account.'},
  {code: 'auth/invalid-email', mess: 'The email address is badly formatted.'},
  {code: 'auth/invalid-credential', mess: 'The supplied auth credential is incorrect, malformed or has expired.'},
  {code: 'auth/invalid-multi-factor-session', mess: 'The request does not contain a valid proof of first factor successful sign-in.'},
  {code: 'auth/wrong-password', mess: 'The password is invalid or the user does not have a password.'},
  {code: 'auth/login-blocked', mess: 'Login was blocked.'},
  {code: 'auth/account-exists-with-different-credential', mess: 'An account already exists with the same email address.'},
  {code: 'auth/rejected-credential', mess: 'The request contains malformed or mismatching credentials.'},
  {code: 'auth/user-token-expired', mess: `The user's credential is no longer valid. The user must sign in again.`},
  {code: 'auth/user-cancelled', mess: 'The user did not grant your application the permissions it requested.'},
  {code: 'auth/user-not-found', mess: 'There is no user record corresponding to this identifier. The user may have been deleted.'},
  {code: 'auth/user-disabled', mess: 'The user account has been disabled by an administrator.'},
  {code: 'auth/user-mismatch', mess: 'The supplied credentials do not correspond to the previously signed in user.'},
  {code: 'auth/user-signed-out', mess: ''},
]

export default function errorMap(err: string) {
  const findErr = authErrorCode.find(item => item.code === err);
  if (findErr) {
    return findErr.mess
  } else {
    return 'Authentication error.'
  }
}
