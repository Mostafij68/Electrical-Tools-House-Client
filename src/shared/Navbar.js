import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../firebase.init';
import logo from '../images/logo.png';

const Navbar = () => {
    const [user, loading, error] = useAuthState(auth);

    const menu = <>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/tools">Tools</Link></li>
        <li><Link to="/blogs">Blogs</Link></li>
        <li><Link to="/portfolio">Portfolio</Link></li>
        {
            user ?
                <>
                    <li><Link to="/dashboard">Dashboard</Link></li>
                    <li><button onClick={() => signOut(auth)} class="btn btn-ghost normal-case">Sign-Out</button></li>
                    <li><p className='text-secondary'>{user.displayName}</p></li>
                </>
                :
                <>
                    <li><Link to="/login">Login</Link></li>
                    <li><Link to="/signUp">Sign-up</Link></li>
                </>
        }
    </>
    return (
        <header className='bg-slate-100 sticky top-0 z-20'>
            <div class="navbar justify-between w-11/12 mx-auto">
                <div class="">
                    <div class="dropdown">
                        <label tabIndex="0" class="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex="0" class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            {menu}
                        </ul>
                    </div>
                    <a class="btn btn-ghost normal-case lg:text-2xl md:text-2xl">
                        <img className='h-8 mr-2' src={logo} alt="" />
                        <span>Electrical Tools House</span>
                    </a>
                </div>
                <div class="hidden lg:flex">
                    <ul class="menu menu-horizontal p-0">
                        {menu}
                    </ul>
                </div>
            </div>
        </header>
    );
};

export default Navbar;