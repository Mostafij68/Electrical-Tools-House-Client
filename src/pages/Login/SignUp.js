import React, { useRef } from 'react';
import { useCreateUserWithEmailAndPassword, useUpdateProfile } from 'react-firebase-hooks/auth';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';
import Spinner from '../../shared/Spinner';
import SocialLogin from './SocialLogin';

const SignUp = () => {
    const nameRef = useRef('');
    const emailRef = useRef('');
    const passRef = useRef('');
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth);
    const [updateProfile, updating, upError] = useUpdateProfile(auth);

    if(user){
        console.log(user)
    };


    const handleSignUp = async event => {
        event.preventDefault();
        const name = nameRef.current.value;
        const email = emailRef.current.value;
        const password = passRef.current.value;
        await createUserWithEmailAndPassword(email, password);
        await updateProfile({displayName: name});
        event.target.reset();
        toast.success('Sign-up Successfully')
    };
    return (
        <section className='flex justify-center bg-slate-200 items-center h-screen'>
            <div class="card w-96 shadow-xl glass">
                <div class="card-body text-center">
                    <h2 class="text-3xl text-secondary text-center mb-2">Sign-up</h2>
                    <form onSubmit={handleSignUp}>
                        <input ref={nameRef} type="text" placeholder="Your Name" class="input input-bordered w-full mb-5" />
                        <input ref={emailRef} type="email" placeholder="Email Address" class="input input-bordered w-full mb-5" />
                        <input ref={passRef} type="password" placeholder="Password" class="input input-bordered w-full mb-5" />
                        {
                            error ? <p className='text-base text-red-500'>{error.message}</p> : ''
                        }
                        {
                            loading && <p className='pb-2'><Spinner></Spinner></p>
                        }
                        <input className='btn btn-secondary text-white' type="submit" value="Sign up" />
                    </form>
                </div>
                <SocialLogin></SocialLogin>
            </div>
        </section>
    );
};

export default SignUp;