import React from 'react';
import { Switch, Route, useRouteMatch, NavLink, withRouter } from "react-router-dom";
import { Container, Col, Row, Nav, NavItem, Badge, Form, FormGroup, FormControl, FormLabel, Button } from 'react-bootstrap';
import Address from './Address';
import Order from './Order';
import Wishlist from './Wishlist';
import Logout from './Logout';
import { FaRegUserCircle, FaRegHeart, FaHome, FaShoppingBag, FaSignOutAlt, FaRegSave } from "react-icons/fa";

const Profile = (props) => {
    let { path, url } = useRouteMatch();

    const heroHeader = (route) => {
        if (route === "/profile/address") {
            return (<div className="hero-content">
                <h1 className="hero-heading">Your Addresses</h1>
            </div>)
        } else if (route === "/profile/orders") {
            return (<div className="hero-content">
                <h1 className="hero-heading">Your Orders</h1>
                <div>
                    <p className="text-muted">Your orders in one place</p>
                </div>
            </div>)
        } else if (route === "/profile/wishlist") {
            return (<div className="hero-content">
                <h1 className="hero-heading">Wishlist</h1>
                <div>
                    <p className="text-muted">You have 3 items in your wishlist</p>
                </div>
            </div>)
        } else if (route === "/profile/logout") {
            return (<div className="hero-content">
                <h1 className="hero-heading">Customer zone</h1>
            </div>)
        } else {
            return (<div className="hero-content">
                <h1 className="hero-heading">Your Profile</h1>
            </div>)
        }
    }

    const changePasswordForm = () => (
        <div className="mb-5">
            <h3 className="mb-5">Change your password</h3>
            <Form>
                <Row>
                    <Col sm={6}>
                        <FormGroup>
                            <FormLabel>Old password</FormLabel>
                            <FormControl type="password" />
                        </FormGroup>
                    </Col>
                </Row>
                <Row>
                    <Col sm={6}>
                        <FormGroup>
                            <FormLabel>New password</FormLabel>
                            <FormControl type="password" />
                        </FormGroup>
                    </Col>
                    <Col sm={6}>
                        <FormGroup>
                            <FormLabel>Retype new password</FormLabel>
                            <FormControl type="password" />
                        </FormGroup>
                    </Col>
                </Row>
                <div className="mt-4">
                    <Button variant="dark" type="submit">
                        <i className="mr-2">
                            <FaRegSave/>
                        </i>
                        change password
                    </Button>
                </div>
            </Form>
        </div>
    );

    const personalDetails = () => (
        <>
            <h3 className="mb-5">Personal Details</h3>
            <Form>
                <Row>
                    <Col sm={6}>
                        <FormGroup>
                            <FormLabel>Firstname</FormLabel>
                            <FormControl type="text" />
                        </FormGroup>
                    </Col>
                    <Col sm={6}>
                        <FormGroup>
                            <FormLabel>Lastname</FormLabel>
                            <FormControl type="text" />
                        </FormGroup>
                    </Col>
                </Row>
                <Row>
                    <Col sm={6}>
                        <FormGroup>
                            <FormLabel>Comapany</FormLabel>
                            <FormControl type="text" />
                        </FormGroup>
                    </Col>
                    <Col sm={6}>
                        <FormGroup>
                            <FormLabel>Street</FormLabel>
                            <FormControl type="text" />
                        </FormGroup>
                    </Col>
                </Row>
                <Row>
                    <Col sm={6} md={3}>
                        <FormGroup>
                            <FormLabel>Comapany</FormLabel>
                            <FormControl type="text" />
                        </FormGroup>
                    </Col>
                    <Col sm={6} md={3}>
                        <FormGroup>
                            <FormLabel>Zip</FormLabel>
                            <FormControl type="text" />
                        </FormGroup>
                    </Col>
                    <Col sm={6} md={3}>
                        <FormGroup>
                            <FormLabel>State</FormLabel>
                            <FormControl as="select">
                                <option>Lagos</option>
                                <option>Anambra</option>
                            </FormControl>
                        </FormGroup>
                    </Col>
                    <Col sm={6} md={3}>
                        <FormGroup>
                            <FormLabel>Country</FormLabel>
                            <FormControl as="select">
                                <option>Nigeria</option>
                                <option>Ghana</option>
                            </FormControl>
                        </FormGroup>
                    </Col>
                    <Col sm={6}>
                        <FormGroup>
                            <FormLabel>Telephone</FormLabel>
                            <FormControl type="text" inputMode="numeric" />
                        </FormGroup>
                    </Col>
                    <Col sm={6}>
                        <FormGroup>
                            <FormLabel>Email</FormLabel>
                            <FormControl type="email" />
                        </FormGroup>
                    </Col>
                </Row>
                <div className="mt-4">
                    <Button variant="dark" type="submit">
                        <i className="mr-2">
                            <FaRegSave/>
                        </i>
                        Save changes
                    </Button>
                </div>
            </Form>
        </>
    );

    return (
        <>
        <section className="hero py-5">
            <Container>
                {heroHeader(props.location.pathname)}
            </Container>
        </section>

        <section className="py-4">
            <Container>
                <Row>
                    <Col lg={8} xl={9} className="mb-5 mb-lg-0">
                        <Switch>
                            <Route path={`${path}/orders`}>
                                <Order/>
                            </Route>
                            <Route path={`${path}/address`}>
                                <Address/>
                            </Route>
                            <Route path={`${path}/wishlist`}>
                                <Wishlist/>
                            </Route>
                            <Route path={`${path}/logout`}>
                                <Logout/>
                            </Route>
                            <Route path={path} >
                                <Container fluid>
                                    {personalDetails()}
                                    <hr className="mb-5"/>
                                    {changePasswordForm()}
                                </Container>
                            </Route>
                        </Switch>
                    </Col>
                    <Col lg={4} xl={3} className="mb-5">
                        <div className="customer-sidebar card border-0">
                            <div className="customer-profile">
                                <NavLink to="" className="d-inline-block">
                                    <img src="https://d19m59y37dris4.cloudfront.net/varkala/1-2/img/avatar/avatar-0.jpg" alt="" className="img-fluid rounded-circle customer-image"/>
                                </NavLink>
                                <h5>Jane Doe</h5>
                                <p className="text-muted text-sm mb-0">Los Angeles, CA</p>
                            </div>
                            <Nav
                            className="list-group customer-nav"
                            activeKey="/">
                                <NavItem>
                                    <NavLink
                                    activeClassName="active"
                                    to={`${url}/`}
                                    className="list-group-item d-flex justify-content-between align-items-center">
                                        <span>
                                            <FaRegUserCircle className="svg-icon svg-icon-heavy mr-2" />
                                            Profile
                                        </span>
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink
                                    activeClassName="active"
                                    to={`${url}/orders`}
                                    className="list-group-item d-flex justify-content-between align-items-center">
                                        <span>
                                            <FaShoppingBag className="svg-icon svg-icon-heavy mr-2" />
                                            Orders
                                        </span>
                                        <Badge
                                        className="badge badge-pill badge-dark font-weight-normal px-3"
                                        variant="dark" pill>5</Badge>
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink
                                    activeClassName="active"
                                    to={`${url}/address`}
                                    className="list-group-item d-flex justify-content-between align-items-center">
                                        <span>
                                            <FaHome className="svg-icon svg-icon-heavy mr-2" />
                                            Addresses
                                        </span>
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink
                                    activeClassName="active"
                                    to={`${url}/wishlist`}
                                    className="list-group-item d-flex justify-content-between align-items-center">
                                        <span>
                                            <FaRegHeart className="svg-icon svg-icon-heavy mr-2" />
                                            Wishlist
                                        </span>
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink
                                    activeClassName="active"
                                    to={`${url}/logout`}
                                    className="list-group-item d-flex justify-content-between align-items-center">
                                        <span>
                                            <FaSignOutAlt className="svg-icon svg-icon-heavy mr-2" />
                                            Log out
                                        </span>
                                    </NavLink>
                                </NavItem>
                            </Nav>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
        </>
    )
}

export default withRouter(Profile);
