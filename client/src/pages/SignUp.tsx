import { useState, type FormEvent, type ChangeEvent } from 'react';
import '../styles/SignUp.css';
import AUTH from '../utils/auth';

import { signUP } from '../api/signUp';
import type { UserSign } from '../interfaces/UserSignin'

const SignIn = () => {
  const [signinData, setSigninData] = useState<UserSign>({
    email: '',
    username: '',
    password: ''
  });

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setSigninData({
      ...signinData,
      [name]: value,
    });
    // console.log(signinData)
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    try {
      const data = await signUP(signinData);
      AUTH.login(data.token);
      return data;
    } catch (err) {
      console.error('Failed to sign up', err);
    }
  };

  return (
// SignUp.tsx

// Remove <div className='input-box-container'>
<div className='new'>
  <form className='' onSubmit={handleSubmit}>
    <h1 className="">Join Us</h1>
    <div className='input-group'>
      <input
        id='email'
        className='input-box'
        type='text'
        name='email'
        placeholder='Email'
        value={signinData.email || ''}
        onChange={handleChange}
      />
    </div>
    <div className='input-group'>
      <input
        id='username'
        className='input-box'
        type='text'
        name='username'
        placeholder='Username'
        value={signinData.username || ''}
        onChange={handleChange}
      />
    </div>
    <div className='input-group'>
      <input
        id='password'
        className='input-box'
        type='password'
        name='password'
        placeholder='Password'
        value={signinData.password || ''}
        onChange={handleChange}
      />
    </div>
    <div className='input-group'>
      <button className='submit-button' type='submit'>
        Sign Up
      </button>
    </div>
  </form>
</div>

  );
};

export default SignIn;
