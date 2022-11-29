import React from 'react';
import { Elements } from '@stripe/react-stripe-js';
import { useLoaderData } from 'react-router-dom';
import { loadStripe } from '@stripe/stripe-js'
import CheckoutForm from './CheckoutForm';


const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PK);

const Payment = () => {
    const order = useLoaderData();
    return (
        <div>
            <h1>Payment page...</h1>
            <div className='w-96'>
                <Elements stripe={stripePromise}>
                    <CheckoutForm
                        order={order}
                    ></CheckoutForm>
                </Elements>
            </div>
        </div>
    );
};

export default Payment;