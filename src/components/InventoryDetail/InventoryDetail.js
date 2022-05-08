import React, { useEffect, useRef, useState } from 'react';
import { Button, Card, Form, ListGroup, ListGroupItem } from 'react-bootstrap';
import { Link, useParams } from 'react-router-dom';

const InventoryDetail = () => {
    const { id } = useParams();
    const [inventoryDetail, setInventoryDetail] = useState({});

    const { _id, name, img, price, description, supplierName } = inventoryDetail;
    let { quantity } = inventoryDetail;

    function sendDataToServer() {
        const updatedQuantity = { name, img, price, quantity, description, supplierName };

        // send data to server
        fetch(`https://warehouse-management-sjmormo.herokuapp.com/updateQuantity/${id}`, {
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
        let stockQuantity = reStockQuantityRef.current.value;
        stockQuantity = parseInt(stockQuantity);
        quantity = parseInt(quantity);
        quantity += stockQuantity;
        // console.log(quantity, stockQuantity);
        // return;
        sendDataToServer();
        event.target.reset();
    }


    useEffect(() => {
        fetch(`https://warehouse-management-sjmormo.herokuapp.com/inventory/${id}`)
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
                    <Link className='ms-1 btn btn-outline-primary' to="/manageinventories">Manage Inventories</Link>
                </Card.Body>
            </Card>

            <Form onSubmit={handleReStock} className='mt-2 w-25 mx-auto'>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Restock The Item</Form.Label>
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