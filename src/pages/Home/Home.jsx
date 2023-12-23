import React from 'react';
import Banner from './Components/Banner';
import User from './Components/User';

const Home = () => {
    return (
        <div className='max-w-7xl mx-auto'>
            <Banner />
            <User />
        </div>
    );
};

export default Home;