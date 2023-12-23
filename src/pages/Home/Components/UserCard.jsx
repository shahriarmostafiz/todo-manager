import React from 'react';

const UserCard = ({ img, text }) => {
    return (
        <div className="card w-48 bg-base-100 shadow-xl">
            <figure><img src={img} className='w-full' alt="Shoes" /></figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title">{text}</h2>
            </div>
        </div>
    );
};

export default UserCard;