import React from 'react';
import { Container, Form, FormGroup, FormLabel, FormControl, Row, Col, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FaSignInAlt } from "react-icons/fa";

const LoginForm = () => {
    return (
        <Container fluid>
            <Form>
                <FormGroup>
                    <FormLabel>Email</FormLabel>
                    <FormControl type="email" required/>
                </FormGroup>
                <FormGroup>
                    <Row>
                        <Col>
                            <FormLabel>Password</FormLabel>
                        </Col>
                        <Col xs="auto">
                            <Link to="#" className="form-text small">Forgot password</Link>
                        </Col>
                    </Row>
                    <FormControl type="password" placeholder="Password" required/>
                </FormGroup>
                <FormGroup>
                    <div className="custom-control custom-checkbox">
                        <input type="checkbox" className="custom-control-input" id="checkbox"/>
                        <label htmlFor="checkbox" className="custom-control-label text-muted">
                            <span className="text-sm">Remember me</span>
                        </label>
                    </div>
                </FormGroup>
                <FormGroup>
                    <Button variant="outline-dark" block>
                        <FaSignInAlt className="mr-2"/>
                        Login
                    </Button>
                </FormGroup>
            </Form>
        </Container>
    )
}

export default LoginForm;
