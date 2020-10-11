import React from 'react';
import CartItem from '../components/cards/CartItem';
import { Container, Row, Col, Button } from 'react-bootstrap';
import data from '../data.json';
import { Link } from 'react-router-dom';
import { FaChevronLeft } from "react-icons/fa";

const Cart = () => {
    return (
        <>
        <section className="hero py-5">
            <Container>
                <div className="hero-content">
                    <h2 className="hero-heading">Shopping cart</h2>
                </div>
            </Container>
        </section>

        <section>
            <Container>
                <Row className="mb-5">
                    <Col lg={{span: 8, offset: 2}} className="pr-xl-5">
                        <div className="cart mb-5">
                            <div className="cart-body">
                                {data["cart-items"].map(item => (
                                    <CartItem key={item.id} item={item} />
                                ))}
                            </div>
                        </div>
                        <div className="d-flex justify-content-between flex-column flex-lg-row mb-5 mb-lg-0">
                            <Link to="#" className="btn btn-link text-muted">
                                <FaChevronLeft />
                                Continue shopping
                            </Link>
                            <Button variant="primary">
                                Proceed to checkout
                            </Button>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
        </>
    )
}

export default Cart;
