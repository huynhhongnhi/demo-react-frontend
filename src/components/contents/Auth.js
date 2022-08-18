import React, { useState } from "react";
import './Auth/Auth.css';
import Login from './Auth/Login';
import Register from './Auth/Register';
import authApi from '../../api/authApi';

const Auth = () => {

  const [isLogin, setIsLogin] = useState(true)

  const setToken = (token) => {
    sessionStorage.setItem('token', JSON.stringify(token));
  }

  const fetchLogin = async (params) => {
    try {
      const res = await authApi.login(params);
      setToken(res.data.token)
      console.log('---------------------')
      console.log(res.data.token)
    } catch (error) {
      console.log('---------------------')
      console.log(error)
    }
  }


  const changeAuthMode = () => {
    setIsLogin(!isLogin);
  }

  return ( 
    <div>     
        {
            (() => {
                if(isLogin) {
                        return (
                          <Login setToken={setToken} fetchLogin={fetchLogin} changeAuthMode={changeAuthMode}></Login>
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