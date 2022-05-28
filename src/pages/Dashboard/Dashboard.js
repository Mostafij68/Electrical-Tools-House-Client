import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, Outlet } from 'react-router-dom';
import auth from '../../firebase.init';
import useGetUser from '../../hooks/useGetUser';
import Footer from '../../shared/Footer';

const Dashboard = () => {
    const [user, loading] = useAuthState(auth);
    const [getUser, setGetUser] = useGetUser(user);
    const sideMenu = <>
        <li><Link to='/dashboard'>My Profile</Link></li>
        {
            getUser[0]?.admin === 'true' ? 
            <>
                <li><Link to='/dashboard/manageOrders'>Manage All Orders</Link></li>
                <li><Link to='/dashboard/addProduct'>Add A Product</Link></li>
                <li><Link to='/dashboard/makeAdmin'>Make Admin</Link></li>
            </> 
            :
            <>
                <li><Link to='/dashboard/addReview'>Add a Review</Link></li>
                <li><Link to='/dashboard/myOrders'>My Orders</Link></li>
            </>
        }
    </>;
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
                            {sideMenu}
                        </ul>

                    </div>
                </div>
            </section>
            <Footer></Footer>
        </>
    );
};

export default Dashboard;