//handle login page
import { useState, type FormEvent, type ChangeEvent } from 'react';
import "../styles/login.css";
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
    <div className='form-container'>
      <form className='form-header' onSubmit={handleSubmit}>
        <h1 className="form-title">Login</h1>
        <div className="input-group">
          <input
            id='username'
            className='input-box'
            type='text'
            name='username'
            placeholder='Username'
            value={loginData.username || ''}
            onChange={handleChange}
          />
        </div>
        <div className="input-group">
          <input
            id='password'
            className='input-box'
            type='password'
            name='password'
            placeholder='Password'
            value={loginData.password || ''}
            onChange={handleChange}
          />
        </div>
        <div className="input-group">
          <button className='submit-button' type='submit'>
            Login
          </button>
        </div>
        <div className="links">
          <p>If you haven't signed up yet, click here:  
              <Link to="/SignUp"> Sign Up</Link>
          </p>
        </div>
      </form>
    </div>
  );
};

export default Login;
