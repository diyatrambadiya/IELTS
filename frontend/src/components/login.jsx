import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Axios from 'axios';
import "./login.css";

export const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = () => {
    // Perform login logic here
    Axios.post('http://localhost:8081/login', { email, password })
      .then((response) => {
        if (response.data === 'Success') {
          navigate('/dashboard');
        } else {
          alert('Username or password is not correct');
        }
      })
      .catch((error) => {
        // Handle login error
        console.log(error);
      });
  };

  return (
    <div class="form-container">
      <div class="head">
        <h1>IELTS Speaking WEB</h1>
      </div>
      <h2>Login</h2>
      <label for="email">Email</label>
      <input type="email" name="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} />
      <label for="password">Password</label>
      <input type="password" name="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} />
      <button onclick={handleLogin}>Login</button>
      <span><a href="/register">New one? Register here!</a></span>
    </div>

  );
};
