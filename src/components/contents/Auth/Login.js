import React, { useState } from 'react'

const Login = props => {

  const [email, setUserName] = useState('');
  const [password, setPassword] = useState('');

  const callApi = event => {
    
    event.preventDefault();

    if (!email || !password) {
      console.log('Not params');
      return;
    }

    props.fetchLogin({ email, password })
    console.log('dsvjkfvjf');
    console.log(email, password);
  }


  return (
    <div className="auth-form-container">
        <form className="auth-form">
          <div className="auth-form-content">
            <h3 className="auth-form-title">Sign In</h3>
            <div className="form-group mt-3">
              <label>Email address</label>
              <input
                type="email"
                className="form-control mt-1"
                placeholder="Enter email"
                onChange={e => setUserName(e.target.value)}

              />
            </div>
            <div className="form-group mt-3">
              <label>Password</label>
              <input
                type="password"
                className="form-control mt-1"
                placeholder="Enter password"
                onChange={e => setPassword(e.target.value)}

              />
            </div>
            <div className="d-grid gap-2 mt-3 text-center">
              <button type="submit" onClick={callApi} className="btn btn-primary">
                Submit
              </button>
            </div>
            <p className="forgot-password text-center mt-2">
              Forgot <a href="#">password ?</a>
              <br/>
              <span onClick={props.changeAuthMode}>Sign up</span>
            </p>
          </div>
        </form>
      </div>
  )
}

export default Login