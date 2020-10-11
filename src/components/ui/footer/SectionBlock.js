import React from 'react';
import { Collapse, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const SectionBlock = ({title, open, toggle, links}) => {

    return (
        <>
            <Link
            onClick={() => toggle()}
            aria-expanded={open}
            to="#"
            className="d-lg-none block-toggler my-3">
                {title}
                <span className="block-toggler-icon"></span>
            </Link>
            <Collapse in={open}>
                <Container fluid>
                    <h6 className="text-dark letter-spacing-1 mb-4 d-none d-lg-block">{title}</h6>
                    <ul className="list-unstyled text-sm pt-2 pt-lg-0">
                        {links.map((item, i) => (
                            <li className="mb-3" key={i}>
                                <Link className="text-muted text-hover-dark link-animated" to={item.to}>{item.link}</Link>
                            </li>
                        ))}
                    </ul>
                </Container>
            </Collapse>
        </>
    )
}

export default SectionBlock;
