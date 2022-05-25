import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../images/logo.png';

const Navbar = () => {
    return (
        <header className='bg-slate-100 sticky top-0 z-10'>
            <div class="navbar justify-between w-11/12 mx-auto">
                <div class="">
                    <div class="dropdown">
                        <label tabIndex="0" class="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex="0" class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/login">Login</Link></li>
                            <li><Link to="/signUp">Sign-up</Link></li>
                        </ul>
                    </div>
                    <a class="btn btn-ghost normal-case lg:text-2xl md:text-2xl">
                        <img className='h-8 mr-2' src={logo} alt="" />
                        <span>Electrical Tools House</span>
                    </a>
                </div>
                <div class="hidden lg:flex">
                    <ul class="menu menu-horizontal p-0">
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/login">Login</Link></li>
                        <li><Link to="/signUp">Sign-up</Link></li>
                    </ul>
                </div>
            </div>
        </header>
    );
};

export default Navbar;