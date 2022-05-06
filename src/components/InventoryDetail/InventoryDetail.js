import React, { useEffect, useState } from 'react';
import { Button, Card, ListGroup, ListGroupItem } from 'react-bootstrap';
import { useParams } from 'react-router-dom';

const InventoryDetail = () => {
    const { id } = useParams();
    const [inventoryDetail, setInventoryDetail] = useState({});

    const { _id, name, img, price, description, supplierName } = inventoryDetail;
    let { quantity } = inventoryDetail;

    const handleDelivery = () => {
        quantity = quantity - 1;
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
                console.log('Success:', result);
            });
    }


    useEffect(() => {
        fetch(`http://localhost:5000/inventory/${id}`)
            .then(res => res.json())
            .then(data => setInventoryDetail(data));
    }, [handleDelivery]);





    return (
        <div>
            <Card className='mt-5 mx-auto w-75' border="light">
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
                    <Card.Link href="#">Another Link</Card.Link>
                </Card.Body>
            </Card>
        </div>
    );
};

export default InventoryDetail;