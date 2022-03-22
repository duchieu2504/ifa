import React, { useEffect, useRef, useState } from "react";
import {
    Col,
    Container,
    Nav,
    Navbar,
    Offcanvas,
    Row,
    Button,
} from "react-bootstrap";
import "./Header.scss";
import Logo from "./../../assets/images/gioi-thieu/logo.png";
import { ReactComponent as IconSeach } from "./../../assets/images/trang_chu/icons_search.svg";
import { ReactComponent as IconDown } from "./../../assets/images/trang_chu/icons_down.svg";

import styled from "styled-components";
import { NavLink, useParams } from "react-router-dom";
import clsx from "clsx";
const NavbarStyled = styled(Navbar)`
    &&& {
        .nav-link {
            font-size: 1.4rem;
            color: rgb(173, 35, 40);
            font-weight: 600;
            line-height: 3.2rem;
            border-bottom: 4px solid transparent;
            position: relative;
            svg {
                width: 14px;
                transform: translateY(-6px) scale(1.6);
                padding-left: 6px;
            }
            &.active {
                font-weight: bold;
                border-bottom: 4px solid rgb(173, 35, 40);
            }
            &::before {
                content: "";
                position: absolute;
                bottom: -4.2px;
                left: 50%;
                width: 0;
                transition-property: width, left;
                transform-origin: center center;
                transition-timing-function: ease;
                transition-duration: 0.6s;
            }
        }
        .nav-link:hover {
            font-weight: bold;
            &::before {
                left: 0px;
                width: 100%;
                height: 4px;
                background-color: rgb(173, 35, 40);
            }
        }
    }
`;

const HeaderStyled = styled.div`
    padding: 32px 0;
    transition-property: position;
    transition-duration: 0.6s;
    transform-origin: top center;
    transition-timing-function: ease;
    &.active {
        width: 100%;
        background: #fff;
        position: fixed;
        top: 0;
        left: 0;
        z-index: 99;
        padding: 0;
        box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.2);

        .header_img {
            display: none;
        }
        .header_mobile {
            img {
                width: 9%;
                transform: translateY(-4px);
            }
        }
    }
    img {
        transform: translateY(-20px);
    }
    .search {
        background-color: rgb(173, 35, 40);
        border-radius: 50%;
        width: 34px;
        height: 34px;
        padding: 0 6px;
    }
    svg {
        width: 20px;
        fill: rgb(255, 255, 255);
        transform: translateY(2px);
    }
    .header_mobile_navbar_icons {
        width: 40px;
        i {
            height: 100%;
            transform: scale(2);
        }
    }
    .header_mobile {
        img {
            width: 12%;
            transform: translateY(-4px);
        }
    }
    .offcanvas {
        z-index: 100;
    }
    @media (max-width: 991px) {
        padding: 0;
    }
    @media (max-width: 767px) {
    }
`;

const OffcanvasBodyStyled = styled(Offcanvas.Body)`
    &&& {
        .navbar_list {
            flex-direction: column;
        }
        .nav-link {
            border-bottom: 1px solid rgb(173, 35, 40);
            text-align: end;
            &.active {
                background-color: rgb(173, 35, 40);
                color: #fff;
            }
        }
    }
`;

