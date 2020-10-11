import React, {useState} from 'react';
import SwiperCore, { Thumbs, Zoom, Navigation, Pagination } from 'swiper';
import { Container } from 'react-bootstrap';
import { Swiper, SwiperSlide } from 'swiper/react';
import styled from 'styled-components';
import { Badge } from 'react-bootstrap';
import ProductCard from '../cards/ProductCard';
import data from '../../data.json';

// Import Swiper styles
import 'swiper/swiper.scss';
import 'swiper/components/thumbs/thumbs.scss';
import 'swiper/components/zoom/zoom.scss';

// install Swiper components
SwiperCore.use([Thumbs, Zoom, Navigation, Pagination]);

const Slide = styled.div`
    width: ${props => props.width};
    height: ${props => props.height};
    background-image: url(${props => props.img});
    background-repeat: no-repeat;
    background-size: cover;
`;

const ProductCarousel = ({slides, type = 'main-product'}) => {
    // store thumbs swiper instance
    const [thumbsSwiper, setThumbsSwiper] = useState(null);

    const randId = (length) => {
        let result = '';
        const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        let charactersLength = characters.length;
        for ( let i = 0; i < length; i++ ) {
           result += characters.charAt(Math.floor(Math.random() * charactersLength));
        }
        return result;
     };

     const showMainProduct = () => (
        <Container fluid>
            {/* Main Swiper -> pass thumbs swiper instance */}
            <Swiper
            className="gallery-top detail-carousel"
            spaceBetween={5}
            slidesPerView={1}
            thumbs={{ swiper: thumbsSwiper }}
            zoom
            >
                <Badge className="product-badge" variant="primary">Fresh</Badge>
                <Badge className="product-badge" variant="dark">Sale</Badge>
                {
                    slides.map(img => (
                        <SwiperSlide key={randId(5)}>
                            <div className="swiper-zoom-container">
                                <Slide className="swiper-zoom-target" img={img} height="100%" width="100%"></Slide>
                            </div>
                        </SwiperSlide>
                    ))
                }
            </Swiper>

            {/* Thumbs Swiper -> store swiper instance */}
            {/* It is also required to set watchSlidesVisibility and watchSlidesProgress props */ }
            <Swiper
            className="gallery-thumbs"
            spaceBetween={10}
            slidesPerView={4}
            watchSlidesVisibility
            watchSlidesProgress
            onSwiper={setThumbsSwiper}
            >
                {
                    slides.map(img => (
                        <SwiperSlide key={randId(5)}>
                            <Slide img={img} height="100%" width="100%"></Slide>
                        </SwiperSlide>
                    ))
                }
            </Swiper>
        </Container>
     );

     const reccomendedProducts = () => (
        <Container>
            <h5 className="mb-4">You might also like these</h5>
            <Swiper
            spaceBetween={10}
            slidesPerView={4}
            navigation
            pagination
            >
                {
                    data.products.map(product => (
                        <SwiperSlide key={randId(5)}>
                            <ProductCard product={product}/>
                        </SwiperSlide>
                    ))
                }
            </Swiper>
        </Container>
     );

    return (
        <>
        {type === 'main-product' ? showMainProduct() : reccomendedProducts()}
        </>
    )
}

export default ProductCarousel;
