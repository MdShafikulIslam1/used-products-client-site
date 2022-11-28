import React from 'react';
import { useQuery } from '@tanstack/react-query';

const MoreProducts = () => {
    const { data: addProductsData = [] } = useQuery({
        queryKey: ['addProductsData'],
        queryFn: async () => {
            const res = await fetch('http://localhost:5000/addProductsData');
            const data = await res.json();
            return data;
        }
    })
    return (
        <div>
            <h1 className='text-4xl font-bold text-center text-green-400'>More Products</h1>
            <h1>  {addProductsData.length}</h1>
        </div>
    );
};

export default MoreProducts;