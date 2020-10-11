import React from 'react';
import { Row, Col, Form, InputGroup, FormControl, Button, FormCheck } from 'react-bootstrap';
import {Link} from 'react-router-dom';
import Rating from './StarRating';
import { FaShoppingCart, FaHeart } from "react-icons/fa";

const ProductDetail = () => {
    return (
        <>
            <h1 className="mb-4">Push up Jeans</h1>
            <div className="d-flex flex-column flex-sm-row align-items-sm-center justify-content-sm-between mb-4">
                <ul className="list-inline mb-2 mb-sm-0">
                    <li className="list-inline-item h4 font-weight-light mb-0">
                        $65.00
                    </li>
                    <li className="list-inline-item text-muted font-weight-light">
                        <del>$90.00</del>
                    </li>
                </ul>
                <div className="d-flex align-items-center text-sm">
                    <Rating />
                    <span className="text-muted text-uppercase">25 REVIEWS</span>
                </div>
            </div>
            <p className="mb-4 text-muted">Samsa was a travelling salesman - and above it there hung a picture that he had recently cut out of an illustrated magazine and housed in a nice, gilded frame.</p>
            <Form>
                <Row>
                    <Col sm={6} lg={12} className="detail-option mb-4">
                        <h6 className="detail-option-heading">
                            Size <span>(required)</span>
                        </h6>
                        <FormControl as="select" autoCapitalize className="btn dropdown-toggle btn-selectpicker">
                            <option>Small</option>
                            <option>Medium</option>
                            <option>Large</option>
                        </FormControl>
                    </Col>
                    <Col sm={6} lg={12} className="detail-option mb-4">
                        <h6 className="detail-option-heading">
                            Type <span>(required)</span>
                        </h6>
                        <label
                        className="btn btn-sm btn-outline-primary detail-option-btn-label">
                            Hoodie
                            <FormCheck type="radio" className="input-invisible" required />
                        </label>
                        <label
                        className="btn btn-sm btn-outline-primary detail-option-btn-label">
                            College
                            <FormCheck type="radio" className="input-invisible" required />
                        </label>
                    </Col>
                </Row>
                <InputGroup className="w-100 mb-4">
                    <FormControl
                    size="lg"
                    type="number"
                    value="1"
                    name="items"
                    className="detail-quantity" />
                    <InputGroup.Append className="flex-grow-1">
                        <Button variant="dark" block>
                            <i className="mr-2"><FaShoppingCart/></i>
                            Add to Cart
                        </Button>
                    </InputGroup.Append>
                </InputGroup>
                <Row className="mb-4">
                    <Col sm={6}>
                        <Link to="#">
                            <i className="mr-2"><FaHeart/></i>
                            Add To Wishlist
                        </Link>
                    </Col>
                    <Col sm={6} className="text-right"></Col>
                </Row>
                <ul className="list-unstyled">
                    <li>
                        <strong>Category: </strong>
                        <Link className="text-muted">Jeans</Link>
                    </li>
                    <li>
                        <strong>Tags: </strong>
                        <Link className="text-muted">Leisure</Link>
                        ,
                        <Link className="text-muted">Elegant</Link>
                    </li>
                </ul>
            </Form>
        </>
    )
}

export default ProductDetail;
