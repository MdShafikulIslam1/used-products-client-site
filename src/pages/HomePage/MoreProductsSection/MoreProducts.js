import React from 'react';
import { useQuery } from '@tanstack/react-query';
import MoreProductsCategoryCard from './MoreProductsCategoryCard';

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
            <div className='grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                {
                    addProductsData.map(data => <MoreProductsCategoryCard
                        key={data._id}
                        data={data}
                    ></MoreProductsCategoryCard>)
                }
            </div>
        </div>
    );
};

export default MoreProducts;