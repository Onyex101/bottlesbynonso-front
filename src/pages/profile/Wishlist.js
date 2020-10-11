import React from 'react';
import { Container } from 'react-bootstrap';
import WishItem from '../../components/cards/WishItem';
import data from '../../data.json';

const Wishlist = () => {
    return (
        <Container fluid>
            <div className="cart mb-5 mb-lg-0">
                <div className="cart-body">
                    {
                        data["cart-items"].map(item => (
                            <WishItem key={item.id} item={item}/>
                        ))
                    }
                </div>
            </div>
        </Container>
    )
}

export default Wishlist;
