import React, {useRef, useEffect} from 'react'

import Logo from './../assets/images/Logo-2.png';

import { Link, NavLink, useLocation } from 'react-router-dom';



const mainNav = [
    {
        display: "Trang chủ",
        path: "/"
    },
    {
        display: "Sản phẩm",
        path: "/catalog"
    },
    {
        display: "Phụ kiện",
        path: "/accessories"
    },
    {
        display: "Liên Hệ",
        path: "/contact"
    }

]








const Header = () => {

    const {pathname} = useLocation();
    const activeNav = mainNav.findIndex(index => index.path === pathname)

    const renderNav = () => {
        return mainNav.map((item, index) => {
            return <div className={`header__menu__item header__menu__left__item ${activeNav === index? 'active': ''}`} key={index}
                onClick={menuToggle}
            >
                <NavLink to={item.path}>
                    <span>{item.display}</span>
                </NavLink>
            </div>
        })
    }

    const headerRef = useRef(null);


    useEffect(() => {
        window.addEventListener("scroll", ()=>{
            if(document.body.scrollTop > 80 || document.documentElement.scrollTop > 80){
                headerRef.current.classList.add('shrink');
            } else {
                headerRef.current.classList.remove('shrink');
            }
        })
        return () => {
            window.removeEventListener("scroll");
        }
    }, [])

    const menuLeft = useRef(null);

    const menuToggle = () => {
      menuLeft.current.classList.toggle("active");
    }

    return (
        <div className="header" ref={headerRef}>
            <div className="container">
                <div className="header__logo">
                    <Link to="/">
                        <img src={Logo} alt="..." />
                    </Link>
                </div>
                <div className="header__menu">
                    <div className="header__menu__mobile-toggle" onClick={menuToggle}>
                        <i className='bx bx-menu-alt-left'></i>
                    </div>
                    <div className="header__menu__left" ref={menuLeft} onClick={menuToggle}>
                        <div className="header__menu__left__close">
                            <i className='bx bx-chevron-left'></i>
                        </div>
                        {renderNav()}
                    </div>
                    <div className="header__menu__right">
                        <div className="header__menu__item header__menu__right__item">
                            <i className="bx bx-search"></i>
                        </div>
                        <div className="header__menu__item header__menu__right__item">
                            <Link to="/cart">
                                <i className="bx bx-shopping-bag"></i>
                            </Link>
                        </div>
                        <div className="header__menu__item header__menu__right__item">
                            <i className="bx bx-user"></i>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header
