import React from 'react';
import { Button, Form } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import Loading from '../Loading/Loading';


const AddNewItem = () => {
    const [user, loading, error] = useAuthState(auth);
    if (user) {
        console.log(user.email);
    }

    if (loading) {
        return <Loading></Loading>
    }

    return (
        <div>
            <h3>Add New Item</h3>
            <Form className='mt-3 w-25 mx-auto'>
                <Form.Label>Email address</Form.Label>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Control type="email" value={user.email} placeholder="Your Email" readOnly />
                </Form.Group>

                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
        </div>
    );
};

export default AddNewItem;