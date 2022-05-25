import React, { useRef } from 'react';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import Spinner from '../../shared/Spinner';
import SocialLogin from './SocialLogin';

const Login = () => {
    const emailRef = useRef('');
    const passRef = useRef('');
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);
    const navigate = useNavigate();


    if (user) {
        navigate('/')
    };

    const handleLogin = async event => {
        event.preventDefault();
        const email = emailRef.current.value;
        const password = passRef.current.value;
        console.log(email, password)
        await signInWithEmailAndPassword(email, password)
    };
    return (
        <section className='flex justify-center bg-slate-200 items-center h-screen'>
            <div className="w-11/12 mx-auto flex justify-center">
                <div class="card lg:w-96 md:w-96 sm:w-96 w-full shadow-xl glass">
                    <div class="card-body text-center">
                        <h2 class="text-3xl text-secondary text-center mb-2">Login</h2>
                        <form onSubmit={handleLogin}>
                            <input ref={emailRef} type="email" placeholder="Email Address" class="input input-bordered w-full mb-5" />
                            <input ref={passRef} type="password" placeholder="Password" class="input input-bordered w-full mb-5" />
                            {
                                error ? <p className='text-base text-red-500 pb-2'>{error.message}</p> : ''
                            }
                            {
                                loading && <p className='pb-2'><Spinner></Spinner></p>
                            }
                            <input className='btn btn-secondary text-white' type="submit" value="Log in" />
                        </form>
                    </div>
                    <SocialLogin></SocialLogin>
                </div>
            </div>
        </section>
    );
};

export default Login;