import { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AiFillGithub, AiOutlineEye } from 'react-icons/ai';
import { AiOutlineEyeInvisible } from 'react-icons/ai';
import { FcGoogle } from 'react-icons/fc'
import { AuthContext } from "../AuthProvider/AuthContext";
import toast from "react-hot-toast";
// import { ToastContainer, toast } from "react-toastify";
// import { AuthContext } from "../../AuthProvider/AuthProvider";


const Login = () => {
    const location = useLocation()

    console.log(location.state);
    const { login, googleLogin, gitLogin } = useContext(AuthContext)
    // const { login, googleLogin } = useContext(AuthContext)
    const [showpass, setShowPass] = useState(false)
    const navigate = useNavigate()

    const handleLogin = e => {
        e.preventDefault()
        const form = e.target
        const email = form.email.value
        const password = form.password.value
        // console.log(email, password);
        login(email, password)
            .then(res => {
                console.log(res.user)
                toast.success('logged in')
                navigate(location?.state ? location.state : "/")
            })
            .catch(err => {
                console.log(err)
                return toast.error('password or email does not match')
            })
    }
    const handleGoogleLogin = () => {
        googleLogin()
            .then(() => {
                toast.success('logged in ')
                navigate(location?.state ? location.state : '/')
            })
            .catch(err => {
                console.log(err)
                return toast.error(err.message)
            })

    }
    const handleGitLogin = () => {
        gitLogin()
            .then(() => {
                toast.success('logged in ')
                navigate(location?.state ? location.state : '/')
            })
            .catch(err => {
                console.log(err)
                return toast.error(err.message)
            })

    }
    return (
        <div>
            <div className="flex w-full flex-col justify-center min-h-[600px] items-center ">
                <div className="border w-4/5 lg:w-1/3 py-8 lg:py-16 rounded ">
                    <h1 className="text-3xl font-semibold px-8 text-red-900">Login to Continue</h1>
                    <form onSubmit={handleLogin} >
                        <div className="p-8 space-y-8 w-full text-black">

                            <div className="border-b-2 border-gray-700">
                                <input className=" rounded  w-full border-none outline-none py-2 px-4" placeholder="Email" type="email" name="email" id="email" />
                            </div>
                            <div className=" w-full border-b-2 relative border-gray-700">
                                <input className="rounded w-full border-none outline-none py-2 pl-4 pr-8"
                                    type={showpass ? 'text' : 'password'} placeholder="password" name="password" id="password" />
                                <span onClick={() => setShowPass(!showpass)}
                                    className="absolute right-4 bottom-2 text-lg"> {showpass ? <AiOutlineEye /> : <AiOutlineEyeInvisible />} </span>

                            </div>
                            <button type="submit" className="btn btn-accent btn-outline hover:bg-red-500 hover:text-white w-full">Login </button>
                        </div>
                        <p className="text-center">Dont have an account? <Link className="text-rose-500 font-semibold" to={'/register'}>Register here </Link></p>
                    </form>
                </div>
                <div className="flex flex-col gap-4 mt-6 justify-center items-center">
                    <div className="flex items-center gap-1">
                        <div className="border bg-slate-500 h-0.5 w-32"></div> <p>OR</p> <div className="border h-0.5 w-32 bg-slate-500"></div>
                    </div>
                    <button className="btn btn-wide rounded-full btn-outline btn-accent font-medium text-lg" onClick={handleGoogleLogin}> <FcGoogle size={20} />Login  </button>
                    <button className="btn btn-wide rounded-full btn-outline btn-accent font-medium text-lg " onClick={handleGitLogin}> <AiFillGithub size={20} />Login  </button>
                </div>
            </div>

        </div>
    );
};

export default Login;