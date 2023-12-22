import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import MainRoute from './Routers/MainRoute.jsx'
import AuthProvider from './AuthProvider/AuthContext.jsx'
import { Toaster } from 'react-hot-toast'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={MainRoute}>
      </RouterProvider>
      <Toaster />
    </AuthProvider>

  </React.StrictMode >,
)
