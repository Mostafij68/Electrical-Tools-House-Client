import React from 'react';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useLocation, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import Spinner from '../../shared/Spinner';

const SocialLogin = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const navigate = useNavigate();
    const location = useLocation();
    let from = location.state?.from?.pathname || "/";
    
    if(user){
        const displayName = user?.user?.displayName;
        const email = user?.user?.email;
        const admin = 'false';
        const userInfo = {displayName, email, admin};
        fetch(`http://localhost:5000/user/${email}`,{
            method: 'PUT',
            headers: {
                'content-type' : 'application/json'
            },
            body: JSON.stringify(userInfo)
        })
        .then(res => res.json())
        .then(data => {console.log(data)});
        navigate(from, { replace: true });
    };

    return (
        <div className='text-center'>
            <div class="divider">OR</div>
            {
                error ? <p className='text-base text-red-500 pb-2'>{error.message}</p> : ''
            }
            <button onClick={() => signInWithGoogle()} className='btn btn-outline text-blue-600 mb-5'>{
                loading ? <Spinner></Spinner> : 'Continue With Google'
            }
            </button>
        </div>
    );
};

export default SocialLogin;