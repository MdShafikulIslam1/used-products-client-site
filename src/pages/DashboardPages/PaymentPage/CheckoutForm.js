import React, { useState, useEffect } from 'react';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';

const CheckoutForm = ({ order }) => {
    const [cardError, setCardError] = useState('');
    const [success, setSuccess] = useState('');
    const [transactionId, setTransactionId] = useState('');
    const [processing, setProcessing] = useState(false);
    const stripe = useStripe();
    const elements = useElements();
    const [clientSecret, setClientSecret] = useState("");
    const { price, buyer_name, email, _id } = order;
    useEffect(() => {
        // Create PaymentIntent as soon as the page loads
        fetch("http://localhost:5000/create-payment-intent", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ price }),
        })
            .then((res) => res.json())
            .then((data) => setClientSecret(data.clientSecret));
    }, [price]);


    const handleSubmit = async (event) => {
        event.preventDefault();
        if (!stripe || !elements) {
            return;
        }
        const card = elements.getElement(CardElement);
        if (card == null) {
            return;
        }

        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card,
        });
        if (error) {

            setCardError(error.message);
        }
        else {
            setCardError('')
        }
        setSuccess('')
        setProcessing(true)
        const { paymentIntent, error: confirmError } = await stripe.confirmCardPayment(
            clientSecret,
            {
                payment_method: {
                    card: card,
                    billing_details: {
                        name: buyer_name,
                        email
                    },
                },
            },
        );
        if (confirmError) {
            return setCardError(confirmError.message)
        }

        if (paymentIntent.status === 'succeeded') {
            const payment = {
                price,
                email,
                transactionId: paymentIntent.id,
                orderId: _id,

            }

            fetch('http://localhost:5000/payments', {
                method: 'POST',
                headers: { 'content-type': 'application/json' },
                body: JSON.stringify(payment)
            })
                .then(res => res.json())
                .then(data => {
                    if (data.insertedId) {
                        setSuccess('Congrats! your payment completed');
                        setTransactionId(paymentIntent.id);
                        setProcessing(false);
                    }
                })
        }
    };


    return (
        <form onSubmit={handleSubmit}>
            <CardElement
                options={{
                    style: {
                        base: {
                            fontSize: '16px',
                            color: '#424770',
                            '::placeholder': {
                                color: '#aab7c4',
                            },
                        },
                        invalid: {
                            color: '#9e2146',
                        },
                    },
                }}
            />
            <button
                className='btn btn-info mt-6'
                type="submit"
                disabled={!stripe || !clientSecret || processing}>
                Pay
            </button>
            <p>{cardError}</p>

            {
                success && <div>
                    <p>{success}</p>
                    <p>Your transaction Id: <span className='text-green-600 font-bold'>{transactionId}</span></p>
                </div>
            }
        </form>
    );
};

export default CheckoutForm;