function Header(props) {
    const url = useParams();
    const headerRef = useRef();
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    useEffect(() => {
        const headerElement = headerRef.current;
        window.addEventListener("scroll", () => {
            const scrollTop =
                window.scrollY || document.documentElement.scrollTop;
            if (scrollTop < 120) {
                headerElement.classList.remove("active");
            }
            if (scrollTop >= 120) {
                headerElement.classList.add("active");
            }
        });
    });
    return (
        <HeaderStyled className="header" ref={headerRef}>
            <Container fluid="">
                <div className="d-flex d-lg-none header_mobile justify-content-between align-items-center py-4">
                    <div
                        className="header_mobile_navbar_icons"
                        variant="primary"
                        onClick={handleShow}
                    >
                        <i className="fa-solid fa-bars"></i>
                    </div>

                    <Offcanvas
                        show={show}
                        onHide={handleClose}
                        className="w-25 offcanvas"
                    >
                        <Offcanvas.Header closeButton></Offcanvas.Header>
                        <OffcanvasBodyStyled>
                            <NavbarStyled>
                                <Nav className="w-100">
                                    <div className="navbar_list me-auto d-flex justify-content-between w-100">
                                        <NavLink
                                            className="nav-link"
                                            to="/home"
                                        >
                                            Trang chủ
                                        </NavLink>
                                        <NavLink
                                            className="nav-link"
                                            to="/introduce"
                                        >
                                            Giới thiệu
                                        </NavLink>
                                        <NavLink
                                            className="nav-link"
                                            to="/train"
                                        >
                                            Đào tạo
                                        </NavLink>
                                        <NavLink
                                            className="nav-link"
                                            to="/advise"
                                        >
                                            Tư vấn
                                        </NavLink>
                                        <NavLink
                                            className="nav-link"
                                            to="/lecturers"
                                        >
                                            Giảng viên
                                        </NavLink>
                                        <NavLink
                                            className="nav-link"
                                            to="/student"
                                        >
                                            Học viên
                                        </NavLink>
                                        <NavLink
                                            className="nav-link"
                                            to="/work"
                                        >
                                            Hoạt động
                                        </NavLink>
                                        <NavLink
                                            className="nav-link"
                                            to="/expert_perspective"
                                        >
                                            Góc nhìn chuyên gia
                                        </NavLink>
                                        <NavLink
                                            className="nav-link"
                                            to="/Contact"
                                        >
                                            Liên hệ
                                        </NavLink>
                                    </div>
                                </Nav>
                            </NavbarStyled>
                        </OffcanvasBodyStyled>
                    </Offcanvas>
                    <img src={Logo} className="img-fluid" alt="Image Logo" />
                    <div className="search">
                        <IconSeach />
                    </div>
                </div>
                <div className="d-none d-lg-block">
                    <Row>
                        <NavbarStyled>
                            <Nav
                                className="w-100 align-items-center justify-content-center"
                                navbarScroll
                            >
                                <Col xs={5}>
                                    <div className="navbar_list me-auto d-flex justify-content-between">
                                        <NavLink
                                            to="/home"
                                            className={clsx("nav-link", {
                                                active: url === "home",
                                            })}
                                        >
                                            Trang chủ
                                        </NavLink>
                                        <NavLink
                                            to="/introduce"
                                            className={clsx("nav-link", {
                                                active: url === "introduce",
                                            })}
                                        >
                                            Giới thiệu
                                            <IconDown />
                                        </NavLink>
                                        <NavLink
                                            to="/train"
                                            className={clsx("nav-link", {
                                                active: url === "train",
                                            })}
                                        >
                                            Đào tạo
                                            <IconDown />
                                        </NavLink>
                                        <NavLink
                                            to="/advise"
                                            className={clsx("nav-link", {
                                                active: url === "advise",
                                            })}
                                        >
                                            Tư vấn
                                        </NavLink>
                                        <NavLink
                                            to="/lecturers"
                                            className={clsx("nav-link", {
                                                active: url === "lecturers",
                                            })}
                                        >
                                            Giảng viên
                                        </NavLink>
                                    </div>
                                </Col>
                                <Col xs={2} className="header_img px-5">
                                    <NavLink to="/" className="">
                                        <img
                                            src={Logo}
                                            className="img-fluid"
                                            alt="Image Logo"
                                        />
                                    </NavLink>
                                </Col>
                                <Col xs={5}>
                                    <div className="me-auto d-flex justify-content-between align-items-center">
                                        <NavLink
                                            to="/student"
                                            className={clsx("nav-link", {
                                                active: url === "student",
                                            })}
                                        >
                                            Học viên
                                        </NavLink>
                                        <NavLink
                                            to="/work"
                                            className={clsx("nav-link", {
                                                active: url === "work",
                                            })}
                                        >
                                            Hoạt động
                                            <IconDown />
                                        </NavLink>
                                        <NavLink
                                            to="/expert_perspective"
                                            className={clsx("nav-link", {
                                                active:
                                                    url ===
                                                    "expert_perspective",
                                            })}
                                        >
                                            Góc nhìn chuyên gia
                                        </NavLink>
                                        <NavLink
                                            to="/contact"
                                            className={clsx("nav-link", {
                                                active: url === "contact",
                                            })}
                                        >
                                            Liên hệ
                                        </NavLink>
                                        <div className="search">
                                            <IconSeach />
                                        </div>
                                    </div>
                                </Col>
                            </Nav>
                        </NavbarStyled>
                    </Row>
                </div>
            </Container>
        </HeaderStyled>
    );
}

export default Header;
