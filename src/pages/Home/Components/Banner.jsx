import React from 'react';
import cover from "../../../assets/cover.jpg"
import { Link } from 'react-router-dom';
const Banner = () => {
    return (
        <div className='w-full relative'>
            <div className='bg-black opacity-20 bg-blend-overlay'>
                <img src={cover} className='w-full overflow-y-hidden' alt="" />
            </div>
            <Link to={"/dashboard"} className="absolute top-1/2 bottom-1/2 btn left-1/2 right-1/2 min-w-40 btn-success  text-white">Add a Task</Link>
        </div>
    );
};

export default Banner;