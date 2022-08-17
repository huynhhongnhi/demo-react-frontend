import React, { useState } from "react";
import './Auth/Auth.css';
import Login from './Auth/Login'
import Register from './Auth/Register'

const Auth = () => {

  let [isLogin, setIsLogin] = useState(true)

  const changeAuthMode = () => {
    setIsLogin(!isLogin);
  }

  return ( 
    <div>     
        {
            (() => {
                if(isLogin) {
                        return (
                          <Login changeAuthMode={changeAuthMode}></Login>
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