// REACT STUFF
import React from 'react'
import { Link } from 'react-router-dom';
// LOGIC
import { useLogic } from './useLogic';

const SignupForm = () => {
  const { signupData, setSignupData, handleInputs, signupHandler } = useLogic();

  return (
    <div className='form'>
      <h1>Signup</h1>
      <div className='field'>
        <input type="text" placeholder='Username' name="username" value={signupData.username} onChange={(e) => handleInputs(e)} />
        <i className="fa-light fa-user"></i>
      </div>
      <div className='field'>
        <input type="text" placeholder='Email Address' name="email" value={signupData.email} onChange={(e) => handleInputs(e)} />
        <i className="fa-regular fa-at"></i>
      </div>
      <div className='field'>
        <input type="password" placeholder='Password' name="password" value={signupData.password} onChange={(e) => handleInputs(e)} />
        <i className="fa-regular fa-lock-open"></i>
      </div>
      <div className='field'>
        <input type="password" placeholder='Confirm Password' name="confirmPassword" value={signupData.confirmPassword} onChange={(e) => handleInputs(e)} />
        <i className="fa-light fa-lock-keyhole"></i>
      </div>
      <button onClick={signupHandler}><i className="fa-light fa-badge-check"></i> Signup</button>
      <p>Already have an account!? <Link to='/login'>Login</Link> instead</p>
    </div>
  )
}

export default SignupForm
