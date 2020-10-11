import React from 'react';
import { Col, Row, Badge } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FaTimes, FaCartPlus } from "react-icons/fa";

const WishItem = ({item}) => {

    const setBadge = (status) => {
        if (status === 'In stoxk') {
            return <Badge variant="primary-light" className="p-lg-2">{status}</Badge>
        } else if (status === 'Out of stock') {
            return <Badge variant="danger-light" className="p-lg-2">{status}</Badge>
        } else {
            return <Badge variant="info-light" className="p-lg-2">{status}</Badge>
        };
    }

    return (
        <div className="cart-item">
            <Row className="d-flex align-items-center text-left text-md-center">
                <Col xs={12} md={5}>
                    <Link to="#" className="cart-remove close mt-3 d-md-none">
                        <FaTimes/>
                    </Link>
                    <Link to="#" className="d-md-none">
                        <FaCartPlus className="svg-icon w-2rem h-2rem mt-2 mr-5 float-right"/>
                    </Link>
                    <div className="d-flex align-items-center">
                        <Link to="#">
                            <img src={item.image} alt="" className="cart-item-img"/>
                        </Link>
                        <div className="cart-title text-left">
                            <Link to="#" className="text-dark"><strong>Skull Tee</strong></Link>
                            <br/>
                            <span className="text-muted text-sm">Size: {item.size}</span>
                            <br/>
                            <span className="text-muted text-sm">Color: {item.color}</span>
                        </div>
                    </div>
                </Col>
                <Col xs={12} md={7} className="mt-4 mt-md-0">
                    <Row className="align-items-center">
                        <Col md={2}>
                            <Row>
                                <Col xs={6} className="d-md-none text-muted">
                                    Price per item
                                </Col>
                                <Col xs={6} md={12} className="text-right text-md-center">
                                    ${item.price}
                                </Col>
                            </Row>
                        </Col>
                        <Col md={3}>
                            <Row>
                                <Col xs={6} className="d-md-none text-muted">
                                    Status
                                </Col>
                                <Col xs={6} md={12} className="text-right text-md-left">
                                    {setBadge(item.status)}
                                </Col>
                            </Row>
                        </Col>
                        <Col md={4} className="d-none d-md-block text-center">
                            <Link to="#" className="mt-4 mt-md-0 text-primary">
                                <FaCartPlus className="svg-icon w-2rem h-2rem"/>
                            </Link>
                        </Col>
                        <Col xs={1} className="d-none d-md-block text-center">
                            <Link to="#" className="cart-remove text-muted">
                                <FaTimes className="svg-icon w-2rem h-2rem mt-2"/>
                            </Link>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </div>
    )
}

export default WishItem;
