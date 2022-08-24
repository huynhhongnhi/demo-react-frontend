import React, { useState } from 'react';
import authApi from '../../../api/authApi';

const Register = props => {

  const [ username, setUsername ] = useState('');
  const [ email, setEmail ] = useState('');
  const [ password, setPassword ] = useState('');

  const handUsernameChange = e => {
    setUsername(e.target.value)
  }

  const handEmailChange = e => {
    setEmail(e.target.value)
  }

  const handPasswordChange = e => {
    setPassword(e.target.value)
  }

  const handSubmit = async e => {
    
    try {
      e.preventDefault();
      const response = await authApi.register({ username, email, password });
      if (response) {
        alert("Your file is being uploaded!")
        props.changeAuthMode();
      }
    } catch (error) {
      console.log(error)
    }

  }

  return (
    <div className="auth-form-container">
      <form className="auth-form">
        <div className="auth-form-content">
          <h3 className="auth-form-title">Sign In</h3>
          <div className="text-center">
            Already registered?{" "}
            <span className="link-primary cursor-pointer" onClick={props.changeAuthMode}>
              <a href="javascript:void(0)">Sign In</a>
            </span>
          </div>
          <div className="form-group mt-3">
            <label>Username</label>
            <input
              type="text"
              className="form-control mt-1"
              placeholder="Username"
              onChange={handUsernameChange}
            />
          </div>
          <div className="form-group mt-3">
            <label>Email address</label>
            <input
              type="email"
              className="form-control mt-1"
              placeholder="Email address"
              onChange={handEmailChange}
            />
          </div>
          <div className="form-group mt-3">
            <label>Password</label>
            <input
              type="password"
              className="form-control mt-1"
              placeholder="Password"
              onChange={handPasswordChange}
            />
          </div>
          <div className="d-grid gap-2 mt-3 text-center">
            <button onClick={handSubmit} type="submit" className="btn btn-primary">
              Submit
            </button>
          </div>
        </div>
      </form>
    </div>
  )
}

export default Register