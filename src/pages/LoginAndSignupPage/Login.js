import React, { useContext } from 'react';
import { useForm } from "react-hook-form";
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import { toast } from 'react-hot-toast';

const Login = () => {
    const { loginUser } = useContext(AuthContext);
    const { register, handleSubmit, formState: { errors } } = useForm();
    const navigate = useNavigate();


    const handleLogin = data => {
        loginUser(data.email, data.password)
            .then(result => {
                const user = result.user;
                toast.success("User Login Successfully");
                navigate('/')
            })
            .catch(err => {
                console.log(err);
                console.log(err.message);
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
                        <input type="submit" value="Login" className='btn btn-primary mt-6' />
                    </div>

                </form>
                <p className='p-3 text-center'>Are you new here? <Link className='text-purple-800' to='/signup'>Sign Up</Link> </p>
            </div>
        </div>

    );
};

export default Login;
