import * as yup from 'yup';

const getCharacterValidationError = (str: string) => {
  return `Your password must have at least 1 ${str} character`;
};

export const schema = yup
  .object({
    email: yup.string().email('Please enter a valid email!').required('Email is required'),
    password: yup
      .string()
      .min(8, 'Password must be at least 8 characters')
      .matches(/^\S*$/, 'Whitespace is not allowed')
      .matches(/[0-9]/, getCharacterValidationError('digit'))
      .matches(/[a-z]/, getCharacterValidationError('lowercase'))
      .matches(/[A-Z]/, getCharacterValidationError('uppercase'))
      .matches(/[@$!%*#?&+=()]/, getCharacterValidationError('special'))
      .required('Password is required'),
    confirmPassword: yup
      .string()
      .oneOf([yup.ref('password')], 'Passwords must match')
      .required('Confirm Password is required'),
    accept: yup
      .boolean()
      .oneOf([true], 'Your agreement is required')
      .required('Your agreement is required'),
  })
  .required();