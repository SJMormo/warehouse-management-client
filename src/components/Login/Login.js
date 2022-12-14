import axios from 'axios';
import React, { useRef } from 'react';
import { Button, FloatingLabel, Form } from 'react-bootstrap';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import auth from '../../firebase.init';
import GoogleLogin from '../GoogleLogin/GoogleLogin';
import Loading from '../Loading/Loading';

const Login = () => {
    const navigate = useNavigate();
    const emailRef = useRef('');
    const passwordRef = useRef('');
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);
    const [sendPasswordResetEmail] = useSendPasswordResetEmail(auth);

    const location = useLocation();
    const from = location.state?.from?.pathname || "/";

    const handleLogin = async event => {
        event.preventDefault();
        const email = emailRef.current.value;
        const password = passwordRef.current.value;

        await signInWithEmailAndPassword(email, password);
        const { data } = await axios.post('https://warehouse-management-sjmormo.herokuapp.com/login', { email });
        console.log(data);
        localStorage.setItem('accessToken', data.accessToken);
        navigate(from, { replace: true });
    }

    const resetPassword = async () => {
        const email = emailRef.current.value;
        if (email) {
            await sendPasswordResetEmail(email);
            toast('Sent email');
        }
        else {
            toast('please enter your email address');
        }
    }

    if (loading) {
        return <Loading></Loading>
    }

    if (user) {
        // navigate(from, { replace: true });
    }

    return (
        <div>
            <Form onSubmit={handleLogin} className='w-50 mx-auto mt-3'>
                <FloatingLabel controlId="floatingInput" label="Email address" className="mb-3">
                    <Form.Control ref={emailRef} type="email" placeholder="Enter email" required />
                </FloatingLabel>
                <FloatingLabel controlId="floatingPassword" label="Password" className="mb-3">
                    <Form.Control ref={passwordRef} type="password" placeholder="Password" required />
                </FloatingLabel>

                <Button className='w-100' variant="dark" type="submit">
                    LOGIN
                </Button>
                <p className='mt-2 text-center'>
                    Don't Have an Account?
                </p>
                <Link className="btn btn-outline-dark w-100" to="/register">REGISTER NOW</Link>
            </Form>
            <p className='text-center'>
                Forgot Password?<Button onClick={resetPassword} variant="link">Reset Password</Button>
            </p>
            <p className='text-danger text-center mt-3'>
                {error && error.message}
            </p>
            <GoogleLogin></GoogleLogin>
        </div>
    );
};

export default Login;