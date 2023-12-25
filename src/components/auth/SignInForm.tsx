import React, { useEffect, useState } from 'react';
import {
  getIdToken,
  onAuthStateChanged,
  signInWithEmailAndPassword,
} from 'firebase/auth';
import { auth } from '../../firebase';
import { Link, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { useContext } from 'react';
import { LocaleContext } from '../../context/LocaleContext';
import ArrowCircle from '../../assets/icons/ArrowCircle ';
import { useAppDispatch } from '../../redux';
import { setError, setSingIn, setToken } from '../../redux/features/appSlice';
import { getErrorMessage } from '../../utils/errorMessage';
import Spinner from '../spinner/Spinner';
import { FirebaseError } from 'firebase/app';

export interface ISignInForm {
  email: string;
  password: string;
}

function SignInForm() {
  const { texts } = useContext(LocaleContext);
  const dispatch = useAppDispatch();

  const { register, handleSubmit, reset, formState } = useForm<ISignInForm>({
    defaultValues: {
      email: '',
      password: '',
    },
    mode: 'onChange',
  });

  const navigate = useNavigate();
  const [isDisabled, setIsDisabled] = useState(true);
  const [isLoading, setIsLoading] = useState(false);

  const signInUser = async (email: string, password: string) => {
    setIsLoading(true);
    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = userCredential.user;
      dispatch(setSingIn(user.uid));

      onAuthStateChanged(auth, async (user) => {
        if (user) {
          const token = await getIdToken(user, false);
          dispatch(setToken(token));
          dispatch(setError(null));
          navigate('/main');
        }
      });
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
    { email, password }: ISignInForm,
    e?: React.BaseSyntheticEvent
  ) => {
    e?.preventDefault();
    signInUser(email, password).then(() => setIsLoading(false));
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
    <div className="flex flex-row items-center justify-center min-h-full">
      <div className="flex flex-col justify-center xs:p-4 lg:px-8 border rounded-lg lg:shadow-xl xs:shadow-md">
        <Link to="/" className="font-semibold leading-6 ps-1">
          <ArrowCircle />
        </Link>
        <h2 className="mt-8 mb-4 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
          {texts.signIn.title}
        </h2>
        <form className="bg-white max-w-xs" onSubmit={handleSubmit(onSubmit)}>
          <label htmlFor="email" className="block h-24 text-left">
            <span className="block text-sm font-medium text-gray-900">
              {texts.signIn.emailLabel}
            </span>
            <input
              type="email"
              id="email"
              placeholder={texts.signIn.emailPlaceholder}
              autoComplete="email"
              className="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
            focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
            disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
            invalid:border-pink-500 invalid:text-pink-600
            focus:invalid:border-pink-500 focus:invalid:ring-pink-500"
              {...register('email', {
                required: `${texts.signIn.emailErr}`,
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: `${texts.signIn.emailMes}`,
                },
              })}
            />
            <div className="block text-xs font-medium text-red-600">
              {formState.errors.email && formState.errors.email.message}
            </div>
          </label>

          <label htmlFor="password" className="block h-24 text-left">
            <span className="block text-sm font-medium text-gray-900">
              {texts.signIn.passwordLabel}
            </span>
            <input
              type="password"
              id="password"
              placeholder={texts.signIn.passwordPlaceholder}
              className="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
            focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
            disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
            invalid:border-pink-500 invalid:text-pink-600
            focus:invalid:border-pink-500 focus:invalid:ring-pink-500"
              autoComplete="current-password"
              {...register('password', {
                required: `${texts.signIn.passwordErr}`,
              })}
            />
            <div className="block text-xs font-medium text-red-600">
              {formState.errors.password && formState.errors.password.message}
            </div>
          </label>

          {isLoading ? (
            <Spinner text={texts.signIn.loading} />
          ) : (
            <button
              type="submit"
              disabled={isDisabled}
              className="rounded-md bg-buttonBg-600 px-3 py-2 text-sm font-semibold 
            text-white shadow-sm hover:bg-buttonBg-400 disabled:bg-disabledButton"
            >
              {texts.signIn.btnText}
            </button>
          )}
        </form>
        <p className="mt-3">
          {texts.signIn.question}
          <Link
            to="/sign-up"
            className="font-semibold leading-6 ps-1 text-buttonColor-900"
          >
            {texts.signIn.linkText}
          </Link>
        </p>
      </div>
    </div>
  );
}

export default SignInForm;
