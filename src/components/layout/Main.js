import React, { useContext } from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from '../contents/Home';
import Post from '../contents/Post';
import Auth from '../contents/Auth';
import Footer from '../layout/Footer';
import Profile from '../contents/Profile';
import AuthContext from '../../contexts/AuthProvider';

const Main = () => {

    const { auth } = useContext(AuthContext)

    return (
        <>
            <main>
                <div className="container-fluid px-0">
                    <div className="mx-auto tm-content-container">
                        <div className="row mt-3 pb-3">
                            <div className="col-12">
                                <div className="mx-auto tm-about-text-container px-3">
                                    <Routes>
                                        <Route path="/" element={<Home/>} exact />
                                        <Route path="/post" element={<Post/>} to="/post" exact />
                                        {
                                            (auth && auth.accessToken) ? (<Route path="/auth" element={<Profile></Profile>} exact />) : (<Route path="/auth" element={<Auth></Auth>} exact />)
                                        }
                                    </Routes>
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