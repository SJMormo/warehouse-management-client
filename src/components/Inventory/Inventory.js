import React from 'react';
import { Button, Card, Col } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import img from '../../images/card-sample.jpg'

const Inventory = ({ inventory }) => {
    const { _id, name } = inventory;

    const navigate = useNavigate();
    const handleInventoryDetail = (id) => {
        navigate(`inventory/${id}`);
    }
    return (
        <Col>
            <Card>
                <Card.Img variant="top" src={img} />
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text>
                        This is a longer card with supporting text below as a natural
                        lead-in to additional content. This content is a little bit longer.
                    </Card.Text>
                    <Button onClick={() => handleInventoryDetail(_id)} className='w-100' variant="outline-dark">Manage</Button>
                </Card.Body>
            </Card>
        </Col>
    )
};

export default Inventory;