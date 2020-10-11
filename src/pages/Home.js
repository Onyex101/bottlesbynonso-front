import React from 'react';
import Carousel from '../components/ui/Carousel';
import { Container, Row, Col } from 'react-bootstrap';
import data from '../data.json';
import ProductCard from '../components/cards/ProductCard';
import CategoryCard from '../components/cards/CategoryCard';
import useDocumentTitle from '@rehooks/document-title';

const Home = () => {
    useDocumentTitle('BottlesByNonse - Home');

    const getCategories = () => {
        return (
            <Container className="py-6">
                <Row>
                    {data.categories.map(category => (
                        <Col xs={6} className="mb-2 px-2" sm={12} lg={6} md={6} key={category.id}>
                            <CategoryCard category={category}/>
                        </Col>
                    ))}
                </Row>
            </Container>
        );
    }

    const getArrivals = () => {
        return (
            <Container className="py-6">
                <div className="text-center">
                    <h2>New Arrivals</h2>
                    <p className="lead text-muted mb-5">
                    One morning, when Gregor Samsa woke from troubled dreams, he found himself transformed in his bed into a horrible vermin. He lay on his armour-like back, and if he lifted his head a little he could see his brown belly, slightly domed and divided by arches into stiff sections
                    </p>
                </div>
                <Row>
                    {
                        data.products.map(product => (
                            <Col xs={6} xl={3} md={4} sm={6} key={product.id}>
                                <ProductCard product={product}/>
                            </Col>  
                        ))
                    }
                </Row>
            </Container>
        )
    }

    const dealOfWeek = () => {
        return (
            <div className="position-relative py-5" style={{backgroundColor: '#ebf7ff'}}>
                <Container>
                    <Row>
                        <Col lg={6} className="d-flex align-items-center">
                            <div>
                                <p className="subtitle text-danger mb-3">Deal of the Week</p>
                                <h3 className="h1">Black and white Nordegg chairs</h3>
                                <p className="text-muted">
                                    <del className="mr-3">$129.00</del>
                                    <span>$79</span>
                                </p>
                                <p className="mb-4">
                                    <span className="badge badge-danger p-3">
                                        $50 off
                                    </span>
                                </p>
                                <div className="bg-white px-5 py-4 shadow mb-4">
                                    <Row className="justify-content-between">
                                        <Col sm={3} className="text-center mb-4 mb-sm-0">
                                            <h6 className="h4 mb-2 days">14</h6>
                                            <span className="text-muted">days</span>
                                        </Col>
                                        <Col sm={3} className="text-center mb-4 mb-sm-0">
                                            <h6 className="h4 mb-2 hours">23</h6>
                                            <span className="text-muted">hours</span>
                                        </Col>
                                        <Col sm={3} className="text-center">
                                            <h6 className="h4 mb-2 minutes">39</h6>
                                            <span className="text-muted">minutes</span>
                                        </Col>
                                        <Col sm={3} className="text-center">
                                            <h6 className="h4 mb-2 seconds">37</h6>
                                            <span className="text-muted">seconds</span>
                                        </Col>
                                    </Row>
                                </div>
                            </div>
                        </Col>
                        <Col lg={6} className="text-center">
                            <img src="https://d19m59y37dris4.cloudfront.net/varkala/1-2/img/product/chair2-transparent.png" alt="" className="img-fluid" style={{maxHeight: '450px'}}/>
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    }

    return (
        <div>
            <Carousel slides={data["slider-data"]} />
            {getCategories()}
            {dealOfWeek()}
            {getArrivals()}
        </div>
    )
}

export default Home;
