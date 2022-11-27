import React, { useContext } from 'react';
import { AuthContext } from '../../../../contexts/AuthProvider/AuthProvider';
import { toast } from 'react-hot-toast';

const BookingModal = ({ bookingsData, setBookingsData }) => {
    const { user } = useContext(AuthContext);
    const { title, original_price, resale_price, img } = bookingsData;
    const handleBookingsubmit = (event) => {
        event.preventDefault();

        const form = event.target;
        const phone = form.phone.value;
        const meetingLocation = form.meetingLocation.value;
        const booking = {
            buyer_name: user.displayName,
            product_name: title,
            email: user.email,
            phone,
            meetingLocation,
            price: resale_price,
            img,
        };
        fetch('http://localhost:5000/bookings', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(booking)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.acknowledged) {
                    toast.success("Your booking is confirm");

                }
            })
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
                            <input type="text" disabled
                                defaultValue={
                                    user?.displayName ? user?.displayName :
                                        "user name not found"
                                } className="input input-bordered input-success w-full " />
                            <input type="text" disabled defaultValue={user?.email} className="input input-bordered input-success w-full " />
                            <input type="text" disabled defaultValue={original_price} className="input input-bordered input-success w-full " />
                            <input name='phone' type="number" placeholder="Your Valid Phone Number" className="input input-bordered input-success w-full " required />
                            <input name='meetingLocation' type="text" placeholder="Meeting location" className="input input-bordered input-success w-full " required />
                        </div>
                        <input type="submit" value="Submit" className="btn btn-outline btn-primary w-full my-3 " />
                    </form>

                </div>
            </div>
        </div>
    );
};

export default BookingModal;