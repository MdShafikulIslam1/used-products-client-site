import React, { useContext } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { AuthContext } from '../contexts/AuthProvider/AuthProvider';
import useAdmin from '../hooks/useAdmin';
import useSeller from '../hooks/useSeller';
import Navbar from '../SharedPage/Navbar/Navbar';

const DashboardLayout = () => {
    const { user } = useContext(AuthContext);
    const [isAdmin] = useAdmin(user?.email);
    const [isSeller] = useSeller(user?.email);
    return (
        <div>
            <Navbar></Navbar>
            <div className="drawer drawer-mobile">
                <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content flex flex-col ">

                    <Outlet></Outlet>
                    <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>

                </div>
                <div className="drawer-side">
                    <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-80 bg-base-100 text-base-content">


                        {
                            !isAdmin && !isSeller && <li> <Link to='/dashboard/myOrders'>My Orders</Link> </li>
                        }

                        {
                            isAdmin && <li> <Link to='/dashboard/allUsers'>All Users</Link> </li>
                        }
                        {
                            isSeller && <li> <Link to='/dashboard/addProduct'>Add Product</Link> </li>
                        }

                    </ul>

                </div>
            </div>
        </div>
    );
};

export default DashboardLayout;