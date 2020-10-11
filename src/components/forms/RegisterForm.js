import React from 'react';
import { Container, Form, FormGroup, FormLabel, FormControl, Button } from 'react-bootstrap';
import { FaUser } from "react-icons/fa";

const RegisterForm = () => {
    return (
        <Container fluid>
            <Form>
                <FormGroup>
                    <FormLabel>Name</FormLabel>
                    <FormControl type="text" required/>
                </FormGroup>
                <FormGroup>
                    <FormLabel>Email</FormLabel>
                    <FormControl type="email" required/>
                </FormGroup>
                <FormGroup>
                    <FormLabel>Password</FormLabel>
                    <FormControl type="password" required/>
                </FormGroup>
                <FormGroup>
                    <Button variant="outline-dark" block>
                        <FaUser className="mr-2"/>
                        Register
                    </Button>
                </FormGroup>
            </Form>
        </Container>
    )
}

export default RegisterForm;
