import React, { useContext, useState } from 'react';
import CreateTask from './Components/CreateTask';
import ListTasks from './Components/ListTasks';
import useTask from '../../hooks/useTask';
import Loading from '../../Components/Loading';
import { AuthContext } from '../../AuthProvider/AuthContext';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';

const TaskApp = () => {
    const [tasks, setTasks] = useState([])
    const [data, isPending, refetch] = useTask()
    const { loading } = useContext(AuthContext)
    if (isPending || loading) {
        return <Loading></Loading>
    }
    console.log(data);
    return (
        <div className=' text-white max-w-7xl mx-auto min-h-screen flex flex-col items-center pt-7 lg:pt-20'>
            <CreateTask tasks={tasks} setTasks={setTasks} refetchData={refetch}></CreateTask>
            <ListTasks tasks={data} refetchData={refetch} />
        </div>

    );
};

export default TaskApp;