import React from 'react';
import { Link } from 'react-router-dom';


const Navbar = () => {
    return (
        <div class="navbar bg-transparent max-w-[1280px] z-50">
            <div class="navbar-start">
                <div class="dropdown">
                    <label tabindex="0" class="btn btn-ghost md:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabindex="0" class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        <li><Link to={'/home'}>Home</Link></li>
                        <li><Link to={'/portfolio'}>Portfolio</Link></li>
                        <li><Link to={'ourteam'}>Our Team</Link></li>
                        <li><Link to={'contactus'}>Contact Us</Link></li>
                    </ul>
                </div>
                <Link to={'/'} class="btn btn-ghost normal-case text-xl"><img className='w-40' src="images/logos/logo.png" alt="logo" /></Link>
            </div>
            <div class="navbar-end">
                <div className=' hidden md:flex'>
                    <ul class="menu menu-horizontal p-0">
                        <li><Link to={'/home'}>Home</Link></li>
                        <li><Link to={'/portfolio'}>Portfolio</Link></li>
                        <li><Link to={'ourteam'}>Our Team</Link></li>
                        <li><Link to={'contactus'}>Contact Us</Link></li>
                    </ul>
                </div>
                <div class="">
                    <Link to={'login'} class="btn btn-ghost btn-xs md:btn-md">Login</Link>
                </div>
            </div>
            {/* <div class="navbar-end">
                <a class="btn">Get started</a>
            </div> */}
        </div>
    );
};

export default Navbar;