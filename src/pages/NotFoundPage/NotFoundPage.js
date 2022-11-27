import React from 'react';
import { Link } from 'react-router-dom';
import notFoundImg from '../../images/login/n.png'

const NotFoundPage = () => {
    return (
        <div className='my-3'>
            <h1 className='text-2xl font-bold text-center text-red-900 p-5'>This is NotFound Page (404)</h1>
            <figure className='w-[600px]  mx-auto'>
                <div>
                    <img className='rounded-xl' src={notFoundImg} alt="" />
                </div>
                <Link to='/'><button className='btn btn-primary w-full mt-5'>Go to Homepage.</button></Link>
            </figure>
        </div>
    );
};

export default NotFoundPage;