import React, { useContext, useState } from 'react';
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import { toast } from 'react-hot-toast';

const Login = () => {
    const [loginError, setLoginError] = useState('');
    const { loginUser, loginWithGoogle } = useContext(AuthContext);
    const { register, handleSubmit, formState: { errors } } = useForm();
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from.pathname || '/';


    const handleLogin = data => {
        loginUser(data.email, data.password)
            .then(result => {
                const user = result.user;
                toast.success("User Login Successfully");
                navigate(from, { replace: true })
            })
            .catch(err => {
                console.log(err);
                setLoginError(err.message);
            })

    }
    const handleLoginWithGoogle = () => {
        loginWithGoogle()
            .then(() => {

                toast.success("Login with google successfully")
            })
            .catch(() => {

            })
    }
    return (

        <div className="hero my-6">
            <div className="card flex-shrink-0 w-full max-w-sm shadow-xl bg-sky-100">
                <form onSubmit={handleSubmit(handleLogin)}>
                    <div className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input {...register("email", {
                                required: "Email is required"
                            })}
                                type="email"
                                className="input input-bordered" />
                            {errors.email && <p className='text-red-900'>{errors.email.message}</p>}
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input {...register("password", {
                                required: "password is required"
                            })}
                                type="password"
                                className="input input-bordered" />
                            {errors.email && <p className='text-red-900'>{errors.email.message}</p>}
                        </div>
                        <input type="submit" value="Login" className='btn btn-primary mt-2' />
                    </div>
                    <p className='text-red-800 p-3'>{loginError}</p>

                </form>
                <p className=' p-3 text-center'>Are you new here? <Link className='text-purple-800' to='/signup'>Sign Up</Link> </p>
                <div className="divider">OR</div>
                <button onClick={handleLoginWithGoogle} className='btn btn-outline btn-primary'>SignIn With Google</button>
            </div>
        </div>

    );
};

export default Login;
