import React from 'react';
import notFoundImg from '../../images/login/n.png'

const NotFoundPage = () => {
    return (
        <div className='my-12'>
            <h1>This is NotFound Page (404)</h1>
            <figure>
                <img className='w-4/5 rounded-xl' src={notFoundImg} alt="" />
            </figure>
        </div>
    );
};

export default NotFoundPage;