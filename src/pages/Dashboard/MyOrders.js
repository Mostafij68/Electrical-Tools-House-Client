import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const MyOrders = () => {
    const [user, loading, error] = useAuthState(auth);
    const [myOrders, setMyOrders] = useState([]);
    // console.log(myOrder)
    useEffect(() => {
        const email = user?.email;
        const url = `http://localhost:5000/order?email=${email}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setMyOrders(data));
    }, []);

    return (
        <section className='px-5'>
            <h2 className='mb-4 text-xl font-semibold text-accent'>My Orders</h2>
            <div class="overflow-x-auto">
                <table class="table w-full">
                    <thead>
                        <tr className='text-secondary'>
                            <th></th>
                            <th>Name</th>
                            <th>Total Quantity</th>
                            <th>Total price</th>
                            <th>Payment Option</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            myOrders.map((myOrder, index) =>
                            <tr key={myOrder._id} class="hover border-b">
                                <th className='border-r'>{index + 1}</th>
                                <td>{myOrder.productName}</td>
                                <td>{myOrder.orderQuantity}</td>
                                <td>${myOrder.totalPrice}</td>
                                <td>
                                    <button className='btn btn-primary btn-sm px-5 mr-2'>Pay</button>
                                    <button className='btn btn-accent btn-sm '>Cancel</button>
                                </td>
                            </tr>
                            )
                        }
                    </tbody>
                </table>
            </div>
        </section>
    );
};

export default MyOrders;