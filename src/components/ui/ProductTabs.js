import React, {useState} from 'react';
import { Container, Tabs, Tab, Row, Col, Table } from 'react-bootstrap';
import ReviewCard from '../cards/ReviewCard';

const ProductTabs = () => {
    const [key, setKey] = useState('desc');

    return (
        <Container>
            <Tabs
            activeKey={key}
            onSelect={(k) => setKey(k)}
            >
                <Tab eventKey="desc" title="DESCRIPTION">
                    <div className="my-2">
                        <Row>
                            <Col md={7}>
                                <h5>About</h5>
                                <p className="text-muted">Samsa was a travelling salesman - and above it there hung a picture that he had recently cut out of an illustrated magazine and housed in a nice, gilded frame.</p>
                                <p className="text-muted">He must have tried it a hundred times, shut his eyes so that he wouldn't have to look at the floundering legs, and only stopped when he began to feel a mild, dull pain there that he had never felt before.</p>
                                <h5>You will love</h5>
                                <ul className="text-muted">
                                    <li>He must have tried it a hundred times</li>
                                    <li>shut his eyes so that he wouldn't have to look</li>
                                    <li>at the floundering legs, and only stopped</li>
                                </ul>
                            </Col>
                            <Col md={5}>
                                <img src="https://d19m59y37dris4.cloudfront.net/varkala/1-2/img/product/detail-3.jpg" alt="" className="img-fluid"/>
                            </Col>
                        </Row>
                    </div>
                </Tab>
                <Tab eventKey="info" title="ADDITIONAL INFORMATION">
                    <div className="my-2">
                        <Row>
                            <Col lg={6}>
                                <Table className="text-sm">
                                    <tbody>
                                        <tr>
                                            <th className="font-weight-normal border-0">
                                                Product #
                                            </th>
                                            <td className="text-muted border-0">
                                                Lorem ipsum dolor sit amet
                                            </td>
                                        </tr>
                                        <tr>
                                            <th className="font-weight-normal border-0">
                                                Available packaging
                                            </th>
                                            <td className="text-muted border-0">
                                            LOLDuis aute irure dolor in reprehenderit
                                            </td>
                                        </tr>
                                        <tr>
                                            <th className="font-weight-normal border-0">
                                                Weight
                                            </th>
                                            <td className="text-muted border-0">
                                            dolor sit amet
                                            </td>
                                        </tr>
                                        <tr>
                                            <th className="font-weight-normal border-0">
                                                Sunt in culpa qui
                                            </th>
                                            <td className="text-muted border-0">
                                            Lorem ipsum dolor sit amet
                                            </td>
                                        </tr>
                                    </tbody>
                                </Table>
                            </Col>
                            <Col lg={6}>
                            <Table className="text-sm">
                                    <tbody>
                                        <tr>
                                            <th className="font-weight-normal border-0">
                                                Product #
                                            </th>
                                            <td className="text-muted border-0">
                                                Lorem ipsum dolor sit amet
                                            </td>
                                        </tr>
                                        <tr>
                                            <th className="font-weight-normal border-0">
                                                Available packaging
                                            </th>
                                            <td className="text-muted border-0">
                                            LOLDuis aute irure dolor in reprehenderit
                                            </td>
                                        </tr>
                                        <tr>
                                            <th className="font-weight-normal border-0">
                                                Weight
                                            </th>
                                            <td className="text-muted border-0">
                                            dolor sit amet
                                            </td>
                                        </tr>
                                        <tr>
                                            <th className="font-weight-normal border-0">
                                                Sunt in culpa qui
                                            </th>
                                            <td className="text-muted border-0">
                                            Lorem ipsum dolor sit amet
                                            </td>
                                        </tr>
                                    </tbody>
                                </Table>
                            </Col>
                        </Row>
                    </div>
                </Tab>
                <Tab eventKey="reviews" title="REVIEWS">
                    <div className="my-2">
                        <Row>
                            <Col lg={10} xl={9}>
                                <ReviewCard/>
                                <ReviewCard/>
                                <ReviewCard/>
                            </Col>
                        </Row>
                    </div>
                </Tab>
            </Tabs>
        </Container>
    )
}

export default ProductTabs;
