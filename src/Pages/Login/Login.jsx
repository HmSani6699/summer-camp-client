import { FaEye, FaEyeSlash,FaGoogle } from "react-icons/fa";
import { Link, useLocation, useNavigate } from "react-router-dom";
import loginImg from '../../assets/login.png';
import useAuth from "../../Hooks/useAuth";
import { useForm } from "react-hook-form";
import { Helmet } from "react-helmet";
import { useState } from "react";
import Swal from "sweetalert2";
import './Login.css';

const Login = () => {
    const [hide, setHide] = useState(true);

    const { logInUser, googleLogin } = useAuth();
    const { register, reset, handleSubmit, formState: { errors } } = useForm();
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || "/";


    const onSubmit = data => {
        const { email, password } = data;
        // Creat user
        logInUser(email, password)
            .then(result => {
                const user = result.user;
                // console.log(user);
                Swal.fire({
                    icon: 'success',
                    title: 'Log in Success full  !!',
                })
                navigate(from, { replace: true });
            })
            .catch(error => {
                console.log(error)
                Swal.fire({
                    icon: 'error',
                    title: `{${error}}`,
                })
            })
        reset()
    };

    
    // Google log in 
    const handleGoogleLogin = () => {
        googleLogin()
            .then((result) => {
                const user = result.user;
                // console.log(user);
                const loggedUser = { name: user?.displayName, email: user?.email }
                fetch(`https://assignment-12-server-hmsani6699.vercel.app/users`, {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(loggedUser)
                })
                    .then(res => res.json())
                    .then(() => {
                        navigate(from, { replace: true });
                    })
                    navigate(from, { replace: true });
            })
            .catch(error => console.log(error))

    }
  

    return (
        <div className="hero pt-24">
            <Helmet><title>School summer camp | Login</title></Helmet>
            <div className=" loginBox border-2 my-10 ">
                <div className="hero-content  flex-col lg:flex-row w-full">
                    <div className="text-center w-1/2 ">
                        <img className="lg:w-[700px] lg:h-[400px]" src={loginImg} alt="" />
                    </div>
                    <div className="card w-1/2 flex-shrink-0   h-full">
                        <h2 className=' text-3xl font-bold text-center '>Login</h2>
                        <div className="p-8 ">
                            <form onSubmit={handleSubmit(onSubmit)}>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Email</span>
                                    </label>
                                    <input type="text" placeholder="email" {...register("email", { required: true })} name='email' className="input input-bordered" />
                                    {errors.email && <span className="text-red-600 mt-1 ml-3">Email field is required !</span>}
                                </div>
                                <div className="form-control relative">
                                    <label className="label">
                                        <span className="label-text">Password</span>
                                    </label>
                                    <input type={hide?'password':'text'} placeholder="password" {...register("password", {
                                        required: true,
                                        // pattern: /(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{6,}/
                                    })} name='password' className="input input-bordered" />
                                    {errors.password?.type === 'required' && <span className="text-red-600 mt-1 ml-3">Password field is required !</span>}

                                    {/* TODO: password  */}
                                    {/* {errors.password?.type === 'pattern' && <p className="text-red-600 mt-1 ml-3">Password must have one Upper Catch and one Lower catch and one number and one Special character and Minimum six in length !</p>} */}
                                    <label className="label">
                                        <a href="#" className="label-text-alt link link-hover">Forget password?</a>
                                    </label>
                                    <div onClick={()=>setHide(!hide)} className="text-gray-500 text-2xl absolute right-0 top-12 mr-5">
                                        {hide?<FaEyeSlash></FaEyeSlash> :<FaEye></FaEye>
                                        }
                                        
                                    </div>
                                </div>
                            
                               
                                <div className="form-control mt-6">
                                    <input disabled={false} type="submit" className=" btn bg-[#fbbc24e3] mr-5" value="Sign in" />
                                </div>
                            </form>
                            <p className='text-center mt-6  text-amber-500'>New here?  <Link className='font-semibold' to='/register'>Create a New Account</Link></p>
                            <div className="divider">Or sign in with</div>
                            <div className='flex items-center justify-center gap-5 mt-6 '>
                                <button onClick={handleGoogleLogin} className="btn btn-circle btn-outline"><FaGoogle></FaGoogle></button>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;