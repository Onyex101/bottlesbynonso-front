import React, {useState} from 'react';
import { Container, Row, Col, Alert } from 'react-bootstrap';
import data from '../data.json';
import ProductCarousel from '../components/ui/ProductCarousel';
import ProductDetail from '../components/ui/ProductDetail';
import ProductTabs from '../components/ui/ProductTabs';
import { FaRegCheckCircle } from "react-icons/fa";
import {Link} from 'react-router-dom';

const Product = () => {
    const [showAlert, setShow] = useState(true);

    const displayAlert = () => (
        <Alert
        variant="success"
        onClose={() => setShow(false)}
        dismissible
        className="mb-4 mb-lg-5">
            <div className="d-flex align-items-center pr-3">
                <FaRegCheckCircle className="svg-icon d-none d-sm-block w-3rem h-3rem svg-icon-light flex-shrink-0 mr-3" />
                <p className="mb-0">Push-up jeans have been added to your cart.
                    <br className="d-inline-block d-lg-none"/>
                    <Link to="/" className="text-reset text-decoration-underline ml-lg-3">View Cart</Link>
                </p>
            </div>
        </Alert>
    );

    return (
        <>
            <section>
                <Container className="pt-5">
                    <div className="d-block">
                        {showAlert ? displayAlert() : null}
                    </div>
                    <Row>
                        <Col lg={{span: 7, order: 1}} className="order-2">
                            <ProductCarousel slides={data.products[0]["product-images"]}/>
                        </Col>
                        <Col lg={{span: 5, order: 2}} className="order-1 pl-lg-4">
                            <ProductDetail/>
                        </Col>
                    </Row>
                </Container>
            </section>
            <section className="mt-5">
                <ProductTabs/>
            </section>
            <section className="py-5">
                <ProductCarousel type="recommended"/>
            </section>
        </>
    )
}

export default Product;
