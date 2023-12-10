import React, { useState } from 'react';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../firebase';
import { NavLink, useNavigate } from 'react-router-dom';

function SignUpForm() {
  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

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
  };

  return (
    <div className='mx-auto w-96'>
      <div className='flex min-h-full flex-col justify-center px-6 py-12 lg:px-8'>
        <h2 className='mt-10 mb-4 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900'>
          Create an account
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
            <span className='block text-sm font-medium text-gray-900'>Create password</span>
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
            />
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
              required
            />
          </label>

          <button className='button' type='submit'>
            Sign Up
          </button>
        </form>
        <p className='mt-3'>
          Already have an account?
          <NavLink to='/sign-up' className='font-semibold leading-6 ps-1'>
            Sign In
          </NavLink>
        </p>
      </div>
    </div>
  );
}

export default SignUpForm;
