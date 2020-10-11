import React from 'react';
import { Container, Row, Col, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import data from '../data.json';
import ProductCard from '../components/cards/ProductCard';
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import SideBar from '../components/ui/SideBar';
import useDocumentTitle from '@rehooks/document-title';
// import HeroSection from '../components/ui/HeroSection';

const Shop = () => {
    useDocumentTitle('BottlesByNonse - Shop');

    const listProducts = () => (
        data.products.map(product => (
            <Col xl={3} sm={6} md={4} key={product.id} className="col-6">
                <ProductCard product={product}/>
            </Col>
        ))
    );

    return (
        <Container className="container-fluid-px py-6" fluid>
            <Row>
                {/* Grid */}
                <Col xl={9} lg={{span: 8, order: 2}} className="products-grid">
                    {/* Hero Content */}
                    {/* <HeroSection
                    title="Jackets and tops"
                    page="Shop"
                    link="/shop"
                    className="pl-0"
                    desc="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt."
                    /> */}
                    {/* grid header */}
                    <header className="product-grid-header">
                        <div className="mr-3 mb-3">
                            Showing <strong>1 - 12</strong> of <strong>158</strong> products
                        </div>
                        {/* <div className="mr-3 mb-3">
                            <span className="mr-2">Show</span>
                            <Link to="/" className="product-grid-header active">12</Link>
                            <Link to="/" className="product-grid-header">24</Link>
                            <Link to="/" className="product-grid-header">All</Link>
                        </div>
                        <div className="mb-3 d-flex align-items-center">
                            <span className="d-inline-block mr-2">Sort by</span>
                            <DropdownButton id="dropdown-basic-button" title="DEFAULT">
                                <Dropdown.Item href="#/action-1">DEFAULT</Dropdown.Item>
                                <Dropdown.Item href="#/action-2">DEFAULT</Dropdown.Item>
                                <Dropdown.Item href="#/action-3">DEFAULT</Dropdown.Item>
                            </DropdownButton>
                        </div> */}
                    </header>
                    {/* Products */}
                    <Row>
                        {listProducts()}
                    </Row>
                    <Nav className="d-flex justify-content-center mb-5 mt-3">
                        <ul className="pagination">
                            <li className="page-item">
                                <Link to="/" className="page-arrow">
                                    <span>
                                        <FaChevronLeft className="svg-icon page-icon"/>
                                    </span>
                                    <span className="sr-only">Previous</span>
                                </Link>
                            </li>
                            <li className="page-item active">
                                <Link to="/" className="page-link">1</Link>
                            </li>
                            <li className="page-item">
                                <Link to="/" className="page-link">2</Link>
                            </li>
                            <li className="page-item">
                                <Link to="/" className="page-link">3</Link>
                            </li>
                            <li className="page-item">
                                <Link to="/" className="page-link">4</Link>
                            </li>
                            <li className="page-item">
                                <Link to="/" className="page-link">5</Link>
                            </li>
                            <li className="page-item">
                                <Link to="/" className="page-arrow">
                                    <span>
                                        <FaChevronRight className="svg-icon page-icon"/>
                                    </span>
                                    <span className="sr-only">Next</span>
                                </Link>
                            </li>
                        </ul>
                    </Nav>
                </Col>
                {/* Side bar */}
                <Col xl={3} lg={{span: 4, order: 1}} className="sidebar pr-xl-5">
                    <SideBar/>
                </Col>
            </Row>
        </Container>
    )
}

export default Shop;
