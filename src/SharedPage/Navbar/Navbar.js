import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import { toast } from 'react-hot-toast';
import logo from '../../images/banner/logo22222.png';

const Navbar = () => {
    const { user, logoutUser } = useContext(AuthContext);



    const handleLogout = () => {
        logoutUser()
            .then(() => {
                toast.success("User logout successfully")
            })
            .catch(() => { })
    }

    const navbarItems = <>
        <li><Link to='/'>Home</Link></li>

        {
            user?.email ?
                <>
                    <li><Link onClick={handleLogout} >Log Out</Link></li>
                    <li><Link to='/dashboard'>Dashboard</Link></li>
                </>
                :
                <>
                    <li><Link to='/login'>Login</Link></li>
                    <li><Link to='/signup'>Sign up</Link></li>

                </>
        }
        <li><Link to='/blog'>Blog</Link></li>
    </>
    return (
        <div className="navbar bg-gray-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        {
                            navbarItems
                        }
                    </ul>
                </div>
                <div className='flex items-center'>

                    <img src={logo} alt="" className='w-1/5 rounded-full border ml-4 ' />
                    <Link to='/' className="btn btn-ghost normal-case text-xl">
                        AI IT Shop</Link>
                </div>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal p-0">
                    {
                        navbarItems
                    }
                </ul>
            </div>
            <div className="navbar-end">
                <p>{user && user?.email}</p>
            </div>
        </div>
    );
};

export default Navbar;