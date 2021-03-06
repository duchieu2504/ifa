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
                                            to="/ifa/home"
                                        >
                                            Trang ch???
                                        </NavLink>
                                        <NavLink
                                            className="nav-link"
                                            to="/ifa/introduce"
                                        >
                                            Gi???i thi???u
                                        </NavLink>
                                        <NavLink
                                            className="nav-link"
                                            to="/ifa/train"
                                        >
                                            ????o t???o
                                        </NavLink>
                                        <NavLink
                                            className="nav-link"
                                            to="/ifa/advise"
                                        >
                                            T?? v???n
                                        </NavLink>
                                        <NavLink
                                            className="nav-link"
                                            to="/ifa/lecturers"
                                        >
                                            Gi???ng vi??n
                                        </NavLink>
                                        <NavLink
                                            className="nav-link"
                                            to="/ifa/student"
                                        >
                                            H???c vi??n
                                        </NavLink>
                                        <NavLink
                                            className="nav-link"
                                            to="/ifa/work"
                                        >
                                            Ho???t ?????ng
                                        </NavLink>
                                        <NavLink
                                            className="nav-link"
                                            to="/ifa/expert_perspective"
                                        >
                                            G??c nh??n chuy??n gia
                                        </NavLink>
                                        <NavLink
                                            className="nav-link"
                                            to="/ifa/Contact"
                                        >
                                            Li??n h???
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
                                            to="/ifa/home"
                                            className={clsx("nav-link", {
                                                active: url === "home",
                                            })}
                                        >
                                            Trang ch???
                                        </NavLink>
                                        <NavLink
                                            to="/ifa/introduce"
                                            className={clsx("nav-link", {
                                                active: url === "introduce",
                                            })}
                                        >
                                            Gi???i thi???u
                                            <IconDown />
                                        </NavLink>
                                        <NavLink
                                            to="/ifa/train"
                                            className={clsx("nav-link", {
                                                active: url === "train",
                                            })}
                                        >
                                            ????o t???o
                                            <IconDown />
                                        </NavLink>
                                        <NavLink
                                            to="/ifa/advise"
                                            className={clsx("nav-link", {
                                                active: url === "advise",
                                            })}
                                        >
                                            T?? v???n
                                        </NavLink>
                                        <NavLink
                                            to="/ifa/lecturers"
                                            className={clsx("nav-link", {
                                                active: url === "lecturers",
                                            })}
                                        >
                                            Gi???ng vi??n
                                        </NavLink>
                                    </div>
                                </Col>
                                <Col xs={2} className="header_img px-5">
                                    <NavLink to="/ifa" className="">
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
                                            to="/ifa/student"
                                            className={clsx("nav-link", {
                                                active: url === "student",
                                            })}
                                        >
                                            H???c vi??n
                                        </NavLink>
                                        <NavLink
                                            to="/ifa/work"
                                            className={clsx("nav-link", {
                                                active: url === "work",
                                            })}
                                        >
                                            Ho???t ?????ng
                                            <IconDown />
                                        </NavLink>
                                        <NavLink
                                            to="/ifa/expert_perspective"
                                            className={clsx("nav-link", {
                                                active:
                                                    url ===
                                                    "expert_perspective",
                                            })}
                                        >
                                            G??c nh??n chuy??n gia
                                        </NavLink>
                                        <NavLink
                                            to="/ifa/contact"
                                            className={clsx("nav-link", {
                                                active: url === "contact",
                                            })}
                                        >
                                            Li??n h???
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
