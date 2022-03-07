import React from 'react';

import { BrowserRouter, Route } from 'react-router-dom'
import Routes from '../route/Routes';

import Footer from './Footer';
import Header from './Header';
import ProductViewModal from './ProductViewModal';


const Layout = () => {
    return (
        <BrowserRouter>
            <Route render={propsRoute => {
                return <div>
                    <Header {...propsRoute} />
                    <div className="container">
                        <div className="main">
                            <Routes />
                        </div>
                    </div>
                    <Footer />
                    <ProductViewModal/>
                </div>
            }} />
        </BrowserRouter>
    )
}

export default Layout
