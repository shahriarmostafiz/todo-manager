import React from 'react';
// import TaskApp from './TaskApp';
import { Outlet } from 'react-router-dom';

const DashBoard = () => {
    return (
        <div>
            <Outlet />
        </div>
    );
};

export default DashBoard;