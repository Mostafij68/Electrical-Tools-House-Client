import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../firebase.init';

const ManageOrders = () => {
    const [user, loading, error] = useAuthState(auth);
    const [myOrders, setMyOrders] = useState([]);
    const [deleteId, setDeleteId] = useState('');

    useEffect(() => {
        const url = `http://localhost:5000/order`;
        fetch(url)
            .then(res => res.json())
            .then(data => setMyOrders(data));
    }, [myOrders]);

    return (
        <section className='px-5'>
            <h2 className='mb-4 text-center text-xl font-semibold text-accent'>My Orders</h2>
            <div class="overflow-x-auto">
                <table class="table w-full">
                    <thead>
                        <tr className='text-secondary'>
                            <th>Buyer Name</th>
                            <th>Buyer Email</th>
                            <th>Product</th>
                            <th>Total Quantity</th>
                            <th>Total price</th>
                            <th>Deliver Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            myOrders.map((myOrder, index) =>
                                <tr key={myOrder._id} class="hover border-b">
                                    <td>{myOrder.userName}</td>
                                    <td>{myOrder.email}</td>
                                    <td>{myOrder.productName}</td>
                                    <td>{myOrder.orderQuantity}</td>
                                    <td>{myOrder.totalPrice}</td>
                                    <td>Proccessing</td>
                                </tr>
                            )
                        }
                    </tbody>
                </table>
            </div>
            
        </section>
    );
};

export default ManageOrders;