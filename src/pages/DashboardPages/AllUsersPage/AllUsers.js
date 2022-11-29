import { useQuery } from '@tanstack/react-query';
import React, { useState } from 'react';
import toast from 'react-hot-toast';
import Loaing from '../../../SharedPage/Loaing/Loaing';

const AllUsers = () => {
    const [verified, setVerified] = useState(false);
    const { data: allUsers = [], refetch, isLoading } = useQuery({
        queryKey: ['allUsers'],
        queryFn: async () => {
            const res = await fetch('http://localhost:5000/allUsers');
            const data = res.json();
            return data;
        }
    });
    if (isLoading) {
        return <Loaing></Loaing>
    }
    const handleMakeAdmin = id => {
        const accept = window.confirm("Are you sure to make Admin?")
        if (accept) {
            fetch(`http://localhost:5000/allUsers/admin/${id}`, {
                method: 'PUT'
            })
                .then(res => res.json())
                .then(data => {

                    if (data.modifiedCount > 0) {
                        toast.success('Make admin successful.')

                        refetch()
                    }
                })
        }

    };

    const handleDelteUser = (id) => {
        const accept = window.confirm('Are You sure to Delete?');

        if (accept) {

            fetch(`http://localhost:5000/users/${id}`, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        toast.success("User is Delete successfully");
                        refetch()
                    }
                })
        }

    }

    //make seller user to verified
    const handleVerifiedSellerUser = (id) => {
        fetch(`http://localhost:5000/allUsers/seller/${id}`, {
            method: 'PUT'
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    toast.success("Seller is Verified SuccessFully");
                    setVerified(true)
                }
            })
    }


    return (
        <div>
            <h1 className='text-2xl font-bold text-center text-cyan-500 p-3'>AllUsers <span>(included buyers,sellers,admin)</span></h1>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Category</th>
                            <th>Verification <span>(seller)</span> </th>
                            <th>Make Admin</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>

                        {
                            allUsers.map((user, index) => <tr key={user._id}>
                                <th>{index + 1}</th>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                                <td>{user?.role}</td>
                                <td>
                                    {
                                        verified && user?.verification && <p>{verified ? "verified" : "Unverified"}</p>
                                    }
                                    {
                                        !verified && user?.role === 'seller' && <button onClick={() => handleVerifiedSellerUser(user?._id)} className='btn btn-info '>Verfiy</button>
                                    }
                                </td>
                                <td>
                                    {
                                        user?.role !== 'admin' && <button onClick={() => handleMakeAdmin(user?._id)} className=' btn text-white btn-md  bg-green-800'>Make Admin</button>
                                    }
                                </td>
                                <td>
                                    <button onClick={() => handleDelteUser(user._id)} className='btn btn-primary'>X</button></td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllUsers;