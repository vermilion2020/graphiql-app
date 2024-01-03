import React, { useEffect, useState } from 'react';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../firebase';
import { Link, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useContext } from 'react';
import { LocaleContext } from '../../context/LocaleContext';
import ArrowCircle from '../../assets/icons/ArrowCircle ';
import { setError } from '../../redux/features/appSlice';
import { useAppDispatch, useAppSelector } from '../../redux/index';
import { getErrorMessage } from '../../utils/errorMessage';
import Spinner from '../spinner/Spinner';
import { FirebaseError } from 'firebase/app';

export interface IFormInput {
  email: string;
  password: string;
  confirmPassword: string;
  accept: boolean;
}

function SignUpForm() {
  const { texts } = useContext(LocaleContext);
  const dispatch = useAppDispatch();
  const { isLoggedIn } = useAppSelector((state) => state.appState);
  const navigate = useNavigate();

  useEffect(() => {
    if (isLoggedIn) {
      navigate('/main');
    }
  }, [isLoggedIn, navigate]);

  const schema = yup
    .object({
      email: yup
        .string()
        .email(texts.signUp.emailMes)
        .required(texts.signUp.emailErr),
      password: yup
        .string()
        .matches(/^\S*$/, texts.signUp.emailWhitespace)
        .min(8, texts.signUp.passwordLength)
        .matches(/[@$!%*#?&+=()/.,'"-<+<>~`]/, texts.signUp.passwordSpecial)
        .matches(/[0-9]/, texts.signUp.passwordDigit)
        .matches(/\p{Ll}/gu, texts.signUp.passwordLowercase)
        .matches(/\p{Lu}/gu, texts.signUp.passwordUppercase)
        .required(texts.signUp.passwordErr),
      confirmPassword: yup
        .string()
        .oneOf([yup.ref('password')], texts.signUp.confirmPasswordMatch)
        .required(texts.signUp.confirmPasswordErr),
      accept: yup
        .boolean()
        .oneOf([true], texts.signUp.acceptErr)
        .required(texts.signUp.acceptErr),
    })
    .required();

  const { register, handleSubmit, reset, formState } = useForm<IFormInput>({
    defaultValues: {
      email: '',
      password: '',
      confirmPassword: '',
      accept: false,
    },
    mode: 'onChange',
    resolver: yupResolver(schema),
  });

  const [isDisabled, setIsDisabled] = useState(true);
  const [isLoading, setIsLoading] = useState(false);

  const signUpUser = async (email: string, password: string) => {
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = userCredential.user;
      if (user) {
        dispatch(setError(null));
        navigate('/sign-in');
      }
    } catch (error: unknown) {
      if (error instanceof FirebaseError) {
        const message = getErrorMessage(error.code, texts);
        dispatch(setError(message));
      } else {
        throw error;
      }
    }
  };

  const onSubmit = async (
    data: IFormInput,
    e?: React.BaseSyntheticEvent
  ): Promise<void> => {
    e?.preventDefault();
    setIsLoading(true);

    const { email, password } = data;
    signUpUser(email, password).then(() => setIsLoading(false));

    reset();
  };

  useEffect(() => {
    if (formState.isValid) {
      setIsDisabled(false);
    } else {
      setIsDisabled(true);
    }
  }, [formState]);

  return (
    <div className="form-wrapper">
      <div className="flex flex-col justify-center my-4 p-4 xs:p-8 xs:my-8 lg:px-16 w-full border rounded-lg lg:shadow-xl xs:shadow-md bg-white">
        <Link to="/">
          <ArrowCircle />
        </Link>
        <h2 className="mt-8 mb-4 text-center text-2xl font-bold leading-9 tracking-tight text-buttonColor-600">
          {texts.signUp.formTitle}
        </h2>
        <form className="w-full" onSubmit={handleSubmit(onSubmit)}>
          <label htmlFor="email" className="block h-24 text-left">
            <span className="block text-sm font-medium text-gray-900">
              {texts.signUp.emailLabel}
            </span>
            <input
              type="email"
              id="email"
              autoComplete="email"
              disabled={isLoading}
              placeholder={texts.signUp.emailPlaceholder}
              className="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
            focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
            disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
            invalid:border-pink-500 invalid:text-pink-600
            focus:invalid:border-pink-500 focus:invalid:ring-pink-500"
              {...register('email')}
            />
            <div className="block text-xs font-medium text-red-600">
              {formState.errors.email && formState.errors.email.message}
            </div>
          </label>

          <label htmlFor="password" className="block h-24 text-left">
            <span className="block text-sm font-medium text-gray-900">
              {texts.signUp.passwordLabel}
            </span>
            <input
              type="password"
              id="password"
              autoComplete="new-password"
              disabled={isLoading}
              placeholder={texts.signUp.passwordPlaceholder}
              className="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
            focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
            disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
            invalid:border-pink-500 invalid:text-pink-600
            focus:invalid:border-pink-500 focus:invalid:ring-pink-500"
              {...register('password')}
            />
            <div className="block text-xs font-medium text-red-600">
              {formState.errors.password && formState.errors.password.message}
            </div>
          </label>

          <label htmlFor="confirmPassword" className="block h-24 text-left">
            <span className="block text-sm font-medium text-gray-900">
              {texts.signUp.confirmPasswordLabel}
            </span>
            <input
              type="password"
              id="confirmPassword"
              disabled={isLoading}
              placeholder={texts.signUp.confirmPasswordPlaceholder}
              autoComplete="none"
              className="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
            focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
            disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
            invalid:border-pink-500 invalid:text-pink-600
            focus:invalid:border-pink-500 focus:invalid:ring-pink-500"
              {...register('confirmPassword')}
            />
            <div className="block text-xs font-medium text-red-600">
              {formState.errors.confirmPassword &&
                formState.errors.confirmPassword.message}
            </div>
          </label>

          <div className="relative flex gap-x-3 h-16 text-left">
            <div className="flex h-6 items-center">
              <input
                id="accept"
                type="checkbox"
                className="h-4 w-4 accent-buttonColor-600 hover:accent-buttonColor-300"
                {...register('accept')}
              />
            </div>
            <div className="text-sm leading-6">
              <label
                htmlFor="accept"
                className="font-medium text-sm text-gray-900"
              >
                {texts.signUp.tacLabel}
              </label>
              <div className="block text-xs font-medium text-red-600">
                {formState.errors.accept && formState.errors.accept.message}
              </div>
            </div>
          </div>

          <div className="mt-4">
            {isLoading ? (
              <Spinner text={texts.signUp.loading} />
            ) : (
              <button type="submit" disabled={isDisabled} className="btn">
                {texts.signUp.title}
              </button>
            )}
          </div>
        </form>
        <p className="mt-3">
          {texts.signUp.question}&#32;
            <Link to="/sign-in">
              <span className="mt-3 font-semibold">{texts.signUp.linkText}</span>
            </Link>
        </p>
      </div>
    </div>
  );
}

export default SignUpForm;
