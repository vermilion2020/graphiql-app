import React, { useEffect, useState } from 'react';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../firebase';
import { Link, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { schema } from './Schema';
import { useContext } from 'react';
import { LocaleContext } from "../../context/LocaleContext";

export interface IFormInput {
  email: string;
  password: string;
  confirmPassword: string;
  accept: boolean;
}

function SignUpForm() {
  const { texts } = useContext(LocaleContext);
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

  const navigate = useNavigate();
  const [isDisabled, setIsDisabled] = useState(true);

  const onSubmit = async (data: IFormInput, e?: React.BaseSyntheticEvent): Promise<void> => {
    e?.preventDefault();

    const {email, password} = data;
    await createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        console.log(user);
        navigate('/sign-in');
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
        // ..
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
    <div className='mx-auto w-96'>
      <div className='flex min-h-full flex-col justify-center px-6 py-12 lg:px-8'>
        <h2 className='mt-10 mb-4 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900'>
          Create an account
        </h2>
        <form className='bg-white dark:bg-slate-900 rounded-lg p-6 border shadow-xl' onSubmit={handleSubmit(onSubmit)}>
          <label htmlFor='email' className='block h-24 text-left'>
            <span className='block text-sm font-medium text-gray-900'>Email address</span>
            <input
              type='email'
              id='email'
              autoComplete='email'
              placeholder='Email address'
              className='mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
            focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
            disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
            invalid:border-pink-500 invalid:text-pink-600
            focus:invalid:border-pink-500 focus:invalid:ring-pink-500'
              {...register('email')}
            />
            <div className='block text-xs font-medium text-red-600'>
              {formState.errors.email && formState.errors.email.message}
            </div>
          </label>

          <label htmlFor='password' className='block h-24 text-left'>
            <span className='block text-sm font-medium text-gray-900'>Create password</span>
            <input
              type='password'
              id='password'
              autoComplete='new-password'
              placeholder='Password'
              className='mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
            focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
            disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
            invalid:border-pink-500 invalid:text-pink-600
            focus:invalid:border-pink-500 focus:invalid:ring-pink-500'
              {...register('password')}
            />
            <div className='block text-xs font-medium text-red-600'>
              {formState.errors.password && formState.errors.password.message}
            </div>
          </label>

          <label htmlFor='confirmPassword' className='block h-24 text-left'>
            <span className='block text-sm font-medium text-gray-900'>Confirm password</span>
            <input
              type='password'
              id='confirmPassword'
              placeholder='Confirm password'
              className='mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
            focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
            disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
            invalid:border-pink-500 invalid:text-pink-600
            focus:invalid:border-pink-500 focus:invalid:ring-pink-500'
              {...register('confirmPassword')}
            />
            <div className='block text-xs font-medium text-red-600'>
              {formState.errors.confirmPassword && formState.errors.confirmPassword.message}
            </div>
          </label>

          <div className='relative flex gap-x-3 h-16 text-left'>
            <div className='flex h-6 items-center'>
              <input
                id='accept'
                type='checkbox'
                className='h-4 w-4 accent-buttonColor-400'
                {...register('accept')}
              />
            </div>
            <div className='text-sm leading-6'>
              <label htmlFor='accept' className='font-medium text-sm text-gray-900'>
                By signing up you agree to our Terms and conditions
              </label>
              <div className='block text-xs font-medium text-red-600'>
                {formState.errors.accept && formState.errors.accept.message}
              </div>
            </div>
          </div>

          <div className='mt-4'>
            <button
              type='submit'
              disabled={isDisabled}
              className='rounded-md bg-buttonBg-600 px-3 py-2 text-sm font-semibold 
              text-white shadow-sm hover:bg-buttonBg-400 focus-visible:outline 
              focus-visible:outline-2 focus-visible:outline-offset-2 
              focus-visible:outline-buttonBg-400 disabled:bg-disabledButton hover:bg-buttonBg-400'
            >
              {texts.signUp.title}
            </button>
          </div>
        </form>
        <p className='mt-3'>
          Already have an account?
          <Link to='/sign-in' className='font-semibold leading-6 ps-1'>
            Sign In
          </Link>
        </p>
      </div>
    </div>
  );
}

export default SignUpForm;
