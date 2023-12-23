import React from 'react';

const UserCard = ({ img, text }) => {
    return (
        <div className="card max-w-80 lg:max-w-48 px-5 py-4 bg-transparent shadow-2xl border-info border  hover:scale-105 
              ease-in-out duration-500
              transition cursor-pointer">
            <figure><img src={img} className='w-full' alt="Shoes" /></figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title">{text}</h2>
            </div>
        </div>
    );
};

export default UserCard;