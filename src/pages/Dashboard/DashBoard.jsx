import React from 'react';
// import TaskApp from './TaskApp';
import { NavLink, Outlet } from 'react-router-dom';
import Navbar from '../../Components/Navbar';
import Footer from '../../Components/Footer';

const DashBoard = () => {
    return (
        <div className='bg-slate-950 w-full text-white min-h-screen flex flex-col justify-between'>
            <div className='w-full'>
                <Navbar />
            </div>
            <div className='w-full'>

                <Outlet />
            </div>
            <div className='w-full'>
                <Footer />
            </div>
        </div>
    );
};

export default DashBoard;