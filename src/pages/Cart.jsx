import React, { useState } from 'react'
import { useEffect } from 'react'
import {Link} from 'react-router-dom'
import { useSelector } from 'react-redux'

import productData from '../assets/fake-data/products'

import Helmet from './../components/Helmet'
import Button from '../components/Button'
import CartItem from '../components/CartItem'

export default function Cart(props) {

    const cartItems = useSelector((state)=> state.cartItems.value)

    const [cartProduct, setCartProduct] = useState(productData.getCartItemsDetail(cartItems))

    const [totalProduct, setTotalProduct] = useState(0)
    const [totalPrice, setTotalPrice] = useState(0)

    useEffect(() => {
       setCartProduct(productData.getCartItemsDetail(cartItems))
       setTotalProduct(cartItems.reduce((total, item)=>{
           return total + Number(item.quantity)
       }, 0))
       setTotalPrice(cartItems.reduce((total, item)=> total + (Number(item.price))*(Number(item.quantity)),0))
    }, [cartItems])

    return (
        <Helmet title='Giỏ hàng'>
            <div className="cart">
                <div className="cart__info">
                    <div className="cart__info__txt">
                        <p>
                            Bạn đang có {totalProduct} sản phẩm trong giỏ hàng
                        </p>
                        <div className="cart__info__txt__price">
                            <span>Thành tiền </span>
                            <span>{totalPrice.toLocaleString()}</span>
                        </div>
                    </div>
                    <div className="cart__info__btn">
                        <Button size='block'>đặt hàng</Button>
                        <Link to="/catalog">
                            <Button size='block'>tiếp tục mua hàng</Button>
                        </Link>
                    </div>
                </div>
                <div className="cart__list">
                    {
                        cartProduct.map((item, index)=> (
                            <CartItem item={item} key={index} />
                        ))
                    }
                </div>
            </div>
        </Helmet>
    )
}
