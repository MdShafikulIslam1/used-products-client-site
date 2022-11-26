import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import useAdmin from '../../hooks/useAdmin';
import Loaing from '../../SharedPage/Loaing/Loaing';

const UseAdminRoute = ({ children }) => {
    const { user, isLoading } = useContext(AuthContext);
    const [isAdmin, isAdminLoading] = useAdmin(user?.email);
    const location = useLocation();

    if (isLoading || isAdminLoading) {
        return <Loaing></Loaing>
    }
    if (user?.email && isAdmin) {
        return children;
    }

    return <Navigate to='/login' state={{ from: location }} replace></Navigate>
};

export default UseAdminRoute;