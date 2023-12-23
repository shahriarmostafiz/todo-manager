import React, { useState } from 'react';
import CreateTask from './Components/CreateTask';
import ListTasks from './Components/ListTasks';

const TaskApp = () => {
    const [tasks, setTasks] = useState([])
    return (
        <div className='bg-slate-950 text-white w-screen min-h-screen flex flex-col items-center pt-7 lg:pt-20'>
            <CreateTask tasks={tasks} setTasks={setTasks}></CreateTask>
            <ListTasks tasks={tasks} setTasks={setTasks} />
        </div>
    );
};

export default TaskApp;