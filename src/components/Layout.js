import React, {useState} from 'react';
import Menu from './menu/menu';
import Footer from './ui/footer/Footer';
import CartModal from '../modals/Cart';
import data from '../data.json';
import AuthModal from '../modals/Auth';
import { withRouter } from 'react-router-dom';

const Layout = props => {
    console.log(props);
    const [showCart, setShowCart] = useState(false);
    const [showAuth, setShowAuth] = useState(false);

    const handleCartToggle = () => {
        setShowCart(!showCart)
    }

    const handleAuthToggle = () => {
        setShowAuth(!showAuth)
    }

    return (
        <>
            {props.location.pathname !== '/admin' ? <Menu
            toggleCartModal={handleCartToggle}
            toggleAuthModal={handleAuthToggle}
            /> : null}
            {props.children}
            {
                props.location.pathname !== '/admin' ?
                <>
                <Footer />
                <CartModal
                show={showCart}
                items={data["cart-items"]}
                close={handleCartToggle}/>
                <AuthModal show={showAuth} close={handleAuthToggle}/>
                </>
            : null
            }
        </>
    )
}

export default withRouter(Layout);
