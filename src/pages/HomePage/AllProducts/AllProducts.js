import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import BookingModal from '../Category_section/BookingModal/BookingModal';
import AllProductsCard from './AllProductsCard';

const AllProducts = () => {
    const [bookingsData, setBookingsData] = useState({});
    const products = useLoaderData();
    return (
        <div>
            <h1>This is All Products section</h1>
            <div className='grid gap-3 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                {
                    products.map(product => <AllProductsCard
                        key={product._id}
                        product={product}
                        setBookingsData={setBookingsData}
                    ></AllProductsCard>)
                }
            </div>
            <BookingModal
                bookingsData={bookingsData}
                setBookingsData={setBookingsData}
            ></BookingModal>
        </div>
    );
};

export default AllProducts;