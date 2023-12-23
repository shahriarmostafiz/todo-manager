import React from 'react';
import student from "../../../assets/graduated.png"
import banker from "../../../assets/banker.png"
import coder from "../../../assets/developer.png"
import teacher from "../../../assets/teacher.png"
import CC from "../../../assets/youtuber.png"
import UserCard from './UserCard';
const User = () => {
    return (
        <>
            <h1 className='text-4xl font-bold text-info'>Our Users </h1>
            <div className='flex flex-col md:flex-row gap-4 '>
                <UserCard text={"Students"} img={student}></UserCard>
                <UserCard text={"Bankers"} img={banker}></UserCard>
                <UserCard text={"Creators"} img={CC}></UserCard>
                <UserCard text={"Programmers"} img={coder}></UserCard>

            </div>
        </>
    );
};

export default User;