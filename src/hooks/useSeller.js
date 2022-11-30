import { useEffect, useState } from 'react'

const useSeller = (email) => {
    const [isSeller, setIsSeller] = useState(false);
    const [isSellerLoading, setIsSellerLoading] = useState(true);

    useEffect(() => {
        fetch(`https://used-products-resale-server-site.vercel.app/allUsers/seller?email=${email}`)
            .then(res => res.json())
            .then(data => {
                setIsSeller(data.isSeller);
                setIsSellerLoading(false)
            })
    }, [email]);
    return [isSeller, isSellerLoading]
};

export default useSeller;