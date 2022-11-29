import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';

const MyOrders = () => {
    const [myOrders, setMyOrders] = useState([]);
    const { user } = useContext(AuthContext);

    useEffect(() => {
        fetch(`http://localhost:5000/bookings/myOrders?email=${user?.email}`)
            .then(res => res.json())
            .then(data => {
                setMyOrders(data)
            })
    }, [user?.email]);


    return (
        <div className='my-5'>
            <div className="overflow-x-auto">
                <table className="table w-full">

                    <thead>
                        <tr>
                            <th></th>
                            <th>photo</th>
                            <th>Name</th>
                            <th>Contact</th>
                            <th>Price(BDT)</th>
                            <th>Purchase</th>
                        </tr>
                    </thead>
                    <tbody>

                        {
                            myOrders.map((order, i) => <tr key={order._id}>
                                <th>{i + 1}</th>
                                <td>
                                    <div className="avatar">
                                        <div className="w-16 rounded-full">
                                            <img src={order.img} alt='loading.... ' />
                                        </div>
                                    </div>
                                </td>
                                <td>{order.product_name}</td>
                                <td>{order.phone}</td>
                                <td>{order.price} tk</td>
                                <td>
                                    {
                                        !order.paid && <Link to={`/dashboard/payment/${order._id}`}>
                                            <button className=" btn btn-md btn-primay">Pay</button>
                                        </Link>
                                    }
                                    {
                                        order.paid && <p className='text-cyan-600'>Paid</p>
                                    }
                                </td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyOrders;