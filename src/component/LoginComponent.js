import React, { useState } from 'react';
import { storeToken, userName, isAuthentication } from '../services/AuthService';
import { useNavigate } from "react-router-dom";
import '../css/loginpage.css';

const LoginComponent = () => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigator = useNavigate();

  const handleLoginForm = async (e) => {
    e.preventDefault();

    console.log("Email:", email);
    console.log("Password:", password);

    try {
      const response = await fetch('http://localhost:8080/user', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email, password })
      });

      if (response.status === 200) {
        console.log('Login Successful');
        const token = 'Basic ' + window.btoa(email + ":" + password);

        storeToken(token);
        isAuthentication(true);
        userName(email);

        navigator('/theater'); // redirect after login
      } else {
        console.log('Login Failed. Status:', response.status);
        alert('Invalid Credentials!');
      }

    } catch (error) {
      console.error('Login Error:', error);
    }
  };

  const handleRegisterRedirect = () => {
    navigator('/register');
  };

  return (
    <div className='loginPage-container'>
      <div className='heading'>Sign In</div>
      <form className='form' onSubmit={handleLoginForm}>
        
        <input
          required
          className="input"
          type="email"
          name="email"
          id="email"
          placeholder="E-mail"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          required
          className="input"
          type="password"
          name="password"
          id="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <span className="forgot-password">
          <a href="#">Forgot Password?</a>
        </span>

        <input
          className="login-button"
          type="submit"
          value="Sign In"
        />

      </form>

      <div>
        <p>If you don't have an account, please register</p>
        <button className="register-button" onClick={handleRegisterRedirect}>
          Sign Up
        </button>
      </div>
    </div>
  );
};

export default LoginComponent;
