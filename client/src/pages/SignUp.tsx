// sign in screen. if pop up delete
import { useState, type FormEvent, type ChangeEvent } from 'react';
import "../styles/login.css"

import { signUP } from '../api/signUp';
import type {UserSign} from '../interfaces/UserSignin'

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
    console.log(signinData)
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    try {
      const data = await signUP(signinData);
      console.log(`data:${data}`)
     return data;
     
    } catch (err) {
      console.error('Failed to sign up', err);
    }
  };

  return (


    <div className='all'>
    <form className='loginHeader' onSubmit={handleSubmit}>
      <h1 className="padd">Sign Up</h1>
        <div className='all'>
          <div className='input-container'>
          
            <input
              id='password'
              className='box'
              type='text'
              name='email'
              placeholder='Email'
              value={signinData.email || ''}
              onChange={handleChange}
            />
          </div>
        </div>
      <div className='all'>
        <div className='input-container'>
         
          <input
            id='username'
            className='box'
            type='text'
            name='username'
            placeholder='UserName'
            value={signinData.username || ''}
            onChange={handleChange}
          />
        </div>
      </div>
      <div className='all'>
        <div className='input-container'>
        
          <input
            id='password'
            className='box'
            type='password'
            name='password'
            placeholder='Password'
            value={signinData.password || ''}
            onChange={handleChange}
          />
        </div>
      </div>
      
      <div className='all'>
        <button className='button' type='submit'>
          Sign Up
        </button>
      </div>
    </form>
  </div>
  );
};

export default SignIn;
