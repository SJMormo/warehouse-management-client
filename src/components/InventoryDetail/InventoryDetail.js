import React, { useEffect, useRef, useState } from 'react';
import { Button, Card, Col, Form, ListGroup, ListGroupItem, Row } from 'react-bootstrap';
import { useParams } from 'react-router-dom';

const InventoryDetail = () => {
    const { id } = useParams();
    const [inventoryDetail, setInventoryDetail] = useState({});

    const { _id, name, img, price, description, supplierName } = inventoryDetail;
    let { quantity } = inventoryDetail;

    function sendDataToServer() {
        const updatedQuantity = { name, img, price, quantity, description, supplierName };

        // send data to server
        fetch(`http://localhost:5000/updateQuantity/${id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updatedQuantity)
        })
            .then(response => response.json())
            .then(result => {
                // console.log('Success:', result);
            });
    }

    const handleDelivery = () => {
        quantity = quantity - 1;
        sendDataToServer();
    }

    const reStockQuantityRef = useRef(0);
    const handleReStock = (event) => {
        event.preventDefault();
        const stockQuantity = parseInt(reStockQuantityRef.current.value);
        quantity += stockQuantity;
        // console.log(quantity, stockQuantity);
        sendDataToServer();
        event.target.reset();
    }


    useEffect(() => {
        fetch(`http://localhost:5000/inventory/${id}`)
            .then(res => res.json())
            .then(data => setInventoryDetail(data));
    }, [handleDelivery]);





    return (
        <div className='mt-5 '>
            <Card className='mx-auto w-75' border="light">
                <Card.Img variant="top" src={img} />
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text>
                        {description}
                    </Card.Text>
                </Card.Body>
                <ListGroup className="list-group-flush">
                    <ListGroupItem>ID: {_id}</ListGroupItem>
                    <ListGroupItem>Price: {price}</ListGroupItem>
                    <ListGroupItem>Quantity: {quantity}</ListGroupItem>
                    <ListGroupItem>Supplier Name: {supplierName}</ListGroupItem>
                </ListGroup>
                <Card.Body>
                    <Button onClick={handleDelivery}>Delivered</Button>
                </Card.Body>
            </Card>

            <Form onSubmit={handleReStock} className='mt-3 w-25 mx-auto'>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Restock The Items</Form.Label>
                    <Form.Control ref={reStockQuantityRef} type="number" placeholder="Enter quantity" required />
                </Form.Group>

                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>

        </div>
    );
};

export default InventoryDetail;