import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import Footer from '../../shared/Footer';

const Dashboard = () => {
    return (
        <>
            <section className='lg:w-full lg:mx-0 w-11/12 mx-auto'>
                <div class="drawer drawer-mobile">
                    <input id="my-drawer-2" type="checkbox" class="drawer-toggle" />
                    <div class="drawer-content">
                        {/* <!-- Page content here --> */}
                        <label title='Open drawer' for="my-drawer-2" className='cursor-pointer absolute text-2xl left-2 h-screen flex items-center lg:hidden'>
                            <i class="fa-solid fa-circle-chevron-right"></i>
                        </label>
                        <h1 className='text-3xl font-medium text-center my-3 text-secondary'>Dashboard</h1>
                        <Outlet />

                    </div>
                    <div class="drawer-side">
                        <label for="my-drawer-2" class="drawer-overlay"></label>
                        <ul class="menu p-4 bg-gray-200 overflow-y-auto w-80 bg-base-100 text-base-content">
                            {/* <!-- Sidebar content here --> */}
                            <li><Link to='/dashboard'>My Orders</Link></li>
                            <li><Link to='/dashboard/myprofile'>My Profile</Link></li>
                            <li><Link to='/dashboard/addReview'>Add a Review</Link></li>
                        </ul>

                    </div>
                </div>
            </section>
            <Footer></Footer>
        </>
    );
};

export default Dashboard;