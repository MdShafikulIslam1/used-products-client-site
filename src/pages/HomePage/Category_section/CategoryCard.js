import React from 'react';
import { Link } from 'react-router-dom';

const CategoryCard = ({ data }) => {
    return (
        <div className=''>
            <Link to={`/categories/${data.category_id}`}>
                <div className='text-5xl text-center text-lime-600 bg-cyan-300 p-20 rounded my-3'>
                    {data.category_name}
                </div>
            </Link>
        </div>
    );
};

export default CategoryCard;