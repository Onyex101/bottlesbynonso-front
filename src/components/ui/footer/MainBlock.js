import React, {useState, useEffect} from 'react';
import { Container, Row, Col, Form, InputGroup, Button } from 'react-bootstrap';
import { FaRegEnvelope } from "react-icons/fa";
import data from '../../../data.json';
import SectionBlock from './SectionBlock';

const MainBlock = () => {
    const [open, setOpen] = useState(true);
    const width = window.innerWidth;

    const handleWindowResize = () => {
        if (width < 992) {
            setOpen(false);
        } else {
            setOpen(true)
        }
    };

    useEffect(() => {
        window.addEventListener("resize", handleWindowResize);
        handleWindowResize();

        // Return a function from the effect that removes the event listener
        return () => window.removeEventListener("resize", handleWindowResize);
    }, []);

    const handleOpen = () => {
        setOpen(!open)
    }

    return (
        <div className="py-6 text-muted">
            <Container>
                <Row>
                    <Col lg={5} className="pr-lg-5 pr-xl-6 mb-5 mb-lg-0">
                        <h6 className="text-dark letter-spacing-1 mb-4">
                            Be in touch
                        </h6>
                        <p className="text-sm mb-3">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. At itaque temporibus.
                        </p>
                        <Form>
                            <InputGroup className="mb-3 input-group-underlined">
                                <Form.Control className="form-control-underlined" type="email" placeholder="Your Email Address" />
                                <InputGroup.Append className="ml-0">
                                    <Button className="btn-underlined text-gray-700 py-0" variant="outline-secondary">
                                        <FaRegEnvelope className="svg-icon w-2rem h-2rem"/>
                                    </Button>
                                </InputGroup.Append>
                            </InputGroup>
                        </Form>
                    </Col>

                    <Col lg={7}>
                        <Row>
                            {data["footer-links"].map((section, i) => (
                                <Col lg={4} key={i}>
                                    <SectionBlock
                                    open={open}
                                    toggle={handleOpen}
                                    title={section.title}
                                    links={section.links}/>
                                </Col>
                            ))}
                        </Row>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default MainBlock;
