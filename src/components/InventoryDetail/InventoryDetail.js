import React, { useEffect, useState } from 'react';
import { Card, ListGroup, ListGroupItem } from 'react-bootstrap';
import { useParams } from 'react-router-dom';

const InventoryDetail = () => {
    const { id } = useParams();

    const [inventoryDetail, setInventoryDetail] = useState({});
    useEffect(() => {
        fetch(`http://localhost:5000/inventory/${id}`)
            .then(res => res.json())
            .then(data => setInventoryDetail(data));
    }, []);

    const { _id, name, img, price, quantity, description, supplierName } = inventoryDetail;

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
                    <Card.Link href="#">Card Link</Card.Link>
                    <Card.Link href="#">Another Link</Card.Link>
                </Card.Body>
            </Card>
        </div>
    );
};

export default InventoryDetail;