//handle login page

import { useState, type FormEvent, type ChangeEvent } from 'react';
import "../styles/login.css"
import Auth from '../utils/auth';
import { login } from '../api/authAPI';
import type { UserLogin } from '../interfaces/UserLogin';
import { Link } from 'react-router-dom';
const Login = () => {
  const [loginData, setLoginData] = useState<UserLogin>({
    username: '',
    password: '',
  });

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setLoginData({
      ...loginData,
      [name]: value,
    });
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    try {
      const data = await login(loginData);
      Auth.login(data.token);
    } catch (err) {
      console.error('Failed to login', err);
    }
  };

  return (
    <div className='all'>
    <form className='loginHeader' onSubmit={handleSubmit}>
      <h1 className="padd">Login</h1>
      <div className='all'>
        <div className='input-container'>
         
          <input
            id='username'
            className='box'
            type='text'
            name='username'
            placeholder='UserName'
            value={loginData.username || ''}
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
            value={loginData.password || ''}
            onChange={handleChange}
          />
        </div>
      </div>
      <div className='all'>
        <button className='button' type='submit'>
          Login
        </button>
        
      </div>
      <div className='all'>
        <p>If you havent sign up yet do it here: 
            <Link to="/SignUp"> Sign In</Link>
        </p>
      </div>
    </form>
      
  </div>
  );
};

export default Login;
