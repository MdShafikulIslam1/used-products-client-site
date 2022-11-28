import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';

const AddProduct = () => {
    const { user } = useContext(AuthContext);
    const { register, handleSubmit, formState: { errors } } = useForm();
    const options = ['SONY', 'LENOVO', 'DELL', 'ASUS', 'HP', 'APPLE', 'TOSIBA'];
    const imgHostKey = process.env.REACT_APP_img_key;

    const handleAddProduct = (data) => {
        const img = data.image[0];
        const formData = new FormData();
        formData.append('image', img);
        fetch(`https://api.imgbb.com/1/upload?key=${imgHostKey}`, {
            method: 'POST',
            body: formData,
        })
            .then(res => res.json())
            .then(imgData => {
                if (imgData.success) {
                    const addProductData = {
                        category_name: data.category_name,
                        img: imgData.data.url,
                        title: data.title,
                        location: data.location,
                        resale_price: data.resale_price,
                        original_price: data.original_price,
                        used_time: data.used_time,
                        seller_name: user.displayName,

                    };
                    fetch('http://localhost:5000/addProductsData', {
                        method: 'POST',
                        headers: {
                            'content-type': 'application/json'
                        },
                        body: JSON.stringify(addProductData)
                    })
                        .then(res => res.json())
                        .then(result => {
                            console.log(result);
                            if (result.acknowledged) {
                                toast.success("Successfully Added Products")
                            }
                        })

                }
            })
    }
    return (
        <div className='w-1/2 '>
            <h1>This is Add Product page</h1>
            <form onSubmit={handleSubmit(handleAddProduct)}>
                <div className='space-y-4 text-orange-900'>

                    <input {...register("title", {
                        required: "Product Name Required"
                    })} className='input input-bordered w-full input-success capitalize' type="text" placeholder='Product Name' />

                    <input {...register("original_price", {
                        required: "Original Price Required"
                    })}
                        className='input input-bordered w-full'
                        type="number"
                        placeholder='Enter Product Original Price' />
                    <input {...register("resale_price", {
                        required: "Resale Price Required"
                    })}
                        className='input input-bordered w-full'
                        type="number"
                        placeholder='Enter Product Resale Price' />

                    <input {...register("phone", {
                        required: "Phone Number Required"
                    })}
                        className='input input-bordered w-full'
                        type="number"
                        placeholder='Enter valid phone number' />

                    <input {...register("location", {
                        required: "Location Required"
                    })}
                        className='input input-bordered w-full'
                        type="text"
                        placeholder='Enter Your Location' />

                    <input {...register("used_time", {
                        required: "Used Products time Required"
                    })}
                        className='input input-bordered w-full'
                        type="number"
                        placeholder='Years of used Products' />


                    <select {...register('category_name', {
                        required: "category name required"
                    })} className="select select-ghost w-full">
                        {
                            options.map((option, i) => <option key={i}> {option}</option>)
                        }

                    </select>

                    <input {...register("image", {
                        required: "Product image Required"
                    })}
                        className='input input-bordered w-full'
                        type="file"
                        placeholder='Upload your image' />


                </div>
                <input type="submit" value="Add Product" className='btn btn-primary w-full mt-4' />
            </form>
        </div>
    );
};

export default AddProduct;