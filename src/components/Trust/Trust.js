import React from 'react';
import { Col, Row } from 'react-bootstrap';
import './Trust.css';
import img1 from '../../images/trust/fastfreeshipping.svg';
import img2 from '../../images/trust/trusted.svg';
import img3 from '../../images/trust/safesecure.svg';
import img4 from '../../images/trust/fivestar.svg';

const Trust = () => {
    return (
        <div className='mt-5 container'>
            <Row xs={1} md={2} lg={4}>
                <Col>
                    <div className="card mb-3" >
                        <div className="row g-0 d-flex align-items-center">
                            <div className="col-sm-2">
                                <img src={img1} className="img-fluid rounded-start" alt="" />
                            </div>
                            <div className="col-sm-10">
                                <div className="card-body">
                                    <h5 className="card-title fs-6">Same Day Free Shipping</h5>
                                    <p className="card-text"><small>Orders ship on the day that you place them and arrive within days.</small></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </Col>
                <Col>
                    <div className="card mb-3" >
                        <div className="row g-0 d-flex align-items-center">
                            <div className="col-sm-2">
                                <img src={img2} className="img-fluid rounded-start" alt="" />
                            </div>
                            <div className="col-sm-10">
                                <div className="card-body">
                                    <h5 className="card-title fs-6">Trusted since 2001</h5>
                                    <p className="card-text"><small>100% authentic fragrances. You won't find knockoffs or imitations here.</small></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </Col>
                <Col>
                    <div className="card mb-3" >
                        <div className="row g-0 d-flex align-items-center">
                            <div className="col-sm-2">
                                <img src={img3} className="img-fluid rounded-start" alt="" />
                            </div>
                            <div className="col-sm-10">
                                <div className="card-body">
                                    <h5 className="card-title fs-6">Safe &#38; Secure Checkout</h5>
                                    <p className="card-text"><small>100% safe and secure checkout. Your information is protected.</small></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </Col>
                <Col>
                    <div className="card mb-3" >
                        <div className="row g-0 d-flex align-items-center">
                            <div className="col-sm-2">
                                <img src={img4} className="img-fluid rounded-start" alt="" />
                            </div>
                            <div className="col-sm-10">
                                <div className="card-body">
                                    <h5 className="card-title fs-6">5 Star Customer Ratings</h5>
                                    <p className="card-text"><small>Over 20 million satisfied customers.</small></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </Col>
            </Row>
        </div>
    );
};

export default Trust;