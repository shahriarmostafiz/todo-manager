import React from 'react';
// import cover from "../../../assets/cover.jpg"
import { Link } from 'react-router-dom';
const Banner = () => {
    return (
        // <div className='w-full relative'>
        //     <div className='bg-black opacity-20 bg-blend-overlay'>
        //         <img src={cover} className='w-full overflow-y-hidden' alt="" />
        //     </div>
        //     <Link to={"/dashboard/allTasks"} className="absolute top-1/2 bottom-1/2 btn left-1/2 right-1/2 min-w-40 btn-success  text-white">Add a Task</Link>
        // </div>
        <div className="hero min-h-screen bg-cover " style={{ backgroundImage: 'url("https://i.ibb.co/DkPzJCW/cover.jpg")' }}>
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-center text-neutral-content">
                <div className="max-w-md">
                    <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
                    <p className="mb-5">Are Your Struggling with managing your task .</p>
                    <Link to={"/dashboard/allTasks"} className="btn btn-info text-white">Get Started </Link>
                </div>
            </div>
        </div>
    );
};

export default Banner;