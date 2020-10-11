import React from 'react';
import { Modal, ModalBody, Button, TabContent, TabPane, TabContainer, Nav, NavItem, NavLink } from 'react-bootstrap';
import { FaTimes } from "react-icons/fa";
import LoginForm from "../components/forms/LoginForm";
import RegisterForm from '../components/forms/RegisterForm';

const AuthModal = ({show, close}) => {

    return (
        <Modal
        show={show}
        backdrop={true}
        onHide={() => close()}
        animation={true}>
            <Button className="close close-absolute" onClick={() => close()} variant="light">
                    <FaTimes className="svg-icon w-2rem h-2rem svg-icon-light align-middle"/>
                </Button>
            <ModalBody className="p-5">
                <TabContainer defaultActiveKey="login">
                    <Nav as="ul" className="list-inline">
                        <NavItem as="li" className="list-inline-item">
                            <NavLink eventKey="login" className="nav-link nav-link-lg">
                                Login
                            </NavLink>
                        </NavItem>
                        <NavItem as="li" className="list-inline-item">
                            <NavLink eventKey="register" className="nav-link nav-link-lg">
                                Register
                            </NavLink>
                        </NavItem>
                    </Nav>
                    <hr className="mb-3"/>
                    <TabContent>
                        <TabPane eventKey="login" className="px-3">
                            <LoginForm/>
                        </TabPane>
                        <TabPane eventKey="register" className="px-3">
                            <RegisterForm/>
                        </TabPane>
                    </TabContent>
                </TabContainer>
            </ModalBody>
        </Modal>
    )
}

export default AuthModal;
