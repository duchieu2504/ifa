import SvgIcons from "assets/images/trang_chu";
import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import styled from "styled-components";
import { ReactComponent as PhoneCall } from "../../assets/images/trang_chu/phone_call.svg";
import { ReactComponent as PhoneSvg } from "../../assets/images/trang_chu/phone.svg";
import { ReactComponent as EmailSvg } from "../../assets/images/trang_chu/email.svg";
import { ReactComponent as FacebookSvg } from "../../assets/images/trang_chu/facebook.svg";
import { ReactComponent as ZaloSvg } from "../../assets/images/trang_chu/zalo.svg";
import { ReactComponent as YoutubeSvg } from "../../assets/images/trang_chu/youtube.svg";
import Logo from "../../assets/images/gioi-thieu/logo.png";
import { NavLink } from "react-router-dom";

const FooterStyled = styled.div`
     {
        padding-top: 28px;
    }
    &&& {
        p,
        h3 {
            font-size: 1.6rem;
            color: rgb(19, 20, 20);
            font-weight: bold;
            padding-top: 30px;
            line-height: 1.6;
        }
        .footer_about_item {
            padding: 6px 0;
        }
        .footer_about_link,
        h2,
        span {
            font-size: 1.6rem;
            color: rgb(129, 130, 130);
            line-height: 1.6;
            text-decoration: none;
            width: 75%;
            padding-top: 8px;
        }
        h3 {
            padding: 0;
            line-height: 1.6;
        }
        .footer_about_link {
            font-weight: 500;
            &:hover {
                text-decoration: underline;
            }
        }
        span {
            font-weight: bold;
            padding-top: 0;
        }
        .hot_line {
            padding-top: 56px;
        }
        .footer_about {
            h2 {
                width: 140%;
            }
            .icons_facebook_svg {
                width: 20px;
                height: 20px;
                fill: rgb(204, 33, 40);
            }
        }
        @media (max-width: 991px) {
            img {
                width: ;
            }
            h2 {
                font-size: 1.4rem;
                width: 100%;
                margin: 0;
            }
        }
    }
    h4 {
        font-size: 1.6rem;
        color: rgb(129, 130, 130);
        font-style: italic;
        font-weight: none;
        line-height: 3.25;
    }
`;
function Footer(props) {
    return (
        <footer>
            <FooterStyled>
                <Container>
                    <Row>
                        <Col xs={3} lg={4}>
                            <img src={Logo} alt="Logo IFA" />
                            <h2>
                                Sứ mệnh đưa Việt Nam từ một đất nước rất nghèo
                                trở thành quốc gia có thu nhập trung bình trong
                                khoảng hai thập niên
                            </h2>
                        </Col>
                        <Col xs={3} lg={2}>
                            <div className="footer_about ps-4">
                                <p>Công ty</p>
                                <ul className="footer_about_list ps-0">
                                    <li className="footer_about_item">
                                        <NavLink
                                            to="/introduce"
                                            className="footer_about_link"
                                        >
                                            Giới thiệu
                                        </NavLink>
                                    </li>
                                    <li className="footer_about_item">
                                        <NavLink
                                            to="/info"
                                            className="footer_about_link"
                                        >
                                            Thông tin
                                        </NavLink>
                                    </li>
                                    <li className="footer_about_item">
                                        <NavLink
                                            to="/triet_ly"
                                            className="footer_about_link"
                                        >
                                            Triết lý
                                        </NavLink>
                                    </li>
                                    <li className="footer_about_item">
                                        <NavLink
                                            to="/train"
                                            className="footer_about_link"
                                        >
                                            Đào tạo
                                        </NavLink>
                                    </li>
                                </ul>
                            </div>
                        </Col>
                        <Col xs={3} lg={2}>
                            <div className="footer_about">
                                <p>Dịch vụ</p>
                                <ul className="footer_about_list ps-0">
                                    <li className="footer_about_item">
                                        <NavLink
                                            to="/home"
                                            className="footer_about_link"
                                        >
                                            Đào tạo Inhouse
                                        </NavLink>
                                    </li>
                                    <li className="footer_about_item">
                                        <NavLink
                                            to="/train"
                                            className="footer_about_link"
                                        >
                                            Đào tạo trực tuyến
                                        </NavLink>
                                    </li>
                                    <li className="footer_about_item">
                                        <NavLink
                                            to="/"
                                            className="footer_about_link"
                                        >
                                            Hợp tác quốc tế
                                        </NavLink>
                                    </li>
                                    <li className="footer_about_item">
                                        <NavLink
                                            to="/"
                                            className="footer_about_link"
                                        >
                                            Tư vấn doanh nghiệp
                                        </NavLink>
                                    </li>
                                </ul>
                            </div>
                        </Col>
                        <Col lg={4} xs={3}>
                            <div className="footer_about">
                                <p>Liên hệ</p>
                                <h2>
                                    Trụ sở: 60 Nguyễn Văn Thủ, Phường Đakao,
                                    Quận 1, TP.HCM
                                </h2>
                                <div className="d-flex align-items-center">
                                    <PhoneSvg style={{ width: "24px" }} />
                                    <h2 className="px-4">028 6681 4320</h2>
                                </div>
                                <div className="d-flex align-items-center">
                                    <EmailSvg style={{ width: "24px" }} />
                                    <h2 className="px-4">
                                        training@ifa.edu.vn
                                    </h2>
                                </div>
                                <div className="d-flex align-items-center py-3">
                                    <NavLink
                                        to="/"
                                        className="icons_facebook_svg ms-3"
                                    >
                                        <FacebookSvg />
                                    </NavLink>
                                    <NavLink
                                        to="/"
                                        className="icons_facebook_svg ms-3"
                                    >
                                        <YoutubeSvg />
                                    </NavLink>
                                    <NavLink
                                        to="/"
                                        className="icons_facebook_svg ms-3"
                                    >
                                        <ZaloSvg />
                                    </NavLink>
                                </div>
                            </div>
                        </Col>
                    </Row>
                    <div className="hot_line d-flex align-items-center">
                        <PhoneCall />
                        <div className="hot_line_text ps-4">
                            <h3>Hot line: Hỗ trợ 24/7</h3>
                            <span className="text-bold">0942 99 39 49</span>
                        </div>
                    </div>
                    <div className="copyrighth pt-5">
                        <h4>Copyright © 2022 IFA. All Rights Reserved.</h4>
                    </div>
                </Container>
            </FooterStyled>
        </footer>
    );
}

export default Footer;
