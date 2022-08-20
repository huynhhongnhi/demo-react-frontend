import React, { useContext, useState } from "react";
import './Auth/Auth.css';
import Login from './Auth/Login';
import Register from './Auth/Register';
import AuthContext from '../../contexts/AuthProvider'

const Auth = () => {

  const { setAuth } = useContext(AuthContext);
  const [isLogin, setIsLogin] = useState(true);

  const changeAuthMode = () => {
    setIsLogin(!isLogin);
  }

  return ( 
    <div>     
      {
        (() => {
            if (isLogin) 
            {
              return (
                <Login dchangeAuthMode={changeAuthMode}></Login>
              )
            } else {
              return (
                <Register changeAuthMode={changeAuthMode}></Register>
              )
            }
        })()  
      }  
    </div>  
  )
}

export default Auth;