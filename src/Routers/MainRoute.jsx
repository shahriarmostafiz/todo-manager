import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import App from '../App';
import Home from '../pages/Home/Home';
import DashBoard from '../pages/Dashboard/DashBoard';
import Login from '../pages/Login';
import Register from '../pages/Register';
import TaskApp from '../pages/Dashboard/TaskApp';
import PriveRoute from './PrivateRoute';

const MainRoute = createBrowserRouter([{
    path: "/",
    element: <App></App>,
    children: [{
        path: "/",
        element: <Home />
    }, {
        path: "/login",
        element: <Login />
    }, {
        path: "/register",
        element: <Register />
    }
    ]
}, {
    path: "dashboard",
    element: <PriveRoute><DashBoard /></PriveRoute>,
    children: [
        {
            path: "allTasks",
            element: <TaskApp />
        }
    ]
}])

export default MainRoute;