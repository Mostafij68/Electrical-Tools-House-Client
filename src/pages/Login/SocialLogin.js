import React from 'react';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import Spinner from '../../shared/Spinner';

const SocialLogin = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const navigate = useNavigate();
    
    if(user){
        navigate('/')
    };

    return (
        <div className='text-center'>
            <div class="divider">OR</div>
            {
                error ? <p className='text-base text-red-500 pb-2'>{error.message}</p> : ''
            }
            <button onClick={() => signInWithGoogle()} className='btn btn-primary mb-5'>{
                loading ? <Spinner></Spinner> : 'Continue With Google'
            }
            </button>
        </div>
    );
};

export default SocialLogin;