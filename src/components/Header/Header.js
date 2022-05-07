import { signOut } from 'firebase/auth';
import React from 'react';
import { Col, Container, Nav, Navbar, Row } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from "react-router-dom";
import auth from '../../firebase.init';
import Loading from '../Loading/Loading';


const Header = () => {
    const [user, loading] = useAuthState(auth);

    const navigate = useNavigate();

    const logOut = () => {
        signOut(auth);
        navigate('/');
    }

    if (loading) {
        return <Loading></Loading>
    }
    return (
        <div>
            <Navbar bg="light" expand="lg">
                <Container>
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link className='fs-5 text-black' as={Link} to="/home">Home</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                    <Navbar.Brand className='fs-2 text-black fw-bold' as={Link} to="/">Fragrance Outlet</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ms-auto">
                            <Nav.Link className='fs-5 text-black' as={Link} to="/blogs">Blogs</Nav.Link>
                            {
                                user ?
                                    <Nav.Link className='fs-5 text-black' as={Link} onClick={logOut} to="/login">Sign Out</Nav.Link>
                                    :
                                    <Nav.Link className='fs-5 text-black' as={Link} to="/login">Login</Nav.Link>
                            }
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

            <hr className={user ? 'mb-2 mt-0' : 'mb-0 mt-0'} />

            {/* if user */}
            {
                user ?
                    <div>
                        <Row className='text-center'>
                            <Col sm={12} md={4}>
                                <Link className='fs-5 text-decoration-none text-black' to="/manageinventories">Manage Items</Link>
                            </Col>
                            <Col sm={12} md={4}>
                                <Link className='fs-5 text-decoration-none text-black' to="/addnewitem">Add Items</Link>
                            </Col>
                            <Col sm={12} md={4}>
                                <Link className='fs-5 text-decoration-none text-black' to="/myitems">My Items</Link>
                            </Col>

                        </Row>
                        <hr className='mb-0' />
                    </div>
                    :
                    <></>
            }



        </div >
    );
};

export default Header;