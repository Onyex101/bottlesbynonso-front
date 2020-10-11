import React from 'react';
import './App.scss';
import { Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import Layout from './components/Layout';
import Shop from './pages/Shop';
import Product from './pages/Product';
import Profile from './pages/profile/Profile';
import Cart from './pages/Cart';
import Checkout from './pages/Checkout';

const App = () => {
  return (
    <Layout>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/shop" exact component={Shop} />
        <Route path="/product" exact component={Product} />
        <Route path="/profile" component={Profile} />
        <Route path="/cart" component={Cart} />
        <Route path="/checkout" component={Checkout} />
      </Switch>
    </Layout>
  );
}

export default App;
