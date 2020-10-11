import React from 'react';
import { Navbar, Nav, Form, FormControl, Button, InputGroup } from 'react-bootstrap';
import { Link, withRouter } from 'react-router-dom';
import { FaRegHeart, FaShoppingCart, FaRegUser, FaBars, FaSearch } from "react-icons/fa";
import TopBar from './TopBar';

const menu = (props) => {
    return (
        <header className={props.location.pathname === "/" ? "header header-absolute" : "header"}>
            <TopBar/>
            <Navbar
            bg="transparent"
            expand="lg"
            className={props.location.pathname === "/" ? "border-0 shadow-0 navbar-light px-lg-5" : "navbar-light bg-white px-lg-5"}
            >
                <Link to="/">
                    <Navbar.Brand>Bottles By Nonse</Navbar.Brand>
                </Link>
                <ul className="list-inline mb-0 d-block d-lg-none">
                    <li className="list-inline-item mr-3">
                        <Link
                        onClick={() => props.toggleAuthModal()}
                        className="text-dark text-hover-primary" to="/">
                            <FaRegUser className="svg-icon navbar-icon" />
                        </Link>
                    </li>
                    <li className="list-inline-item mr-3">
                        <Link className="text-dark text-hover-primary" to="/">
                            <FaRegHeart className="svg-icon navbar-icon" />
                        </Link>
                    </li>
                    <li className="list-inline-item position-relative mr-3">
                        <Link
                        onClick={() => props.toggleCartModal()}
                        className="text-dark text-hover-primary" to="#">
                            <FaShoppingCart className="svg-icon navbar-icon" />
                            <div className="navbar-icon-badge">0</div>
                        </Link>
                    </li>
                </ul>
                <Navbar.Toggle aria-controls="basic-navbar-nav">
                    <FaBars className="svg-icon navbar-icon" />
                </Navbar.Toggle>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav
                    className="navbar-nav mt-3 mt-lg-0 nav-sm-screen"
                    as="ul">
                        <Nav.Item as="li">
                            <Link to="/" className="nav-link">Home</Link>
                        </Nav.Item>
                        <Nav.Item as="li">
                            <Link to="/shop" className="nav-link">Shop</Link>
                        </Nav.Item>
                        <Nav.Item as="li">
                            <Link to="/" className="nav-link">About Us</Link>
                        </Nav.Item>
                    </Nav>
                    <Form
                    inline
                    className="d-lg-flex ml-auto mr-lg-5 mr-xl-6 my-4 my-lg-0"
                    >
                        <InputGroup className="input-group-underlined">
                            <FormControl
                            placeholder="Search"
                            aria-label="Search"
                            aria-describedby="search"
                            className="bg-transparent"
                            />
                            <InputGroup.Append className="ml-0">
                                <Button
                                variant="outline-secondary"
                                className="btn-underlined py-0"
                                >
                                    <FaSearch className="svg-icon navbar-icon" />
                                </Button>
                            </InputGroup.Append>
                        </InputGroup>
                    </Form>
                    <Nav className="list-inline mb-0 d-none d-lg-block" as="ul">
                        <Nav.Item as="li" className="list-inline-item mr-3">
                            <Link
                            onClick={() => props.toggleAuthModal()}
                            className="text-dark text-hover-primary" to="/">
                                <FaRegUser className="svg-icon navbar-icon" />
                            </Link>
                        </Nav.Item>
                        <Nav.Item as="li" className="list-inline-item mr-3">
                            <Link className="text-dark text-hover-primary" to="/">
                                <FaRegHeart className="svg-icon navbar-icon" />
                            </Link>
                        </Nav.Item>
                        <Nav.Item as="li" className="list-inline-item position-relative mr-3">
                            <Link
                            onClick={() => props.toggleCartModal()}
                            className="text-dark text-hover-primary" to="#">
                                <FaShoppingCart className="svg-icon navbar-icon" />
                                <div className="navbar-icon-badge">0</div>
                            </Link>
                        </Nav.Item>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </header>
    )
}

export default withRouter(menu);
