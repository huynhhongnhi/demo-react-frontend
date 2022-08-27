import React, {  useContext, useEffect, useState } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import Home from '../Contents/Home';
import Post from '../Contents/Post';
import Auth from '../Contents/Auth';
import Footer from './Footer';
import Profile from '../Contents/Profile';
import  authProvider  from '../../contexts/AuthProvider';

const Main = () => {

    const [authenticated, setAuthenticated] = useState(null);
    const { auth } = useContext(authProvider);
    const pathname = useLocation().pathname;

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
                                    (authenticated && auth) ? (
                                    <Routes>
                                        <Route path="/" element={<Home/>} exact />
                                        <Route path="/post" element={<Post/>} exact />
                                        <Route path="/profile" element={<Profile ></Profile>} exact />
                                    </Routes>
                                    ) : (
                                        (pathname === '/') ? 
                                        <Routes>
                                            <Route path="/" element={<Home/>} exact />
                                        </Routes>  : <Auth></Auth>
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