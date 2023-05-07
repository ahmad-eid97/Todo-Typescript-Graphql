// REACT STUFF
import React, { useState } from 'react';
// REACT ROUTER STUFF
import { Link } from 'react-router-dom';
// LOGIC DATA
import { useLogic } from './useLogic';
// STYLES FILES
import './loginForm.scss';

const LoginForm = () => {
  const { loginData, handleInputs, loginHandler } = useLogic();

  return (
    <div className='form'>
      <h1>Login</h1>
      <div className='field'>
        <input type="text" placeholder='Email Address' name="email" value={loginData.email} onChange={(e) => handleInputs(e)} />
        <i className="fa-regular fa-at"></i>
      </div>
      <div className='field'>
        <input type="password" placeholder='Password' name="password" value={loginData.password} onChange={(e) => handleInputs(e)} />
        <i className="fa-light fa-lock-keyhole"></i>
      </div>
      <button onClick={loginHandler}><i className="fa-light fa-right-to-bracket"></i> Login</button>
      <p>Don't have an account!? <Link to='/signup'>Signup</Link> instead</p>
    </div>
  )
}

export default LoginForm
