import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';

const App = () => {
  return (
    <div className='bg-slate-950 text-white min-h-screen'>
      <Navbar />
      <Outlet></Outlet>
      <Footer />
    </div>
  );
};

export default App;