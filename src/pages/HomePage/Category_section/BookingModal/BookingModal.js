import React, { useContext } from 'react';
import { AuthContext } from '../../../../contexts/AuthProvider/AuthProvider';

const BookingModal = ({ bookingsData }) => {
    const { user } = useContext(AuthContext);
    const { title, original_price, resale_price, } = bookingsData;
    const handleBookingsubmit = (event) => {
        event.preventDefault();
        const form = event.target;
        const phone = form.phone.value;
        const meetingLocation = form.meetingLocation.value;
        console.log(phone, meetingLocation);
    }
    return (
        <div>
            <input type="checkbox" id="my-modal-3" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor="my-modal-3" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="text-xl font-bold text-center p-3">{title}</h3>
                    <form onSubmit={handleBookingsubmit} >
                        <div className='space-y-2 grid grid-cols-1 lg:grid-cols-2 gap-4'>
                            <input type="text" disabled defaultValue={user?.displayName} className="input input-bordered input-success w-full " />
                            <input type="text" disabled defaultValue={user?.email} className="input input-bordered input-success w-full " />
                            <input type="text" disabled defaultValue={original_price} className="input input-bordered input-success w-full " />
                            <input type="text" disabled defaultValue={resale_price} className="input input-bordered input-success w-full " />
                            <input name='phone' type="number" placeholder="Your Valid Phone Number" className="input input-bordered input-success w-full " />
                            <input name='meetingLocation' type="text" placeholder="Meeting location" className="input input-bordered input-success w-full " />
                        </div>
                        <input type="submit" value="Submit" className="btn btn-outline btn-primary w-full my-3 " />
                    </form>

                </div>
            </div>
        </div>
    );
};

export default BookingModal;