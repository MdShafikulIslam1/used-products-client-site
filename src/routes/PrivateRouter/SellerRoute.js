import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import useSeller from '../../hooks/useSeller';
import Loaing from '../../SharedPage/Loaing/Loaing';

const SellerRoute = ({ children }) => {
    const { user, isLoading } = useContext(AuthContext);
    const [isAdmin, isAdminLoading] = useSeller(user?.email);
    const location = useLocation();

    if (isLoading || isAdminLoading) {
        return <Loaing></Loaing>
    }
    if (user?.email && isAdmin) {
        return children;
    }

    return <Navigate to='/login' state={{ from: location }} replace></Navigate>
};

export default SellerRoute;