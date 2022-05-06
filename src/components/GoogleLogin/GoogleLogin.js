import React from 'react';
import { Button } from 'react-bootstrap';
import { useLocation, useNavigate } from 'react-router-dom';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import googleIcon from '../../images/google-logo.png';
import Loading from '../Loading/Loading';

const GoogleLogin = () => {
    const navigate = useNavigate();
    const [signInWithGoogle, googleUser, googleLoading, googleError] = useSignInWithGoogle(auth);
    const location = useLocation();

    let from = location.state?.from?.pathname || "/";

    if (googleLoading) {
        return <Loading></Loading>
    }
    // after signup redirect to login
    if (googleUser) {
        navigate(from, { replace: true });
    }
    return (
        <div>
            <div className='mt-3 d-flex justify-content-center'>
                <div className='w-25 px-4'>
                    <hr />
                </div>
                <p>or</p>
                <div className='w-25 px-4'>
                    <hr />
                </div>
            </div>

            <Button onClick={() => signInWithGoogle()} className='w-25 d-block mx-auto border' variant="light" type="submit">
                <img src={googleIcon} alt="" />
                <span className='ms-2'>Continue with Google</span>
            </Button>
            <p className='text-danger text-center mt-3'>
                {googleError && googleError.message}
            </p>
        </div>
    );
};

export default GoogleLogin;