/* eslint-disable react/prop-types */
import { useEffect, useState } from 'react';
import { AiTwotoneDelete } from 'react-icons/ai';
import { CiEdit } from "react-icons/ci";
import { FiEdit } from "react-icons/fi";

import { MdDelete } from "react-icons/md";
import useAxios from '../../../hooks/useAxios';
import toast from 'react-hot-toast';
import { DndProvider, useDrag, useDrop } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';

const ListTasks = ({ tasks, setTasks, refetchData }) => {

    const [todos, setTodos] = useState([])
    const [inProgress, setInProgress] = useState([])
    const [closed, setClosed] = useState([])
    useEffect(() => {
        const fTodos = tasks?.filter(task => task?.status === "todo")
        const fInProgress = tasks?.filter(task => task?.status === "inprogress")
        const fClosed = tasks?.filter(task => task?.status === "closed")
        setTodos(fTodos)
        setInProgress(fInProgress)
        setClosed(fClosed)
    }, [tasks])
    console.log("todo:", todos);
    const statuses = ["todo", "inprogress", "closed"]
    return (
        <div className='flex flex-col lg:flex-row gap-5 max-w-7xl mx-auto lg:gap-10 w-full justify-around py-5'>
            {statuses.map((status, idx) => <Section key={idx} status={status} tasks={tasks}
                setTasks={setTasks}
                todos={todos}
                inProgress={inProgress}
                closed={closed}
                refetchData={refetchData}

            ></Section>)}
        </div>
    );
};

export default ListTasks;
const Section = ({ status, tasks,
    setTasks,
    todos,
    inProgress,
    closed, refetchData }) => {
    const myAxios = useAxios()

    const [{ isOver }, drop] = useDrop(() => ({
        accept: "task",
        drop: (item) => addItemToSection(item.id),
        collect: (monitor) => ({
            isOver: !!monitor.isOver()
        })
    }))

    const addItemToSection = id => {
        console.log("droped", id, status)
        const data = { status: status }
        myAxios.patch(`todo/${id}`, data)
            .then(res => {
                console.log(res.data);
                refetchData()
                toast.success(`Task is now in ${status} phase`)
            })

    }
    let text = "Todo"
    let bg = "bg-red-500"
    let tasksToMap = todos
    if (status === "inprogress") {
        text = "In Progress"
        bg = "bg-amber-400"
        tasksToMap = inProgress
    }
    if (status === "closed") {
        text = "Completed"
        bg = "bg-green-500"
        tasksToMap = closed
    }

    return (<div ref={drop} className={`w-80 ${isOver ? "bg-slate-800" : ""}`}>
        <Header text={text} bg={bg} count={tasksToMap.length}></Header>

        <div className='grid gap-2'>
            {tasksToMap.length > 0 && tasksToMap.map(task => <Task key={task._id} tasks={tasks} task={task} refetchData={refetchData} setTasks={setTasks} />)}
        </div>
    </div>)
}
const Header = ({ text, bg, count, status, tasks,
    setTasks,
    todos,
    inProgress,
    closed, }) => {
    return (<div className={`flex font-medium gap-3 items-center w-full px-4 py-4 rounded ${bg}`}>
        <h1 className={`rounded  `}>{text} </h1>
        <div className='bg-white font-semibold rounded-full text-green-400 h-6 w-6 text-center '>{count}</div>
    </div>)
}

const Task = ({ task, tasks, setTasks, refetchData }) => {
    const myAxios = useAxios()
    const [{ isDragging }, drag] = useDrag(() => ({
        type: "task",
        item: { id: task._id },
        collect: (monitor) => ({
            isDragging: !!monitor.isDragging()
        })
    }))
    // console.log(isDragging);
    const handleDelete = id => {
        console.log(id, "would be deleted soon");
        myAxios.delete(`/todo/${id}`)
            .then(res => {
                if (res.data.deletedCount) {
                    toast.error("Task Deleted")
                    refetchData()
                }
            })

        // refetchData()
    }
    return (
        <div ref={drag}
            className={`shadow-sm p-1 mt-2 py-2 rounded w-full cursor-grab space-y-2 ${isDragging ? "opacity-25" : "opacity-100"}`}>
            <div className="flex justify-between  items-center w-full">
                <p className='text-xl font-medium '> {task.name}</p>
                <p className={` border rounded px-2 ${task.priority === "high" ? "text-red-600 border-red-600 " : task.priority === "moderate" ? "text-yellow-400 border-yellow-400" : "text-purple-500 border-purple-500"}  `}> {task.priority}</p>
            </div>
            <p>{task.details}</p>
            <div className="flex justify-between">
                <p>Deadline: {task.deadline}</p>
                <div className="flex gap-1">
                    <button className='btn btn-ghost text-red-600 btn-xs' onClick={() => handleDelete(task._id)}><MdDelete size={20} />
                    </button>

                </div>
            </div>

        </div>
    )
}
