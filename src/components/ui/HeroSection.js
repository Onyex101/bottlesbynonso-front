import React from 'react';
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const HeroSection = ({title, page, desc, link, className}) => {
    return (
        <section className={`hero ${className? className : ''}`}>
            <Container>
                {/* Breadcrumbs */}
                <ol className="breadcrumb undefined">
                    <li className="breadcrumb-item">
                        <Link to="/">Home</Link>
                    </li>
                    <li className="breadcrumb-item active">
                        <Link to={link}>{page}</Link>
                    </li>
                </ol>
                <div className="hero-content">
                    <h2 className="hero-heading">{title}</h2>
                    {desc && (<p className="lead text-muted">{desc}</p>)}
                </div>
            </Container>
        </section>
    )
}

export default HeroSection;
