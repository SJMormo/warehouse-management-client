import React, { useRef } from 'react';
import { Button, FloatingLabel, Form } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import Loading from '../Loading/Loading';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const AddNewItem = () => {
    const emailRef = useRef('');
    const nameRef = useRef('');
    const imageRef = useRef('');
    const descriptionRef = useRef('');
    const priceRef = useRef('');
    const quantityRef = useRef('');
    const supplierNameRef = useRef('');

    const handleAddNewItem = (event) => {
        event.preventDefault();
        const email = emailRef.current.value;
        const name = nameRef.current.value;
        const image = imageRef.current.value;
        const description = descriptionRef.current.value;
        const price = priceRef.current.value;
        const quantity = quantityRef.current.value;
        const supplierName = supplierNameRef.current.value;

        const newItem = { name, image, description, price, quantity, supplierName, email };

        // send newItem to server
        fetch('http://localhost:5000/inventory', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(newItem),
        })
            .then(response => response.json())
            .then(data => {
                console.log('Success:', data);
            })

        event.target.reset();
        toast('New Inventory added successfully');
    }

    const [user, loading, error] = useAuthState(auth);

    if (loading) {
        return <Loading></Loading>
    }

    return (
        <div>
            <h3 className='mt-3 text-center'>Add New Item</h3>
            <Form onSubmit={handleAddNewItem} className='mt-3 w-50 mx-auto'>
                <FloatingLabel controlId="floatingInput" label="Email address" className="mb-3">
                    <Form.Control type="email" ref={emailRef} value={user.email} placeholder="Your Email" readOnly />
                </FloatingLabel>
                <FloatingLabel controlId="floatingInput" label="Item Name" className="mb-3">
                    <Form.Control type="text" ref={nameRef} placeholder="Item Name" required />
                </FloatingLabel>
                <FloatingLabel controlId="floatingInput" label="Image URL" className="mb-3">
                    <Form.Control type="text" ref={imageRef} placeholder="Image URL" required />
                </FloatingLabel>
                <FloatingLabel controlId="floatingInput" label="Item Description" className="mb-3">
                    <Form.Control as="textarea" type="text" ref={descriptionRef} placeholder="Item Description" required />
                </FloatingLabel>
                <FloatingLabel controlId="floatingInput" label="Price" className="mb-3">
                    <Form.Control type="number" ref={priceRef} placeholder="Price" required />
                </FloatingLabel>
                <FloatingLabel controlId="floatingInput" label="Quantity" className="mb-3">
                    <Form.Control type="number" ref={quantityRef} placeholder="Quantity" required />
                </FloatingLabel>
                <FloatingLabel controlId="floatingInput" label="Supplier Name" className="mb-3">
                    <Form.Control type="text" ref={supplierNameRef} placeholder="Supplier Name" required />
                </FloatingLabel>


                <Button className='w-100' variant="dark" type="submit">
                    Submit
                </Button>
            </Form>
        </div>
    );
};

export default AddNewItem;