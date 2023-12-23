import React, { useContext } from 'react';
import { AuthContext } from '../../AuthProvider/AuthContext';
import useTask from '../../hooks/useTask';
import Loading from '../../Components/Loading';
import auth from '../../Firebase/firebase';
import { FiEdit } from 'react-icons/fi';
import { useForm } from 'react-hook-form';
import useAxios from '../../hooks/useAxios';
import toast from 'react-hot-toast';

const UserProfile = () => {
    const { user, loading } = useContext(AuthContext)
    const myAxios = useAxios()

    // const {
    //     register,
    //     handleSubmit,
    //     reset,
    //     formState: { errors },
    // } = useForm()



    const [data, isPending, refetch] = useTask()

    if (isPending || loading) {
        return <Loading></Loading>
    }
    const handleSubmit = (e, id) => {
        // console.log(data); data
        e.preventDefault()
        const data = e.target
        const name = data.name.value
        const details = data.details.value
        const deadline = data.deadline.value
        const priority = data.priority.value
        const editData = {
            name,
            details,
            deadline,
            priority
        }


        // const user = auth.currentUser.email

        // setTask({ ...task, name: thisname, detail: thisdetail, priority: thispriority, deadline: thisdeadline })

        console.log("to be sent to server", editData);
        myAxios.put(`/todo/edit/${id}`, editData)
            .then(res => {
                console.log(res.data);
                if (res.data.modifiedCount) {
                    refetch()
                    toast.success("Updated task Successfully ")
                }
            })
            .catch(err => {
                console.log(err);
            })
        // myAxios.post("/addTodo", taskData)
        //     .then(res => {
        //         console.log(res.data)
        //         if (res.data.insertedId) {
        //             toast.success("task added")
        //             refetchData()
        //             reset()
        //         }

        //     })
        // setTasks(prev => {
        //     const list = [...prev, task]
        //     return list
        // })// reset()
    }

    return (
        <div className='max-w-7xl mx-auto h-full'>
            <div className='flex flex-col lg:items-center  md:flex-row gap-4'>
                <div className='w-1/2'>
                    <img src={auth?.currentUser?.photoURL} className="w-full rounded-lg max-w-60" alt="user image" />
                </div>
                <div className="w-1/2">
                    <p>{user?.email}</p>
                    <p>Total Task: {data.length}</p>
                </div>
            </div>
            <div>
                <div className="overflow-x-auto text-white">
                    <table className="table">
                        {/* head */}
                        <thead>
                            <tr className='text-white'>
                                <th>#</th>
                                <th>Task</th>
                                <th>Priority </th>
                                <th>Deadline</th>

                                <th>Actions </th>
                            </tr>
                        </thead>
                        <tbody>
                            {/* row 1 */}
                            {
                                data?.map((task, idx) => <tr className='hover:text-blue-300' key={task._id}>
                                    <th>{idx + 1}</th>
                                    <td>{task?.name}</td>
                                    <td>{task?.priority}</td>

                                    <td>{task.deadline}</td>
                                    <td>
                                        <button
                                            onClick={() => document.getElementById(task._id).showModal()}
                                            className="btn btn-ghost text-amber-400 btn-xs"><FiEdit size={18} /></button>
                                        <dialog id={task._id} className=" modal modal-bottom sm:modal-middle">
                                            <div className="modal-box text-black ">
                                                <h3 className="font-bold text-lg">Edit  {task.name}</h3>
                                                <form
                                                    onSubmit={(e) => handleSubmit(e, task._id)}
                                                    className="p-4  w-full space-y-4">
                                                    {/* Name  */}


                                                    <div className='w-full' >
                                                        <label className="label">
                                                            <span className="text-black label-text ">Task Name  </span>
                                                        </label>
                                                        <input type="text" placeholder="Name" className="input  input-bordered bg-transparent input-info w-full "
                                                            name='name'
                                                            defaultValue={task.name} />

                                                    </div>
                                                    {/* deadline and priority   */}
                                                    <div className='flex justify-between gap-4 w-full'>
                                                        {/* deadline */}
                                                        <div className="flex flex-col w-full">
                                                            <label className="label">
                                                                <span className="text-black label-text">Deadline </span>
                                                            </label>
                                                            <input type="date" placeholder="Deadline" className="input  input-bordered bg-transparent input-info w-full "
                                                                name="deadline"
                                                                defaultValue={task.deadline} />

                                                        </div>
                                                        {/* priority */}
                                                        <div className='flex flex-col w-full bg-tr'>
                                                            <label className="label">
                                                                <span className="text-black label-text">Priority</span>
                                                            </label>
                                                            <select
                                                                defaultValue={task.priority}
                                                                className="select select-bordered border-info w-full max-w-xs bg-transparent text-black"
                                                                name='priority'
                                                            >
                                                                <option value={"low"} className='bg-transparent text-black'>Low </option>
                                                                {/* <option value={"user"}>User</option> */}
                                                                <option value={"moderate"} className='bg-transparent text-black'>Moderate</option>
                                                                <option value={"high"} className='bg-transparent text-black '>High </option>
                                                            </select>
                                                        </div>


                                                    </div>
                                                    {/* details  */}
                                                    <div className='flex justify-between gap-4 items-end'>
                                                        <div className='flex-1 '>
                                                            <label className="label">
                                                                <span className="text-white label-text">Details </span>
                                                            </label>
                                                            <input type="text" placeholder="Detail" className="input  input-bordered bg-transparent input-info w-full "
                                                                name='details'
                                                                defaultValue={task.details}
                                                            />

                                                        </div>
                                                        <div className="text-center">
                                                            <button type='submit' className='btn btn-info text-white btn-wide'>Submit </button>

                                                        </div>
                                                    </div>
                                                    {/* deadline and type  */}



                                                </form >

                                                <div className="modal-action">
                                                    <form method="dialog">
                                                        <button className="btn">Close</button>
                                                    </form>
                                                </div>
                                            </div>
                                        </dialog>
                                    </td>
                                </tr>)
                            }
                            {/*  */}

                        </tbody>
                    </table>
                </div>
            </div>

        </div>
    );
};

export default UserProfile;