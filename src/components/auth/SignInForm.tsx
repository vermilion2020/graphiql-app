import React, { useState } from 'react';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../firebase';
import { NavLink, useNavigate } from 'react-router-dom';

function SignInForm() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const onLogin = (e: React.FormEvent<HTMLFormElement>) => {
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
      <h2 className='text-primary'>Sign In Form</h2>
      <form className='border-0 border-secondary rounded-3 shadow p-3' onSubmit={(e) => onLogin(e)}>
        <div className='mb-3'>
          <label htmlFor='email' className='form-label'>
            Email address
          </label>
          <input
            type='email'
            id='email'
            placeholder='Email address'
            className='form-control'
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className='mb-3'>
          <label htmlFor='password' className='form-label'>
            Password
          </label>
          <input
            type='password'
            id='password'
            placeholder='Password'
            autoComplete='current-password'
            className='form-control'
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <div className='mb-3'>
          <button type='submit' className='btn btn-primary'>
            Sign In
          </button>
        </div>
      </form>
      <p className='mt-3'>
        No account yet? <NavLink to='/sign-up'>Sign Up</NavLink>
      </p>
    </div>
  );
}

export default SignInForm;
