import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaCoins, FaShippingFast, FaPercent, FaRegUserCircle } from "react-icons/fa";

const FooterService = () => {

    return (
        <div className="py-5 py-lg-6 bg-gray-100">
            <Container>
                <Row>
                    <Col lg={3} sm={6} className="service-column py-4">
                        <FaShippingFast className="svg-icon service-icon"/>
                        <div className="service-text">
                            <h6 className="text-sm mb-1">
                                Free shipping &amp; return
                            </h6>
                            <p className="text-muted font-weight-light text-sm mb-0">
                                Free Shipping over $300
                            </p>
                        </div>
                    </Col>
                    <Col lg={3} sm={6} className="service-column py-4">
                        <FaCoins className="svg-icon service-icon"/>
                        <div className="service-text">
                            <h6 className="text-sm mb-1">
                                Money back guarantee
                            </h6>
                            <p className="text-muted font-weight-light text-sm mb-0">
                                30 Days Money Back Guarantee
                            </p>
                        </div>
                    </Col>
                    <Col lg={3} sm={6} className="service-column py-4">
                        <FaPercent className="svg-icon service-icon"/>
                        <div className="service-text">
                            <h6 className="text-sm mb-1">
                                Best prices
                            </h6>
                            <p className="text-muted font-weight-light text-sm mb-0">
                                Always the best prices
                            </p>
                        </div>
                    </Col>
                    <Col lg={3} sm={6} className="service-column py-4">
                        <FaRegUserCircle className="svg-icon service-icon"/>
                        <div className="service-text">
                            <h6 className="text-sm mb-1">
                                020-800-456-747
                            </h6>
                            <p className="text-muted font-weight-light text-sm mb-0">
                                24/7 Available Support
                            </p>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default FooterService;
