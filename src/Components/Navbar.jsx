import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { AuthContext } from '../AuthProvider/AuthContext';
import toast from 'react-hot-toast';

const Navbar = () => {
    const { user, loading, logout } = useContext(AuthContext)
    // console.log(logout);

    const links = <>
        <li><NavLink to={"/"}>Home </NavLink></li>
        <li><NavLink to={"/dashboard/user"}>DashBoard </NavLink></li>
        <li><NavLink to={"/dashboard/allTasks"}> Add Task   </NavLink></li>


    </>
    const signOut = () => {
        logout()
            .then(() => {
                toast.error("logged out")
            })

    }
    return (
        <div className='max-w-7xl mx-auto'>
            <div className="navbar ">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            {links}
                        </ul>
                    </div>
                    <Link to={"/"} className="btn btn-ghost text-xl">Taskify </Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {links}
                    </ul>
                </div>
                <div className="navbar-end">
                    {
                        user ?
                            <button onClick={signOut} className='btn btn-error btn-sm'>Logout </button>
                            : <Link to={"/login"}> Login </Link>
                    }
                </div>
            </div>
        </div>
    );
};

export default Navbar;