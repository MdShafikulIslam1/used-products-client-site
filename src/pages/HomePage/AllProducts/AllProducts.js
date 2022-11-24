import React, { } from 'react';
import { useLoaderData } from 'react-router-dom';
import AllProductsCard from './AllProductsCard';

const AllProducts = () => {
    const products = useLoaderData();
    return (
        <div>
            <h1>This is All Products section</h1>
            <div className='grid gap-3 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                {
                    products.map(product => <AllProductsCard
                        key={product._id}
                        product={product}
                    ></AllProductsCard>)
                }
            </div>
        </div>
    );
};

export default AllProducts;