import React, {useState} from 'react';
import { Container, Row, Col, Form, FormGroup, FormLabel, FormControl, Button, Collapse } from 'react-bootstrap';
import { FaRegSave } from "react-icons/fa";

const AddressForm = () => {
    const [open, setOpen] = useState(false);
    return (
        <Form>
            <h3 className="mb-4">Invoice Address</h3>
            <Row>
                <Col md={6}>
                    <FormGroup>
                        <FormLabel>Fullname</FormLabel>
                        <FormControl type="text"/>
                    </FormGroup>
                </Col>
                <Col md={6}>
                    <FormGroup>
                        <FormLabel>Email Address</FormLabel>
                        <FormControl type="email"/>
                    </FormGroup>
                </Col>
                <Col md={6}>
                    <FormGroup>
                        <FormLabel>Street</FormLabel>
                        <FormControl type="text"/>
                    </FormGroup>
                </Col>
                <Col md={6}>
                    <FormGroup>
                        <FormLabel>City</FormLabel>
                        <FormControl type="text"/>
                    </FormGroup>
                </Col>
                <Col md={6}>
                    <FormGroup>
                        <FormLabel>Zip</FormLabel>
                        <FormControl type="text"/>
                    </FormGroup>
                </Col>
                <Col md={6}>
                    <FormGroup>
                        <FormLabel>State</FormLabel>
                        <FormControl type="text"/>
                    </FormGroup>
                </Col>
                <Col md={6}>
                    <FormGroup>
                        <FormLabel>Telephone</FormLabel>
                        <FormControl type="text" inputMode="numeric"/>
                    </FormGroup>
                </Col>
                <Col sm={12} className="mt-3">
                    <div className="custom-control custom-checkbox">
                        <input
                        type="checkbox"
                        className="custom-control-input"
                        id="show-shipping-address"
                        onClick={() => setOpen(!open)}
                        name="clothes-brand"/>
                        <label htmlFor="show-shipping-address" className="custom-control-label align-middle">Use a different shipping address</label>
                    </div>
                </Col>
            </Row>
            <Collapse in={open}>
                <Container fluid>
                    <h3 className="my-4">Shipping Address</h3>
                    <Row>
                        <Col md={6}>
                            <FormGroup>
                                <FormLabel>Street</FormLabel>
                                <FormControl type="text"/>
                            </FormGroup>
                        </Col>
                        <Col md={6}>
                            <FormGroup>
                                <FormLabel>City</FormLabel>
                                <FormControl type="text"/>
                            </FormGroup>
                        </Col>
                        <Col md={6}>
                             <FormGroup>
                                <FormLabel>Zip</FormLabel>
                                <FormControl type="text"/>
                            </FormGroup>
                        </Col>
                        <Col md={6}>
                            <FormGroup>
                                <FormLabel>State</FormLabel>
                                <FormControl type="text"/>
                            </FormGroup>
                        </Col>
                        <Col md={6}>
                            <FormGroup>
                                <FormLabel>Telephone</FormLabel>
                                <FormControl type="text" inputMode="numeric"/>
                            </FormGroup>
                        </Col>
                    </Row>
                </Container>
            </Collapse>
            <div className="mt-4">
                <Button variant="dark" type="submit">
                    <i className="mr-2"><FaRegSave/></i>
                    Save changes
                </Button>
            </div>
        </Form>
    )
}

export default AddressForm;
