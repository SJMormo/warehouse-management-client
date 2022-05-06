import React from 'react';
import { Button, Card, Col } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const Inventory = ({ inventory }) => {
    const { _id, name, img, description, price, quantity, supplierName } = inventory;

    const navigate = useNavigate();
    const handleInventoryDetail = (id) => {
        navigate(`/inventory/${id}`);
    }
    return (
        <Col>
            <Card>
                <Card.Img variant="top" src={img} className='img-fluid p-3' />
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text>
                        Description: {description}
                    </Card.Text>
                    <Card.Text>
                        Price: {price}
                    </Card.Text>
                    <Card.Text>
                        Quantity: {quantity}
                    </Card.Text>
                    <Card.Text>
                        Supplier Name: {supplierName}
                    </Card.Text>
                    <Button onClick={() => handleInventoryDetail(_id)} className='w-100' variant="outline-dark">Manage</Button>
                </Card.Body>
            </Card>
        </Col>
    )
};

export default Inventory;