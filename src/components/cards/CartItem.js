import React from 'react';
import { Col, Row, Button, FormControl } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FaTimes } from "react-icons/fa";

const CartItem = ({item, modal = false}) => {

    const displayCart = () => {
        if (!modal) {
            return (
                <div className="cart-item">
                    <Row className="d-flex align-items-center text-left text-md-center">
                        <Col xs={12} md={5}>
                            <Link className="cart-remove close mt-3 d-md-none" to="#">
                                <FaTimes />
                            </Link>
                            <div className="d-flex align-items-center">
                                <Link to="#">
                                    <img src={item.image} alt="" className="cart-item-img"/>
                                </Link>
                                <div className="cart-title text-left">
                                    <Link className="text-dark link-animated"><strong>{item.name}</strong></Link>
                                    <br/>
                                    <span className="text-muted text-sm">Size: {item.size}</span>
                                    <br/>
                                    <span className="text-muted text-sm">Color: {item.color}</span>
                                </div>
                            </div>
                        </Col>
                        <Col xs={12} md={7} className="mt-4 mt-md-0">
                            <Row className="align-items-center">
                                <Col md={3}>
                                    <Row>
                                        <Col xs={6} className="d-md-none text-muted">
                                            Price per item
                                        </Col>
                                        <Col xs={6} md={12} className="text-right text-md-center">
                                            {item.price}
                                        </Col>
                                    </Row>
                                </Col>
                                <Col md={4}>
                                    <Row className="align-items-center">
                                        <Col xs={7} sm={9} className="d-md-none text-muted">
                                            Quantity
                                        </Col>
                                        <Col xs={5} sm={3} md={12}>
                                            <div className="d-flex align-items-center">
                                                <Button variant="light" className="btn-items btn-items-decrease">-</Button>
                                                <FormControl
                                                type="text"
                                                value="4"
                                                className="text-center border-0 border-md input-items"
                                                />
                                                <Button variant="light" className="btn-items btn-items-increasee">+</Button>
                                            </div>
                                        </Col>
                                    </Row>
                                </Col>
                                <Col md={3}>
                                    <Row>
                                        <Col xs={6} className="d-md-none text-muted">
                                            Total price
                                        </Col>
                                        <Col xs={6} md={12} className="text-right text-md-center">
                                            {item['total-price']}
                                        </Col>
                                    </Row>
                                </Col>
                                <Col xs={2} className="d-none d-md-block text-center">
                                    <Link className="cart-remove text-muted" to="#">
                                        <FaTimes className="svg-icon w-2rem h-2rem svg-icon-light"/>
                                    </Link>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </div>
            )
        } else {
            return (
                <div className="navbar-cart-product">
                    <div className="d-flex align-items-center">
                        <Link to="#">
                            <img src={item.image} alt="" className="img-fluid navbar-cart-product-image"/>
                        </Link>
                        <div className="w-100">
                            <Link to="#" className="close">
                                <FaTimes className="svg-icon sidebar-cart-icon w-1rem h-1rem"/>
                            </Link>
                            <div className="pl-3">
                                <Link
                                to="#"
                                className="navbar-cart-product-link text-dark link-animated">
                                    <small className="d-block text-muted">Quantity: {item.count}</small>
                                    <strong className="d-block text-sm">${item.price}</strong>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            )
        }
    }
    

    return displayCart();
}

export default CartItem;
