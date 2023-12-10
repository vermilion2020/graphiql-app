import React, { useState } from 'react';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../firebase';
import { Link, useNavigate } from 'react-router-dom';

function SignInForm() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        navigate('/main');
        console.log(user);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
      });
  };

  return (
    <div className='col'>
      <div className='mx-auto w-96'>
        <div className='flex min-h-full flex-col justify-center px-6 py-12 lg:px-8'>
          <h2 className='mt-10 mb-4 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900'>
            Sign in to your account
          </h2>
          <form
            className='bg-white dark:bg-slate-900 rounded-lg p-6 border shadow-xl'
            onSubmit={(e) => handleSubmit(e)}
          >
            <label htmlFor='email' className='block h-24 text-left'>
              <span className='block text-sm font-medium text-gray-900'>Email address</span>
              <input
                type='email'
                id='email'
                placeholder='Email address'
                className='mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
            focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
            disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
            invalid:border-pink-500 invalid:text-pink-600
            focus:invalid:border-pink-500 focus:invalid:ring-pink-500'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </label>

            <label htmlFor='password' className='block h-24 text-left'>
              <div className='flex items-center justify-between'>
                <label htmlFor='password' className='block text-sm font-medium text-gray-900'>
                  Password
                </label>
                <div className='text-sm'>
                  <Link to='#' className='font-semibold leading-6 ps-1'>
                    Forgot password?
                  </Link>
                </div>
              </div>
              <input
                type='password'
                id='password'
                placeholder='Password'
                className='mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
            focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
            disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
            invalid:border-pink-500 invalid:text-pink-600
            focus:invalid:border-pink-500 focus:invalid:ring-pink-500'
                onChange={(e) => setPassword(e.target.value)}
                required
                autoComplete='current-password'
              />
            </label>

            <button className='button' type='submit'>
              Sign In
            </button>
          </form>
          <p className='mt-3'>
            No account yet?
            <Link to='/sign-up' className='font-semibold leading-6 ps-1'>
              Sign Up
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default SignInForm;
