import React, { useRef } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import Loading from '../Loading/Loading';

const Register = () => {
    const navigate = useNavigate();
    const emailRef = useRef('');
    const passwordRef = useRef('');

    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth);

    const handleRegister = event => {
        event.preventDefault();
        const email = emailRef.current.value;
        const password = passwordRef.current.value;
        console.log(email, password);

        createUserWithEmailAndPassword(email, password);
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
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control ref={emailRef} type="email" placeholder="Enter email" required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control ref={passwordRef} type="password" placeholder="Password" required />
                </Form.Group>

                <Button className='w-100' variant="outline-primary" type="submit">
                    Register
                </Button>
                <p className='mt-2'>
                    Already Have an Account? <Link className="form-link" to="/login">Login</Link>
                </p>
            </Form>
        </div>
    );
};

export default Register;