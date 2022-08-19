import React, { useContext, useState } from "react";
import './Auth/Auth.css';
import Login from './Auth/Login';
import Register from './Auth/Register';
import authApi from '../../api/authApi';
import AuthContext from '../../contexts/AuthProvider'

const Auth = () => {

  const { setAuth } = useContext(AuthContext);

  const [isLogin, setIsLogin] = useState(true);
  const setToken = (token) => {
    localStorage.setItem("token", JSON.stringify(token))
  }

  const fetchLogin = async (params) => {
    try {
      const res = await authApi.login(params);
      const accessToken = res?.data?.token;
      setAuth({ params, accessToken });
      setToken(accessToken);
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
            if (isLogin) 
            {
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