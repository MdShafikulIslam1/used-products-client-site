import { useEffect, useState } from 'react';

const useAdmin = (email) => {
    const [isAdmin, setIsAdmin] = useState(false);
    const [isAdminLoading, setIsAdminLoading] = useState(true)

    useEffect(() => {
        fetch(`https://used-products-resale-server-site.vercel.app/allUsers/admin?email=${email}`)
            .then(res => res.json())
            .then(data => {
                setIsAdmin(data.isAdmin)
                setIsAdminLoading(false);
            })
    }, [email])


    return [isAdmin, isAdminLoading]

};

export default useAdmin;