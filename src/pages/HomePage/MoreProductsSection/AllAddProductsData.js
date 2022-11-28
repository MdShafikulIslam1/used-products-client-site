import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import AllProductsCard from '../AllProducts/AllProductsCard';
import BookingModal from '../Category_section/BookingModal/BookingModal';

const AllAddProductsData = () => {
    const [bookingsData, setBookingsData] = useState({});
    const products = useLoaderData();
    console.log(products);
    return (
        <div>
            <h1>All AddProducts Data</h1>
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

export default AllAddProductsData;