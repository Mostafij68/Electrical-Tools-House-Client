import React from 'react';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const SocialLogin = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    return (
        <div className='text-center'>
            <div class="divider">OR</div>
            <button onClick={() => signInWithGoogle()} className='btn btn-primary mb-5'>Continue With Google</button>
        </div>
    );
};

export default SocialLogin;