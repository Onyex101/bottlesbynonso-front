import React from 'react'
import { Container, Col, Row, Button, TabContainer, Nav, NavItem, NavLink, TabContent, TabPane } from 'react-bootstrap';
import HeroSection from '../components/ui/HeroSection';
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import AddressForm from '../components/forms/AddressForm';

const Checkout = () => {

    const navButton = (prev_message, next_message) => (
        <div className="my-5 d-flex justify-content-between flex-column flex-lg-row">
            <Button variant="light" className="text-muted">
                <FaChevronLeft className="mr-2"/> {prev_message}</Button>
            <Button variant="dark">
                {next_message} <FaChevronRight className="ml-2"/>
            </Button>
        </div>
    );

    return (
        <>
            <HeroSection title="Checkout"/>
            <section>
                <Container>
                    <Row>
                        <Col lg={8}>
                            <TabContainer defaultActiveKey="review">
                                <Nav variant="pills" className="custom-nav mb-5">
                                    <NavItem className="w-25">
                                        <NavLink eventKey="review" className="text-sm">Order Review</NavLink>
                                    </NavItem>
                                    <NavItem className="w-25">
                                        <NavLink eventKey="address" className="text-sm">Address</NavLink>
                                    </NavItem>
                                    <NavItem className="w-25">
                                        <NavLink eventKey="delivery" className="text-sm">Delivery Method</NavLink>
                                    </NavItem>
                                    <NavItem className="w-25">
                                        <NavLink eventKey="payment" className="text-sm">Payment Method</NavLink>
                                    </NavItem>
                                </Nav>
                                <TabContent>
                                    <TabPane eventKey="review">
                                        <h4>review</h4>
                                    </TabPane>
                                    <TabPane eventKey="address">
                                        <AddressForm />
                                        {navButton('back', 'choose delivery method')}
                                    </TabPane>
                                    <TabPane eventKey="delivery" >
                                        <h4>delivery</h4>
                                    </TabPane>
                                    <TabPane eventKey="payment">
                                        <h4>add paystack payment</h4>
                                    </TabPane>
                                </TabContent>
                            </TabContainer>
                        </Col>
                        <Col lg={4}>
                        
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    )
}

export default Checkout;
