import React from 'react';
import Grid from './Grid';
import logo from './../assets/images/Logo-2.png'
import { Link } from 'react-router-dom';

const footerAboutLink = [
    {
        display: "Giới thiệu",
        path: "/about"
    },
    {
        display: "Liên hệ",
        path: "/about"
    },
    {
        display: "Tuyển dụng",
        path: "/about"
    },
    {
        display: "Tin tức",
        path: "/about"
    },
    {
        display: "Hệ thống cửa hàng",
        path: "/about"
    },
]

const footerCustomerLink = [
    {
        display: "Chính sách đổi trả",
        path: "/about"
    },
    {
        display: "Chính sách bảo hành",
        path: "/about"
    },
    {
        display: "Chính sách hoàn tiền",
        path: "/about"
    },
]

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                <Grid
                    col={4}
                    mdCol={2}
                    smCol={1}
                    gap={10}
                >

                    <div>
                        <div className="footer__title">
                            Tổng đài hỗ trợ
                        </div>
                        <div className="footer__content">
                            <p>
                                Liên hệ đặt hàng <strong>0917970800</strong>
                            </p>
                            <p>
                                Thắc mắc đơn hàng <strong>0917970800</strong>
                            </p>
                            <p>
                                Góp ý, khiếu nại <strong>0917970800</strong>
                            </p>
                        </div>
                    </div>
                    <div>
                        <div className="footer__title">
                            Về Yolo
                        </div>
                        <div className="footer__content">
                            {
                                footerAboutLink.map((about, index) => {
                                    return <p key={index}>
                                        <Link to={about.path}>
                                            {about.display}
                                        </Link>
                                    </p>
                                })
                            }
                        </div>
                    </div>
                    <div>
                        <div className="footer__title">
                            Chăm sóc khách hàng
                        </div>
                        <div className="footer__content">
                            {
                                footerCustomerLink.map((about, index) => {
                                    return <p key={index}>
                                        <Link to={about.path}>
                                            {about.display}
                                        </Link>
                                    </p>
                                })
                            }
                        </div>
                    </div>
                    <div className="footer__about">
                        <p>
                            <Link to="/">
                                <img src={logo} alt="logo" className="footer__logo" />
                            </Link>
                        </p>
                        <p>
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                             Fuga porro distinctio aspernatur officiis suscipit natus
                              corporis iure similique cupiditate officia!
                        </p>
                    </div>

                </Grid>
            </div>
        </footer>
    )
}

export default Footer

