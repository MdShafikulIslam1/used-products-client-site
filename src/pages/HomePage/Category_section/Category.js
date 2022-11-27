import { useQuery } from '@tanstack/react-query';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import CategoryCard from './CategoryCard';

const Category = () => {
    const { data: category = [] } = useQuery({
        queryKey: ['categories'],
        queryFn: async () => {
            const res = await fetch('http://localhost:5000/categories');
            const data = await res.json();
            return data;
        }
    });

    return (
        <section className='my-6'>
            <div className='text-center'>
                <h1 className='text-4xl font-bold '>Select Your Best Choice</h1>
                <p className='text-3xl font-semibold'>Choice your product from the category{category.length}</p>
            </div>
            <div className='grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                {
                    category.map(categoryData => <CategoryCard
                        key={categoryData.category_id}
                        data={categoryData}
                    ></CategoryCard>)
                }
            </div>

        </section>
    );
};

export default Category;