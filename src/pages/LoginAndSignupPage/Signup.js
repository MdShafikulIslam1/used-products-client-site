import React, { useContext, useState } from 'react';
import { useForm } from "react-hook-form";
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import toast from 'react-hot-toast';

const Signup = () => {
    const [signupError, setSignupError] = useState('');
    const { register, handleSubmit, formState: { errors } } = useForm();
    const { createUser, updateUserName } = useContext(AuthContext);
    const navigate = useNavigate();


    const handleSignup = data => {
        console.log(data.name);
        const user = {
            displayName: data.name
        }
        createUser(data.email, data.password)
            .then(result => {
                toast.success("User create successfully");
                UpdateUser(user);

            })
            .catch(err => {
                setSignupError(err.message);
            })
    };
    const UpdateUser = (user) => {
        updateUserName(user)
            .then(() => {
                toast.success("user name is Updated")
                navigate('/')
            })
            .catch((err) => {
                console.log(err);
            })
    }

    return (
        <div className='my-6'>
            <div className="hero  ">
                <div className="card flex-shrink-0 w-full max-w-sm shadow-xl bg-sky-100 ">
                    <form onSubmit={handleSubmit(handleSignup)}>
                        <div className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input
                                    {...register("name",
                                        { required: 'Name is required' }

                                    )}
                                    type="text"
                                    className="input input-bordered" />
                                {errors.name && <p className='text-red-900'>{errors.name.message}</p>}

                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input {...register("email",
                                    { required: "Email is required" }
                                )}
                                    type="email"
                                    className="input input-bordered" />
                                {errors.email && <p className='text-red-900'>{errors.email.message}</p>}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input {...register("password",
                                    {
                                        required: 'Password is requird',
                                        minLength: { value: 6, message: "password must be at least 6 character" }
                                    }
                                )}
                                    type="password"
                                    className="input input-bordered" />
                                {errors.password && <p className='text-red-900'>{errors.password.message}</p>}

                            </div>
                            <input type="submit" value="Sign Up" className='btn btn-primary' />
                        </div>
                        <p className='text-red-800 text-center'>{signupError}</p>
                    </form>
                    <p className='p-3 text-center'>Already have an Account? <Link to='/login' className='text-purple-800'>Please Login</Link> </p>
                </div>
            </div>
        </div>
    );
};

export default Signup;
