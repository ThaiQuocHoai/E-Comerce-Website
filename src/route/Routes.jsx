import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './../pages/Home';
import CataLog from './../pages/CataLog';
import Cart from './../pages/Cart';
import Product from './../pages/Product';

export default function Routes(props) {
    return (
        <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/catalog/:slug" component={Product} />
            <Route path="/catalog" component={CataLog} />
            <Route path="/cart" component={Cart} />
        </Switch>
    )
}
