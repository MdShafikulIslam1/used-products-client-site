import React, { useContext } from 'react';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';

const AllProductsCard = ({ product, setBookingsData }) => {
    const { user } = useContext(AuthContext);
    const { img, title, resale_price, original_price, location, posted_date, used_time, seller_name } = product;
    return (
        <div className='my-6'>
            <div className="card  w-96 shadow-lg h-full flex flex-col items-center justify-evenly">
                <img className='w-full' src={img} alt="Laptop" />
                <div className="card-body">
                    <h1 className='text-3xl font-bold text-center text-cyan-600'>{title}</h1>
                    <div className='flex bg-stone-500 p-2 rounded'>
                        <p className='text-yellow-200'>Resale Price: BDT {resale_price}</p>
                        <p className='text-white'>Original Price: BDT {original_price}</p>
                    </div>
                    <div className='font-medium p-2 rounded'>
                        <p className='text-green-900'>Location: <span> {location}</span></p>
                        <p className=''>Used-time: <span>{used_time}</span> years</p>
                    </div>
                    <div className='flex bg-stone-500 p-2 rounded'>
                        <p className='text-yellow-200'>Seller: <span> {seller_name}</span></p>
                        <p className='text-white'>Post: <span>{posted_date}</span> </p>
                    </div>
                    <label onClick={() => setBookingsData(product)} htmlFor="my-modal-3" className="btn">Book Now</label>
                </div>
            </div>
        </div>
    );
};

export default AllProductsCard;