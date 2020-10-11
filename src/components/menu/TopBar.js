import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FaFacebookF, FaTwitter, FaPhoneAlt } from "react-icons/fa";

const TopBar = () => {
    return (
        <div className="top-bar text-sm bg-transparent">
            <Container className="px-lg-5 py-3" fluid>
                <Row className="align-items-center">
                    <Col md={4} className="d-none d-md-block">
                        <ul className="list-inline mb-0">
                            <li className="list-inline-item mr-2">
                                <Link to="/" className="text-reset text-hover-primary">
                                    <FaFacebookF/>
                                </Link>
                            </li>
                            <li className="list-inline-item mr-4">
                                <Link to="/" className="text-reset text-hover-primary">
                                    <FaTwitter/>
                                </Link>
                            </li>
                            <li className="list-inline-item mr-2">
                                <Link to="/" className="text-reset text-hover-primary">
                                    <FaPhoneAlt/>
                                    000-000-111-222
                                </Link>
                            </li>
                        </ul>
                    </Col>
                    <Col sm={6} md={4} className="text-left text-md-center">
                        <p className="mb-0">Free in-store delivery</p>
                    </Col>
                    <Col sm={6} md={4} className="d-none d-sm-flex justify-content-end">
                        {/* Language dropdown */}
                        {/* Currency dropdown */}
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default TopBar;
