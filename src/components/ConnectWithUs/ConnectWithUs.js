import React from 'react';
import { Button, Col, FloatingLabel, Form, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ConnectWithUs = () => {
    const handleConnect = event => {
        event.preventDefault();
        toast("Thank you. We'll look into your concern.")
        event.target.reset();
    }
    return (
        <div style={{ 'backgroundColor': '#d7fcfb' }}>
            <div className='w-75 mx-auto mt-5 p-3'>
                <h3 className='text-center'>Connect With Us</h3>
                <Row>
                    <Col sm={12} md={6} className='d-flex justify-content-center align-items-center'>
                        <div className='text-center'>
                            <h4>Fragrance Outlet</h4>
                            <p>Find Your perfect perfumes here!</p>
                        </div>
                    </Col>
                    <Col sm={12} md={6}>

                        <Form onSubmit={handleConnect} className='w-50 mx-auto mt-3'>
                            <FloatingLabel controlId="floatingInput" label="Email address" className="mb-3">
                                <Form.Control type="email" placeholder="Enter email" required />
                            </FloatingLabel>
                            <FloatingLabel controlId="floatingInput" label="Item Description" className="mb-3">
                                <Form.Control as="textarea" type="text" placeholder="Item Description" required />
                            </FloatingLabel>
                            <Button className='w-100' variant="outline-dark" type="submit">
                                CONNECT
                            </Button>
                        </Form>
                    </Col>
                </Row>
            </div>
        </div >
    );
};

export default ConnectWithUs;