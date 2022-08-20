import React, {  useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from '../contents/Home';
import Post from '../contents/Post';
import Auth from '../contents/Auth';
import Footer from '../layout/Footer';
import Profile from '../contents/Profile';
import FormAddPost from '../contents/Post/FormAddPost';
import FormEditPost from '../contents/Post/FormEditPost';

const Main = () => {

    const [authenticated, setAuthenticated] = useState(null);
    useEffect(() => {
        const loggedInUser = sessionStorage.getItem("token");
        if (loggedInUser) {
            setAuthenticated(loggedInUser);
        }
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
                                        (!authenticated) ? (<Auth></Auth>) : (
                                            <Routes>
                                                <Route path="/" element={<Home/>} exact />
                                                <Route path="/post" element={<Post/>} to="/post" exact />
                                                <Route path="/profile" element={<Profile ></Profile>} exact />
                                                <Route path="/post/add" element={<FormAddPost ></FormAddPost>} exact />
                                                <Route path="/post/edit" element={<FormEditPost ></FormEditPost>} exact />
                                            </Routes>
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