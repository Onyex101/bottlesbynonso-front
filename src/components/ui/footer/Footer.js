import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import FooterService from './FooterService';
import MainBlock from './MainBlock';

const Footer = () => {
    return (
        <footer>
            {/* Services block */}
            <FooterService/>

            {/* Main block, menus, subscribe form */}
            <MainBlock />

            {/* Copyright section of footer */}
            <div className="py-4 font-weight-light text-muted">
                <Container>
                    <Row className="align-items-center text-sm text-gray-700">
                        <Col lg={4} className="text-center text-lg-left">
                            <p className="mb-lg-0">
                                &copy; Lord Yeks {new Date().getFullYear()}.  All rights reserved.
                            </p>
                        </Col>
                        <Col lg={8} className="text-center text-lg-left">
                        
                        </Col>
                    </Row>
                </Container>
            </div>
        </footer>
    )
}

export default Footer;
