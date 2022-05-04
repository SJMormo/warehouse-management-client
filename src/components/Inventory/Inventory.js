import React from 'react';
import { Button, Card, Col } from 'react-bootstrap';
import img from '../../images/card-sample.jpg'

const Inventory = ({ inventory }) => {
    return (
        <Col>
            <Card>
                <Card.Img variant="top" src={img} />
                <Card.Body>
                    <Card.Title>Card title</Card.Title>
                    <Card.Text>
                        This is a longer card with supporting text below as a natural
                        lead-in to additional content. This content is a little bit longer.
                    </Card.Text>
                    <Button className='w-100' variant="outline-dark">Primary</Button>
                </Card.Body>
            </Card>
        </Col>
    )
};

export default Inventory;