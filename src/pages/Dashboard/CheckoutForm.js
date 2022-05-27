import React, { useEffect, useState } from 'react';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';


const CheckoutForm = ({ data }) => {
    const stripe = useStripe();
    const elements = useElements();
    const [cardError, setCardError] = useState('');
    const [success, setSuccess] = useState('');
    const [transId, setTransId] = useState('');
    const [clientSecret, setClientSecret] = useState('');

    const {_id, totalPrice, userName, email } = data;

    console.log(clientSecret)

    useEffect(() => {
        if (totalPrice) {
            console.log(totalPrice)
            fetch('http://localhost:5000/create-payment-intent', {
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify({ totalPrice })
            })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data?.clientSecret) {
                    setClientSecret(data.clientSecret)
                }
            });
        }
    }, [totalPrice]);

    const handleSubmit = async (event) => {
        event.preventDefault();
        if (!stripe || !elements) {
            return;
        };

        const card = elements.getElement(CardElement);
        if (card == null) {
            return;
        }

        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card
        });

        setCardError(error?.message || '');
        setSuccess('');
        // confirmCardPayment
        const { paymentIntent, error: intentError } = await stripe.confirmCardPayment(
            clientSecret,
            {
                payment_method: {
                    card: card,
                    billing_details: {
                        name: userName,
                        email: email,
                    },
                },
            },
        );
        console.log(error)

        if (intentError) {
            setCardError(intentError?.message)
        }
        else {
            setCardError('');
            console.log(paymentIntent);
            setTransId(paymentIntent.id);
            setSuccess('Congrats! Your payment is completed.');

            const payment = {
                order: _id,
                transactionId: paymentIntent.id
            }
            fetch(`http://localhost:5000/order/${_id}`, {
                method: 'PATCH',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(payment)
            })
            .then(res=>res.json())
            .then(data => {
                console.log(data);
            })
        }
    };
    return (
        <>
            <form onSubmit={handleSubmit}>
                <p className='font-medium text-lg mb-8'>Amount: ${totalPrice}</p>
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
                <div className="block text-center mt-10">
                    <button className='btn btn-secondary btn-sm px-10' type="submit" disabled={!stripe || !clientSecret}>
                        Pay ${totalPrice}
                    </button>
                </div>
            </form>
            {
                cardError && <p className='text-red-500'>{cardError}</p>
            }
            {
                success && <div className='text-green-500'>
                    <p>{success}</p>
                    <p>Your transaction: <span className='text-orange-500'>{transId}</span></p>
                </div>
            }
        </>
    );
};

export default CheckoutForm;