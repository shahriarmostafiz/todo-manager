import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import useAxios from '../../../hooks/useAxios';
import auth from '../../../Firebase/firebase';
import toast from 'react-hot-toast';

const CreateTask = ({ tasks, setTasks, refetchData }) => {
    const myAxios = useAxios()
    const [task, setTask] = useState({
        name: "",
        status: "todo",
        details: "",
        priority: "low",
        deadline: ""
    })
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm()
    const onSubmit = data => {
        console.log(data); data
        const thisname = data.name
        const thisdetail = data.detail
        const thisdeadline = data.deadline
        const thispriority = data.priority
        const user = auth.currentUser.email
        // setTask({ ...task, name: thisname, detail: thisdetail, priority: thispriority, deadline: thisdeadline })
        const taskData = { ...task, name: thisname, details: thisdetail, priority: thispriority, deadline: thisdeadline, user: user }
        console.log("to be sent to server", taskData);
        myAxios.post("/addTodo", taskData)
            .then(res => {
                console.log(res.data)
                if (res.data.insertedId) {
                    toast.success("task added")
                    refetchData()
                    reset()
                }

            })
        // setTasks(prev => {
        //     const list = [...prev, task]
        //     return list
        // })// reset()
    }
    // console.log(task);
    return (
        <div className='w-full lg:w-3/5 lg:mx-auto text-white'>
            <h1 className='text-3xl font-medium text-info py-6 text-center'>Create a Task</h1>
            <form
                onSubmit={handleSubmit(onSubmit)}
                className="p-4 px-8 w-full space-y-5">
                {/* Name  */}
                <div className='flex flex-col md:flex-row gap-4 justify-between w-full'>

                    <div className='w-1/2' >
                        <label className="label">
                            <span className="text-white label-text ">Task Name  </span>
                        </label>
                        <input type="text" placeholder="Name" className="input  input-bordered bg-transparent input-info w-full "
                            {...register("name", {
                                required: true
                            })} />
                        {errors.name?.type === "required" && <span className="py-2 pl-4 text-red-500">Name is required</span>}
                    </div>
                    <div className='flex justify-between gap-4 w-1/2'>
                        <div className="flex flex-col w-full">
                            <label className="label">
                                <span className="text-white label-text">Deadline </span>
                            </label>
                            <input type="date" placeholder="Deadline" className="input  input-bordered bg-transparent input-info w-full "
                                {...register("deadline", {
                                    required: true
                                })} />
                            {errors.deadline?.type === "required" && <span className="py-2 pl-4 text-red-500">Deadline is required</span>}
                        </div>

                        <div className='flex flex-col w-full bg-tr'>
                            <label className="label">
                                <span className="text-white label-text">Priority</span>
                            </label>
                            <select
                                defaultValue={"low"}
                                className="select select-bordered border-info w-full max-w-xs bg-transparent text-white"
                                {...register("priority", {
                                    required: true
                                })}
                            >
                                <option value={"low"} className='bg-transparent text-black'>Low </option>
                                {/* <option value={"user"}>User</option> */}
                                <option value={"moderate"} className='bg-transparent text-black'>Moderate</option>
                                <option value={"high"} className='bg-transparent text-black '>High </option>
                            </select>
                        </div>

                    </div>
                </div>
                {/* details  */}
                <div className='flex justify-between gap-4 items-end'>
                    <div className='flex-1 '>
                        <label className="label">
                            <span className="text-white label-text">Details </span>
                        </label>
                        <input type="text" placeholder="Detail" className="input  input-bordered bg-transparent input-info w-full "
                            {...register("detail", {
                                required: true
                            })} />
                        {errors.detail?.type === "required" && <span className="py-2 pl-4 text-red-500">Detail is required</span>}
                    </div>
                    <div className="text-center">
                        <button type='submit' className='btn btn-info text-white btn-wide'>Submit </button>

                    </div>
                </div>
                {/* deadline and type  */}



            </form >
        </div >
    );
};

export default CreateTask;