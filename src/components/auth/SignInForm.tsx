import React, { useEffect, useState } from 'react';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../firebase';
import { Link, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { useContext } from 'react';
import { LocaleContext } from '../../context/LocaleContext';

export interface ISignInForm {
  email: string;
  password: string;
}

export interface ISession {
  status: string;
  userId: null | string;
}

export interface IUser {
  uid: string;
  email: string;
}

function SignInForm() {
  const { texts } = useContext(LocaleContext);
  const { register, handleSubmit, reset, formState } = useForm<ISignInForm>({
    defaultValues: {
      email: '',
      password: '',
    },
    mode: 'onChange',
  });

  const navigate = useNavigate();
  const [isDisabled, setIsDisabled] = useState(true);
  const [session, setSession] = useState<ISession>({
    status: 'no-authenticated',
    userId: null,
  });

  const onSubmit = (
    { email, password }: ISignInForm,
    e?: React.BaseSyntheticEvent
  ) => {
    console.log('email', email);

    e?.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        if (user) {
          setSession({ status: 'authenticated', userId: user.uid });
        }
        navigate('/main');
        console.log(user);
      })
      .then(() => {
        console.log('session', session);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
        setSession({ status: 'no-authenticated', userId: null });
      });
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
    <div className="col">
      <div className="mx-auto w-96">
        <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
          <h2 className="mt-10 mb-4 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            {texts.signIn.title}
          </h2>
          <form
            className="bg-white dark:bg-slate-900 rounded-lg p-6 border shadow-xl"
            onSubmit={handleSubmit(onSubmit)}
          >
            <label htmlFor="email" className="block h-24 text-left">
              <span className="block text-sm font-medium text-gray-900">
                {texts.signIn.emailLabel}
              </span>
              <input
                type="email"
                id="email"
                placeholder={texts.signIn.emailPlaceholder}
                className="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
            focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
            disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
            invalid:border-pink-500 invalid:text-pink-600
            focus:invalid:border-pink-500 focus:invalid:ring-pink-500"
                {...register('email', {
                  required: 'Email address is required',
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message: 'Please enter a valid email',
                  },
                })}
              />
              <div className="block text-xs font-medium text-red-600">
                {formState.errors.email && formState.errors.email.message}
              </div>
            </label>

            <label htmlFor="password" className="block h-24 text-left">
              <div className="flex items-center justify-between">
                <label
                  htmlFor="password"
                  className="block text-sm font-medium text-gray-900"
                >
                  {texts.signIn.passwordLabel}
                </label>
                <div className="text-sm">
                  <Link to="#" className="font-semibold leading-6 ps-1">
                    Forgot password?
                  </Link>
                </div>
              </div>
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
                {...register('password', { required: 'Password is required' })}
              />
              <div className="block text-xs font-medium text-red-600">
                {formState.errors.password && formState.errors.password.message}
              </div>
            </label>

            <button
              type="submit"
              disabled={isDisabled}
              className="rounded-md bg-buttonBg-600 px-3 py-2 text-sm font-semibold 
              text-white shadow-sm hover:bg-buttonBg-400 focus-visible:outline 
              focus-visible:outline-2 focus-visible:outline-offset-2 
              focus-visible:outline-buttonBg-400 disabled:bg-disabledButton hover:bg-buttonBg-400"
            >
              {texts.signIn.btnText}
            </button>
          </form>
          <p className="mt-3">
            {texts.signIn.question}
            <Link to="/sign-up" className="font-semibold leading-6 ps-1">
              {texts.signIn.linkText}
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default SignInForm;
