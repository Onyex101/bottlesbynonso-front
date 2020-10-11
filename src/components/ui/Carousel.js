import React from 'react';
import SwiperCore, { Navigation, Pagination, EffectFade, Autoplay } from 'swiper';
import { Container, Row, Col } from 'react-bootstrap';
import { Swiper, SwiperSlide } from 'swiper/react';
import styled from 'styled-components';
import {Link} from 'react-router-dom';

// Import Swiper styles
import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/pagination/pagination.scss';
import 'swiper/components/scrollbar/scrollbar.scss';
import 'swiper/components/effect-fade/effect-fade.scss';

// install Swiper components
SwiperCore.use([Navigation, Pagination, Autoplay, EffectFade]);

const Slide = styled.div`
    width: 100%;
    height: 60vh;
    min-height: 600px;
    background-image: url(${props => props.img});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: ${props => {
        if (props.position === "left") {
            return "left center";
        } else if (props.position === "center") {
            return "center center";
        } else {
            return "right center";
        }
    }};
`;

const carousel = ({slides}) => {

    return (
        <Swiper
        effect="fade"
        spaceBetween={10}
        slidesPerView={1}
        autoplay={
            {
                delay: 6000,
                disableOnInteraction: false
            }
        }
        loop
        pagination={{ clickable: true }}
        >
            {
                slides.map(sl => (
                    <SwiperSlide key={sl.id}>
                        <Slide img={sl.image} position={sl.position}>
                            <Container className="px-lg-6 h-100" fluid>
                                <Row
                                className={(sl.position === "left" || sl.position === "right") ? "h-100 align-items-center" : "h-100 justify-content-center align-items-center text-center"}>
                                    <Col lg={6}
                                    className={sl.position === "left" ? "ml-auto" : ""}>
                                        <p className="subtitle letter-spacing-3 mb-3 text-dark font-weight-light">{sl["sub-header"]}</p>
                                        <h2 className="display-3" style={{lineHeight: 1}}>
                                            {sl.header}
                                        </h2>
                                        {
                                            sl.content === "" ? null : (
                                                <p className="text-muted mb-5">
                                                    {sl.content}
                                                </p>
                                            )
                                        }
                                        <Link className="btn btn-dark" to="/">
                                            Start shopping
                                        </Link>
                                    </Col>
                                </Row>
                            </Container>
                        </Slide>
                    </SwiperSlide>
                ))
            }
        </Swiper>
    )
}

export default carousel;
