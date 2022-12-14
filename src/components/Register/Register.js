import React, { useRef } from 'react';
import { Button, FloatingLabel, Form } from 'react-bootstrap';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import GoogleLogin from '../GoogleLogin/GoogleLogin';
import Loading from '../Loading/Loading';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Register = () => {
    const navigate = useNavigate();
    const emailRef = useRef('');
    const passwordRef = useRef('');

    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });

    const handleRegister = event => {
        event.preventDefault();
        const email = emailRef.current.value;
        const password = passwordRef.current.value;

        createUserWithEmailAndPassword(email, password);
        toast('Verification email sent');
    }

    if (loading) {
        return <Loading></Loading>
    }

    if (user) {
        navigate('/login');
    }



    return (
        <div>
            <Form onSubmit={handleRegister} className='w-50 mx-auto mt-3'>
                <FloatingLabel controlId="floatingInput" label="Email address" className="mb-3">
                    <Form.Control ref={emailRef} type="email" placeholder="Enter email" required />
                </FloatingLabel>

                <FloatingLabel controlId="floatingPassword" label="Password" className="mb-3">
                    <Form.Control ref={passwordRef} type="password" placeholder="Password" required />
                </FloatingLabel>

                <Button className='w-100' variant="dark" type="submit">
                    CREATE AN ACCOUNT
                </Button>
                <p className='mt-2 text-center'>
                    Already Have an Account?
                </p>
                <Link className="btn btn-outline-dark w-100" to="/login">LOGIN HERE</Link>
            </Form>
            <p className='text-danger text-center mt-3'>
                {error && error.message}
            </p>
            <GoogleLogin></GoogleLogin>
        </div>
    );
};

export default Register;