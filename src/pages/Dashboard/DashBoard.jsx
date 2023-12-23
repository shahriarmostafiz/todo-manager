import React from 'react';
// import TaskApp from './TaskApp';
import { Outlet } from 'react-router-dom';

const DashBoard = () => {
    return (
        <div className='bg-slate-950 text-white'>
            <Outlet />
        </div>
    );
};

export default DashBoard;