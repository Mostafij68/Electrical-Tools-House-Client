import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import auth from '../../firebase.init';
import { useAuthState } from 'react-firebase-hooks/auth';
import Spinner from '../../shared/Spinner';

const RequireAuth = ({ children }) => {
    const [user, loading] = useAuthState(auth);
    const location = useLocation();

    if (loading) {
        return <div className='h-screen w-full flex items-center justify-center'>
            <Spinner></Spinner>
        </div>
    };

    if (!user) {
        return <Navigate to="/login" state={{ from: location }} replace />
    };

    return children;
};

export default RequireAuth;