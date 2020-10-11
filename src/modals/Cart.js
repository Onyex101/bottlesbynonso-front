import React from 'react';
import { Modal, ModalBody, Button } from 'react-bootstrap';
import { FaTimes, FaShoppingBag } from "react-icons/fa";
import CartItem from '../components/cards/CartItem';
import { Link } from 'react-router-dom';

const Cart = ({show, items, close}) => {

    return (
        <Modal
        show={show}
        backdrop={true}
        onHide={() => close()}
        className="modal-right"
        animation={true}>
            <Modal.Header className="modal-header border-0">
                <Button className="close" onClick={() => close()} variant="light">
                    <FaTimes className="svg-icon w-2rem h-2rem svg-icon-light align-middle"/>
                </Button>
            </Modal.Header>
            <ModalBody className="px-5 sidebar-cart-body">
                {/* Empty Cart */}
                {items.length === 0 ? (
                    <div className="text-center mb-5">
                        <FaShoppingBag className="svg-icon w-3rem h-3rem svg-icon-light mb-4 text-muted"/>
                        <p>Your cart is empty</p>
                    </div>
                ) : null}

                {items.length > 0 ? (
                    <div className="sidebar-cart-product-wrapper">
                        {items.map(item => (
                            <CartItem modal={true} item={item} key={item.id}/>
                        ))}
                    </div>
                ) : null}
            </ModalBody>
            <Modal.Footer className="sidebar-cart-footer shadow">
                <div className="w-100">
                    <h5 className="mb-4">Subtotal: <span className="float-right">$345.00</span></h5>
                    <Link
                    onClick={() => close()}
                    className="btn btn-outline-dark btn-block mb-3" to="/cart">
                        View cart
                    </Link>
                    <Link
                    onClick={() => close()}
                    className="btn btn-dark btn-block"
                    to="/checkout">
                        Checkout
                    </Link>
                </div>
            </Modal.Footer>
        </Modal>
    )
}

export default Cart;
