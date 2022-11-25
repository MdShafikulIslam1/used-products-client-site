import React, { useContext } from 'react';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';

const AllProductsCard = ({ product, setBookingsData }) => {
    const { user } = useContext(AuthContext);
    const { img, title, resale_price, original_price } = product;
    return (
        <div className='my-6'>
            <div className="card card-compact w-96 shadow-lg">
                <figure><img className='w-full' src={img} alt="Laptop" /></figure>
                <div className="card-body">
                    <h1 className='text-3xl font-bold text-center'>{title}</h1>
                    <div className='flex'>
                        <p>Resale Price: BDT {resale_price}</p>
                        <p>Original Price: BDT {original_price}</p>
                    </div>
                    <label onClick={() => setBookingsData(product)} htmlFor="my-modal-3" className="btn">Book Now</label>
                </div>
            </div>
        </div>
    );
};

export default AllProductsCard;