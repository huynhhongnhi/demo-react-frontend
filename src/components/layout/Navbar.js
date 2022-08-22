import React, { useContext, useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom';
import authProvider from '../../contexts/AuthProvider';

const Navbar = () => {
    const pathname = useLocation().pathname;

    const [authenticated, setAuthenticated] = useState(null);
    const { setAuth, auth } = useContext(authProvider); 

    const logOut = () => {
        setAuthenticated({});
        sessionStorage.removeItem('token');
        setAuth('');
    }

    useEffect(() => {
        const loggedInUser = sessionStorage.getItem("token");
        if (loggedInUser) {
            setAuthenticated(loggedInUser);
        }
    }, []);

    return (
        <nav className="navbar navbar-expand-lg mr-0 ml-auto" id="tm-main-nav">
            <button className="navbar-toggler tm-bg-black py-2 px-3 mr-0 ml-auto collapsed" type="button"
                data-toggle="collapse" data-target="#navbar-nav" aria-controls="navbar-nav"
                aria-expanded="false" aria-label="Toggle navigation">
                <span>
                    <i className="fas fa-bars tm-menu-closed-icon"></i>
                    <i className="fas fa-times tm-menu-opened-icon"></i>
                </span>
            </button>
            <div className="collapse navbar-collapse tm-nav" id="navbar-nav">
                <ul className="navbar-nav text-uppercase">
                    <li className={`${pathname === '/' ? 'nav-item active' : 'nav-item'}`}>
                        <Link className="nav-link tm-nav-link" to="/">Home</Link>
                    </li>
                    <li className={`${pathname === '/post' ? 'nav-item active' : 'nav-item'}`}>
                        <Link className="nav-link tm-nav-link" to="/post">Admin</Link>
                    </li>
                    <li className={`${pathname === '/profile' ? 'nav-item active' : 'nav-item'}`}>
                        <Link className="nav-link tm-nav-link" to="/profile">Profile</Link>
                    </li>
                    {
    
                        (authenticated && auth) ? (<li onClick={logOut} className={`${pathname === '/logout' ? 'nav-item active' : 'nav-item'}`}>
                        <Link className="nav-link tm-nav-link" to="/">Logout</Link>
                    </li> ) : null
                    }
                </ul>
            </div>
        </nav>
    )
}

export default Navbar