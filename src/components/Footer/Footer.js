import './Footer.css';
import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Footer = () => {
    const year = new Date().getFullYear();
    return (
        <div className='footer mt-5'>
            {/* <hr style={{ 'width': '95%' }} className='mx-auto' /> */}
            <Container>
                <Row>
                    <Col xs={12} md={3}>
                        <h3 className='text-center'>Fragrance Outlet</h3>
                        <p>Fragrance Outlet is one of the nation's largest retailers of genuine designer fragrances and related accessories. We also pride ourselves on being the leading authority on fragrances. Our stores offer the widest selection of designer perfume and fragrances at the most affordable prices.</p>
                    </Col>
                    <Col xs={4} md={3} className='d-flex flex-column text-center'>
                        <h3>Services</h3>
                        <Link className='text-decoration-none' to="#">Shipping</Link>
                        <Link className='text-decoration-none' to="#">Online Payment</Link>
                        <Link className='text-decoration-none' to="#">Physical Outlet</Link>
                        <Link className='text-decoration-none' to="#">30 Day return policy</Link>
                    </Col>
                    <Col xs={4} md={3} className='d-flex flex-column text-center'>
                        <h3>Contact Us</h3>
                        <Link className='text-decoration-none' to="#">Rajshahi</Link>
                        <Link className='text-decoration-none' to="#">Ishwardi</Link>
                        <Link className='text-decoration-none' to="#">Dhaka</Link>
                        <Link className='text-decoration-none' to="#">Chittagong</Link>
                    </Col>
                    <Col xs={4} md={3} className='d-flex flex-column text-center'>
                        <h3>Social Media</h3>
                        <Link className='text-decoration-none' to="#">
                            <i>Facebook</i>
                        </Link>
                        <Link className='text-decoration-none' to="#">
                            <i>Instagram</i>
                        </Link>
                        <Link className='text-decoration-none' to="#">
                            <i>Twitter</i>
                        </Link>
                        <Link className='text-decoration-none' to="#">
                            <i>Youtube</i>
                        </Link>
                    </Col>
                    <Col xs={12} className='mt-sm-3'>
                        <p className='text-center'>SJMormo's Website &#169; {year}</p>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Footer;