import React from 'react';
import { Link } from 'react-router-dom';

const MoreProductsCategoryCard = ({ data }) => {
    return (
        <Link to={`/addProductsData/${data.category_name}`}>
            <div className='text-5xl text-center text-lime-600 bg-cyan-300 p-20 rounded my-3'>
                {data.category_name}
            </div>
        </Link>
    );
};

export default MoreProductsCategoryCard;