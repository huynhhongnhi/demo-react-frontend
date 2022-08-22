import React, {  useContext, useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from '../contents/Home';
import Post from '../contents/Post';
import Auth from '../contents/Auth';
import Footer from '../layout/Footer';
import Profile from '../contents/Profile';
import  authProvider  from '../../contexts/AuthProvider';


const Main = () => {

    const [authenticated, setAuthenticated] = useState(null);
    const { auth } = useContext(authProvider);

    useEffect(() => {
        const loggedInUser = sessionStorage.getItem("token");
        setAuthenticated(loggedInUser);
    }, []);

    return (
        <>
            <main>
                <div className="container-fluid px-0">
                    <div className="mx-auto tm-content-container">
                        <div className="row mt-3 pb-3">
                            <div className="col-12">
                                <div className="mx-auto tm-about-text-container px-3">
                                    {
                                        (authenticated && auth) ?(
                                                
                                                    <Routes>
                                                        <Route path="/post" element={<Post/>} exact />
                                                        <Route path="/profile" element={<Profile ></Profile>} exact />
                                                        <Route path="/" element={<Home/>} exact />
                                                        <Route path="/auth" element={<Auth ></Auth>}></Route>
                                                    </Routes>
                                     
                                                
                                         ) : (
                                                (<Auth></Auth>)
                                         )
                                        
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
            <Footer></Footer>
        </>
    )
}

export default Main