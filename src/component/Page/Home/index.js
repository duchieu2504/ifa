import React, { useEffect, useRef, useState } from "react";
import Slider from "../../../util/Slider";
import LiveCoaching from "../../../assets/images/trang_chu/live_coaching.png";
import Image1 from "../../../assets/images/trang_chu/image1.png";
import Image2 from "../../../assets/images/trang_chu/image2.png";
import Image0 from "../../../assets/images/trang_chu/image.png";
import Image3 from "../../../assets/images/trang_chu/image3.png";
import Image4 from "../../../assets/images/trang_chu/image4.png";
import Image5 from "../../../assets/images/trang_chu/image5.png";
import Image6 from "../../../assets/images/trang_chu/image6.png";
import Image7 from "../../../assets/images/trang_chu/image7.png";
import Image8 from "../../../assets/images/trang_chu/image8.png";
import Image680 from "../../../assets/images/trang_chu/Rectangle_680.png";
import Image797 from "../../../assets/images/trang_chu/Rectangle_797.png";
import IconPlay from "../../../assets/images/trang_chu/icons_play.png";
import Image_Partner from "../../../assets/images/trang_chu/doi_tac.png";
import IconRight from "../../../assets/images/trang_chu/icons_right_arrow.png";
import IconLeft from "../../../assets/images/trang_chu/icons_left.png";

import { ReactComponent as SvgSoHoa1 } from "../../../assets/images/trang_chu/so_hoa_1.svg";
import { ReactComponent as SvgSoHoa2 } from "../../../assets/images/trang_chu/so_hoa_2.svg";
import { ReactComponent as SvgSoHoa3 } from "../../../assets/images/trang_chu/so_hoa_3.svg";
import { ReactComponent as Icon1 } from "../../../assets/images/trang_chu/icon1.svg";
import { ReactComponent as Icon2 } from "../../../assets/images/trang_chu/icon2.svg";
import { ReactComponent as Icon3 } from "../../../assets/images/trang_chu/icon3.svg";
import { ReactComponent as Icon4 } from "../../../assets/images/trang_chu/icon4.svg";
import { ReactComponent as Icon5 } from "../../../assets/images/trang_chu/icon5.svg";
import { ReactComponent as Icon6 } from "../../../assets/images/trang_chu/icon6.svg";
import { ReactComponent as Icon7 } from "../../../assets/images/trang_chu/icon7.svg";
import { ReactComponent as Icon8 } from "../../../assets/images/trang_chu/icon8.svg";
import { ReactComponent as Icon9 } from "../../../assets/images/trang_chu/icon9.svg";
import { ReactComponent as Vector5 } from "../../../assets/images/trang_chu/vector_5.svg";
import { ReactComponent as Right } from "../../../assets/images/trang_chu/right.svg";
import { ReactComponent as Left } from "../../../assets/images/trang_chu/left.svg";
import { ReactComponent as IconsDownsSvg } from "../../../assets/images/trang_chu/icons_down.svg";

import { Accordion, Button, Col, Container, Image, Row } from "react-bootstrap";
import styled from "styled-components";
import clsx from "clsx";
import { getParent } from "util/getParent";
import { NavLink } from "react-router-dom";

const ReadyStyled = styled.div`
    background-color: rgb(204, 33, 40);
    opacity: 0.9;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    h1 {
        font-weight: 100;
        font-size: 2rem;
        color: rgb(255, 255, 255);
        line-height: 1.25;
    }
    p {
        font-weight: 700;
        color: rgb(255, 255, 255);
        font-size: 3rem;
    }
    .container {
        margin-top: 70px;
    }
    .text-red {
        color: rgb(191, 13, 62);
        font-weight: 700;
        line-height: 3rem;
        &:hover {
            opacity: 0.8;
        }
    }
    @media (max-width: 991px) {
        .container {
            margin-top: 40px;
        }
        h1 {
            font-size: 1.8rem;
        }
        p {
            font-size: 2.4rem;
        }
    }
`;

const PartnerStyled = styled.section`
    padding: 56px 0;
    .partner_title {
        padding: 52px 0;
        h1 {
            flex: 1;
        }
    }
    .partner_img {
        height: 100%;
        img {
            margin: auto;
            max-width: 70%;
        }
    }
    h1 {
        font-size: 2.4rem;
        color: rgb(26, 26, 26);
        font-weight: bold;
        text-transform: uppercase;
        letter-spacing: 0.3rem;
        line-height: 1;
    }
    span {
        color: rgb(191, 13, 62);
    }
    .partner_btn {
        background-color: rgb(255, 255, 255);
        outline: none;
        border: none;
        width: 38px;
        height: 38px;
        &.active {
            background-color: rgb(204, 33, 40);
            path {
                fill: rgb(255, 255, 255);
            }
        }
        &_left {
            path {
                fill: rgb(204, 33, 40);
            }
        }
        &_right {
            path {
                fill: rgb(204, 33, 40);
            }
        }
    }
    .partner_dot_item {
        border-radius: 50%;
        background-color: rgb(204, 33, 40);
        opacity: 0.5;
        width: 12px;
        height: 12px;
        margin: 0 4px;
        &.active {
            opacity: 1;
        }
    }
    @media (max-width: 991px) {
        .partner_img {
            img {
                max-width: 100%;
            }
        }
    }
`;

const WorkStyled = styled.section`
    padding: 40px 0 0;
    .work_training_link {
        text-decoration: none;
    }
    .work_title {
        span {
            color: rgb(204, 33, 40);
        }
    }
    h1 {
        font-size: 24px;
        color: rgb(26, 26, 26);
        font-weight: bold;
        text-transform: uppercase;
        line-height: 1;
    }
    .work_training_img {
        position: relative;
        &_text {
            position: absolute;
            top: 0;
            left: 30px;
            background-color: rgb(204, 33, 40);

            color: #fff;
            padding: 6px 12px;
            border-radius: 4px;
            font-size: 1.1rem;
            font-weight: bold;
        }
        &_title {
            font-size: 1.4rem;
            color: rgb(255, 255, 255);
            font-weight: 500;
            line-height: 1.5;
            position: absolute;
            bottom: 50px;
            left: 46px;
            span {
                font-size: 1.2rem;
                font-weight: normal;
            }
        }
    }
    .work_training_title {
        span {
            font-size: 1.4rem;
            color: rgb(129, 130, 130);
            line-height: 1.867;
        }
        h2 {
            font-size: 2rem;
            color: rgb(19, 20, 20);
            font-weight: bold;
            line-height: 1.3;
        }
        p {
            font-size: 1.6rem;
            color: rgb(98, 98, 98);
            line-height: 1.412;
        }
    }
    .work_item {
        &_title {
            display: flex;
            padding: 4px 12px;
            flex-direction: column;
            justify-content: space-around;
            h2,
            h3 {
                font-size: 1.4rem;
                color: rgb(19, 20, 20);
                font-weight: bold;
                line-height: 1.333;
            }
            span {
                font-size: 13px;
                font-family: "Montserrat";
                color: rgb(129, 130, 130);
                line-height: 2.154;
            }
        }
    }
    .work_btn {
        background-color: rgb(204, 33, 40);
        padding: 10px 24px;
        font-size: 1.4rem;
        border-color: transparent;

        &:hover {
            border-color: transparent;
            opacity: 0.8;
        }
    }
    @media (max-width: 991px) {
        .work_training_title {
            h2 {
                font-size: 1.4rem;
            }
            p {
                font-size: 1.2rem;
            }
        }
        .work_training_img_title {
            bottom: 32px;
            left: 32px;
            font-size: 0.8rem;
        }
        .work_training_img_text {
            font-size: 0.8rem;
        }
        .work_item_title {
            h2,
            h3 {
                font-size: 1rem;
            }
            span {
                font-size: 1rem;
            }
        }
    }
`;

const TrainStyled = styled.section`
    position: relative;
    .train_content {
        position: absolute;
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
    }
    h1 {
        font-size: 2.6rem;
        font-family: "Montserrat";
        color: rgb(255, 255, 255);
        line-height: 0.615;
        line-height: 4rem;
        padding: 14px 0 0 0;
    }
    p {
        font-size: 1.6rem;
        color: rgba(255, 255, 255, 0.5);
        line-height: 1.8;
        width: 515px;
        height: 100%;
    }
    .train_btn {
        background-color: rgb(204, 33, 40);
        padding: 10px 24px;
        font-size: 1.4rem;
        font-weight: bold;
        border: none;
        color: rgba(255, 255, 255, 1);
        &:hover {
            opacity: 0.8;
        }
    }
    .train_img {
        &_link {
            width: 300px;
        }
    }
    @media (max-width: 991px) {
        .train_img {
            ${"" /* display: none; */}
        }
        p {
            font-size: 1.4rem;
        }
    }
`;

const LiveCoachingStyled = styled.div`
    position: relative;
    h1 {
        font-size: 20rem;
        font-weight: bold;
        color: rgba(204, 33, 40, 0.122);
        line-height: 0.84;
        text-align: left;
        position: absolute;
        left: 0;
        bottom: 0;
        z-index: -1;
    }
    @media (max-width: 991px) {
        h1 {
            font-size: 15rem;
        }
    }
`;

const ModelingStyled = styled.section`
    padding: 80px 0 48px;
    .box-shadow {
        border-radius: 10px;
        box-shadow: 1px 20px 26px rgba(0, 0, 0, 0.14);
    }
    .modaling_title {
        padding-bottom: 20px;
        h1 {
            font-size: 2.4rem;
            color: rgb(26, 26, 26);
            font-weight: bold;
            text-transform: uppercase;
            line-height: 4;
            text-align: center;
        }
        p {
            font-size: 1.4rem;
            color: rgb(105, 105, 105);
            line-height: 2;
            text-align: center;
        }
        span {
            color: rgb(204, 33, 40);
        }
    }
    .modaling_list {
        border-radius: 10px;
        background-color: rgb(204, 33, 40);
        box-shadow: 0px 24px 52px 0px rgba(47, 47, 51, 0.2);
        padding: 70px 0 20px;
        svg {
            fill: #fff;
        }
        h2,
        h3 {
            font-size: 1.8rem;
            color: rgb(255, 255, 255);
            font-weight: bold;
            text-transform: uppercase;
            line-height: 1.8;
        }
        h3 {
            font-size: 1.5rem;
        }
    }
    .modaling_item {
        background-color: transparent;
        width: 100%;
        height: 108px;
        display: flex;
        align-items: center;
        justify-content: space-around;
        padding: 0 12px;
        margin-bottom: 12px;
        border-top: 1px solid rgba(255, 255, 255, 1);
        cursor: pointer;
        &_img {
            position: relative;
            &::before {
                content: "";
                position: absolute;
                top: -14px;
                left: -14px;
                width: 90px;
                height: 90px;
                border: 1px solid rgb(255, 255, 255);
                border-radius: 50%;
            }
        }
        &_text {
            width: 60%;
        }
        &.active {
            background-color: rgb(255, 255, 255);
            h2,
            h3 {
                color: rgb(204, 33, 40);
            }
            .modaling_item_img {
                &::before {
                    border: 1px solid rgb(204, 33, 40);
                }
            }
        }
    }
    .modaling_content {
        padding-top: 40px;
        h2 {
            font-size: 2.6rem;
            color: rgb(204, 33, 40);
            font-weight: bold;
            line-height: 1.318;
            text-align: left;
        }
        &_list {
            display: flex;
            justify-content: space-between;
            padding: 46px 0 24px;
        }
        &_item {
            padding-right: 24px;
            position: relative;
            &_text {
                position: absolute;
                bottom: 40px;
                left: 16px;

                h3,
                h4 {
                    font-size: 3rem;
                    color: rgb(255, 255, 255);
                    font-weight: bold;
                    line-height: 1.333;
                }
                h4 {
                    font-size: 1.6rem;
                    line-height: 1;
                }
                p {
                    font-size: 1.2rem;
                    color: rgb(255, 255, 255);
                }
            }
        }
        &_dot {
            border-radius: 50%;
            background-color: rgb(204, 33, 40);
            opacity: 0.5;
            width: 12px;
            height: 12px;
            margin: 0 4px;
            &.active {
                opacity: 1;
            }
        }
    }
    .modaling_btn {
        background-color: rgb(255, 255, 255);
        outline: none;
        border: none;
        width: 38px;
        height: 38px;
        &.active {
            background-color: rgb(204, 33, 40);
            path {
                fill: rgb(255, 255, 255);
            }
        }
        &_left {
            path {
                fill: rgb(204, 33, 40);
            }
        }
        &_right {
            path {
                fill: rgb(204, 33, 40);
            }
        }
    }
    .modaling_content_warrper {
        display: flex;
        width: 200%;
        overflow: hidden;
        transition: transform 0.6s ease;
        &.active_right {
            transform: translateX(-50%);
        }
        &.active_left {
            transform: translateX(0%);
        }
    }
    .modaling_content_item_icons_play {
        position: absolute;
        top: 36%;
        left: 36%;
    }
    @media (max-width: 991px) {
        .modaling_list {
            h2,
            h3 {
                font-size: 1.2rem;
            }
        }
        .modaling_item_img {
            &::before {
                top: 9px;
                left: -8px;
                width: 40px;
                height: 40px;
            }
            svg {
                width: 24px;
            }
        }
        .modaling_item {
            height: 72px;
        }
        .modaling_content_item_text {
            bottom: 4px;
            left: 10px;
            h4 {
                font-size: 1.4rem;
                margin-bottom: 0;
            }
            h3 {
                font-size: 2rem;
            }
            p {
                font-size: 1rem;
                width: 75%;
            }
        }
    }
    @media (max-width: 767px) {
        .modaling_title {
            h1 {
                font-size: 2.2rem;
            }
        }
        .modaling_list {
            h2 {
                font-size: 1rem;
            }
            h3 {
                font-size: 0.8rem;
            }
        }
        .modaling_content {
            h2 {
                font-size: 2.2rem;
            }
        }
    }
`;

const AccordionHeaderStyled = styled(Accordion.Header)`
    .accordion-button {
        padding: 12px 24px;
        font-size: 1.4rem;
        color: rgb(0, 0, 0);
        font-weight: bold;
        &::after {
            background-image: url("https://img.icons8.com/ios/50/000000/double-down--v1.png");
        }
        &:focus {
            border-bottom: 1px solid rgba(0, 0, 0, 0.125);
            box-shadow: none;
        }
        &:not(.collapsed) {
            background-color: #fff;
        }
    }
    span {
        color: rgb(204, 33, 40);
    }
    svg {
        width: 36px;
        margin-right: 20px;
    }
`;

const ProgrammeStyled = styled.div`
    padding-top: 30px;
    &&& {
        .programme_title {
            text-align: center;
            padding-bottom: 40px;
            font-size: 2.4rem;
            font-weight: bold;
            color: #000;
            text-transform: uppercase;
            line-height: 1;
            span {
                color: rgb(204, 33, 40);
            }
        }
        .accordion-item {
            margin-top: 24px;
            border: 1px solid rgba(0, 0, 0, 0.125);
            border-radius: 10px;
            &:first-child {
                border-top: 1px solid rgba(0, 0, 0, 0.125);
            }
            &:last-child {
                border-bottom: 1px solid rgba(0, 0, 0, 0.125);
            }
        }
        .programme_list {
            padding-left: 70px;
        }
        .programme_item {
            padding: 8px 0;
            p {
                font-size: 1.4rem;
                color: rgb(47, 47, 51);
                font-weight: bold;
                text-transform: uppercase;
                line-height: 1.625;
                padding: 0 0 0 12px;
                margin: 0;
            }
        }
        @media (max-width: 991px) {
            p {
                font-size: 1.2rem;
            }
            .programme_item {
                p {
                    font-size: 1.2rem;
                }
            }
        }
        @media (max-width: 767px) {
            .programme_title {
                font-size: 2.2rem;
            }
            p {
                font-size: 1rem;
                line-height: 1.6rem;
            }
            .programme_list {
                padding-left: 24px;
            }
            .programme_item {
                p {
                    font-size: 1rem;
                }
            }
        }
    }
`;

const BtnStyled = styled.div``;
function Home(props) {
    const [indexBtn, setIndexBtn] = useState(-1);
    const [indexModalingItem, setIndexModalingItem] = useState(0);
    const modalingWarpperRef = useRef();
    const handleClickButtonModalingRight = () => {
        setIndexBtn(1);
    };
    const handleClickButtonModalingLeft = () => {
        setIndexBtn(0);
    };
    useEffect(() => {
        if (indexBtn === 1) {
            modalingWarpperRef.current.classList.add("active_right");
            modalingWarpperRef.current.classList.toggle("active_left", false);
        }
        if (indexBtn === 0) {
            modalingWarpperRef.current.classList.add("active_left");
            modalingWarpperRef.current.classList.toggle("active_right", false);
        }
    }, [indexBtn]);

    const ModalingItemClick = (e) => {
        const isCheck = getParent(e.target, ".modaling_item");
        if (isCheck) {
            setIndexModalingItem(+isCheck.dataset.index);
        }
    };
    return (
        <div className="home">
            <Slider />

            {/* Chương trình nổi bật */}
            <ProgrammeStyled>
                <Container>
                    <h1 className="programme_title">
                        CHƯƠNG TRÌNH <span>ĐÀO TẠO NỔI BẬT</span>
                    </h1>
                    <Accordion defaultActiveKey="0" flush>
                        <Row>
                            <Col xs={6}>
                                <Accordion.Item eventKey="0">
                                    <AccordionHeaderStyled>
                                        <Icon1 />
                                        <p>
                                            CHƯƠNG TRÌNH ĐÀO TẠO{" "}
                                            <span> GIÁM ĐỐC</span>
                                        </p>
                                    </AccordionHeaderStyled>
                                    <Accordion.Body>
                                        <ul className="programme_list">
                                            <li className="programme_item d-flex align-items-center">
                                                <Vector5 />
                                                <p> Giám đốc Điều hành - CEO</p>
                                            </li>
                                            <li className="programme_item d-flex align-items-center">
                                                <Vector5 />
                                                <p>Giám đốc Tài chính – CFO</p>
                                            </li>
                                            <li className="programme_item d-flex align-items-center">
                                                <Vector5 />
                                                <p>Giám đốc Kinh Doanh - CCO</p>
                                            </li>
                                            <li className="programme_item d-flex align-items-center">
                                                <Vector5 />
                                                <p> Giám đốc Marketing - CMO</p>
                                            </li>
                                            <li className="programme_item d-flex align-items-center">
                                                <Vector5 />
                                                <p> Giám đốc Sản xuất - COD</p>
                                            </li>
                                            <li className="programme_item d-flex align-items-center">
                                                <Vector5 />
                                                <p> Giám đốc Cộng Nghệ - CTO</p>
                                            </li>
                                        </ul>
                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="1">
                                    <AccordionHeaderStyled>
                                        <Icon2 />
                                        <p>
                                            QUẢN LÝ <span>TRUNG CẤP</span>
                                        </p>
                                    </AccordionHeaderStyled>
                                    <Accordion.Body>
                                        <ul className="programme_list">
                                            <li className="programme_item d-flex align-items-center">
                                                <Vector5 />
                                                <p> Giám đốc Điều hành - CEO</p>
                                            </li>
                                            <li className="programme_item d-flex align-items-center">
                                                <Vector5 />
                                                <p>Giám đốc Tài chính – CFO</p>
                                            </li>
                                            <li className="programme_item d-flex align-items-center">
                                                <Vector5 />
                                                <p>Giám đốc Kinh Doanh - CCO</p>
                                            </li>
                                            <li className="programme_item d-flex align-items-center">
                                                <Vector5 />
                                                <p> Giám đốc Marketing - CMO</p>
                                            </li>
                                            <li className="programme_item d-flex align-items-center">
                                                <Vector5 />
                                                <p> Giám đốc Sản xuất - COD</p>
                                            </li>
                                            <li className="programme_item d-flex align-items-center">
                                                <Vector5 />
                                                <p> Giám đốc Cộng Nghệ - CTO</p>
                                            </li>
                                        </ul>
                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="2">
                                    <AccordionHeaderStyled>
                                        <Icon3 />
                                        <p>
                                            kỸ NĂNG MỀM{" "}
                                            <span>PHÁT TRIỂN NHÂN VIÊN</span>
                                        </p>
                                    </AccordionHeaderStyled>
                                    <Accordion.Body>
                                        <ul className="programme_list">
                                            <li className="programme_item d-flex align-items-center">
                                                <Vector5 />
                                                <p> Giám đốc Điều hành - CEO</p>
                                            </li>
                                            <li className="programme_item d-flex align-items-center">
                                                <Vector5 />
                                                <p>Giám đốc Tài chính – CFO</p>
                                            </li>
                                            <li className="programme_item d-flex align-items-center">
                                                <Vector5 />
                                                <p>Giám đốc Kinh Doanh - CCO</p>
                                            </li>
                                            <li className="programme_item d-flex align-items-center">
                                                <Vector5 />
                                                <p> Giám đốc Marketing - CMO</p>
                                            </li>
                                            <li className="programme_item d-flex align-items-center">
                                                <Vector5 />
                                                <p> Giám đốc Sản xuất - COD</p>
                                            </li>
                                            <li className="programme_item d-flex align-items-center">
                                                <Vector5 />
                                                <p> Giám đốc Cộng Nghệ - CTO</p>
                                            </li>
                                        </ul>
                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="3">
                                    <AccordionHeaderStyled>
                                        <Icon4 />
                                        <p>
                                            KỸ NĂNG SẢN XUẤT{" "}
                                            <span>HIỆN ĐẠI</span>
                                        </p>
                                    </AccordionHeaderStyled>
                                    <Accordion.Body>
                                        <ul className="programme_list">
                                            <li className="programme_item d-flex align-items-center">
                                                <Vector5 />
                                                <p> Giám đốc Điều hành - CEO</p>
                                            </li>
                                            <li className="programme_item d-flex align-items-center">
                                                <Vector5 />
                                                <p>Giám đốc Tài chính – CFO</p>
                                            </li>
                                            <li className="programme_item d-flex align-items-center">
                                                <Vector5 />
                                                <p>Giám đốc Kinh Doanh - CCO</p>
                                            </li>
                                            <li className="programme_item d-flex align-items-center">
                                                <Vector5 />
                                                <p> Giám đốc Marketing - CMO</p>
                                            </li>
                                            <li className="programme_item d-flex align-items-center">
                                                <Vector5 />
                                                <p> Giám đốc Sản xuất - COD</p>
                                            </li>
                                            <li className="programme_item d-flex align-items-center">
                                                <Vector5 />
                                                <p> Giám đốc Cộng Nghệ - CTO</p>
                                            </li>
                                        </ul>
                                    </Accordion.Body>
                                </Accordion.Item>
                            </Col>
                            <Col xs={6}>
                                <Accordion.Item eventKey="4">
                                    <AccordionHeaderStyled>
                                        <Icon1 />
                                        <p>
                                            CHƯƠNG TRÌNH ĐÀO TẠO{" "}
                                            <span> GIÁM ĐỐC</span>
                                        </p>
                                    </AccordionHeaderStyled>
                                    <Accordion.Body>
                                        <ul className="programme_list">
                                            <li className="programme_item d-flex align-items-center">
                                                <Vector5 />
                                                <p> Giám đốc Điều hành - CEO</p>
                                            </li>
                                            <li className="programme_item d-flex align-items-center">
                                                <Vector5 />
                                                <p>Giám đốc Tài chính – CFO</p>
                                            </li>
                                            <li className="programme_item d-flex align-items-center">
                                                <Vector5 />
                                                <p>Giám đốc Kinh Doanh - CCO</p>
                                            </li>
                                            <li className="programme_item d-flex align-items-center">
                                                <Vector5 />
                                                <p> Giám đốc Marketing - CMO</p>
                                            </li>
                                            <li className="programme_item d-flex align-items-center">
                                                <Vector5 />
                                                <p> Giám đốc Sản xuất - COD</p>
                                            </li>
                                            <li className="programme_item d-flex align-items-center">
                                                <Vector5 />
                                                <p> Giám đốc Cộng Nghệ - CTO</p>
                                            </li>
                                        </ul>
                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="5">
                                    <AccordionHeaderStyled>
                                        <Icon2 />
                                        <p>
                                            QUẢN LÝ <span>TRUNG CẤP</span>
                                        </p>
                                    </AccordionHeaderStyled>
                                    <Accordion.Body>
                                        <ul className="programme_list">
                                            <li className="programme_item d-flex align-items-center">
                                                <Vector5 />
                                                <p> Giám đốc Điều hành - CEO</p>
                                            </li>
                                            <li className="programme_item d-flex align-items-center">
                                                <Vector5 />
                                                <p>Giám đốc Tài chính – CFO</p>
                                            </li>
                                            <li className="programme_item d-flex align-items-center">
                                                <Vector5 />
                                                <p>Giám đốc Kinh Doanh - CCO</p>
                                            </li>
                                            <li className="programme_item d-flex align-items-center">
                                                <Vector5 />
                                                <p> Giám đốc Marketing - CMO</p>
                                            </li>
                                            <li className="programme_item d-flex align-items-center">
                                                <Vector5 />
                                                <p> Giám đốc Sản xuất - COD</p>
                                            </li>
                                            <li className="programme_item d-flex align-items-center">
                                                <Vector5 />
                                                <p> Giám đốc Cộng Nghệ - CTO</p>
                                            </li>
                                        </ul>
                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="6">
                                    <AccordionHeaderStyled>
                                        <Icon3 />
                                        <p>
                                            kỸ NĂNG MỀM{" "}
                                            <span>PHÁT TRIỂN NHÂN VIÊN</span>
                                        </p>
                                    </AccordionHeaderStyled>
                                    <Accordion.Body>
                                        <ul className="programme_list">
                                            <li className="programme_item d-flex align-items-center">
                                                <Vector5 />
                                                <p> Giám đốc Điều hành - CEO</p>
                                            </li>
                                            <li className="programme_item d-flex align-items-center">
                                                <Vector5 />
                                                <p>Giám đốc Tài chính – CFO</p>
                                            </li>
                                            <li className="programme_item d-flex align-items-center">
                                                <Vector5 />
                                                <p>Giám đốc Kinh Doanh - CCO</p>
                                            </li>
                                            <li className="programme_item d-flex align-items-center">
                                                <Vector5 />
                                                <p> Giám đốc Marketing - CMO</p>
                                            </li>
                                            <li className="programme_item d-flex align-items-center">
                                                <Vector5 />
                                                <p> Giám đốc Sản xuất - COD</p>
                                            </li>
                                            <li className="programme_item d-flex align-items-center">
                                                <Vector5 />
                                                <p> Giám đốc Cộng Nghệ - CTO</p>
                                            </li>
                                        </ul>
                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="7">
                                    <AccordionHeaderStyled>
                                        <Icon4 />
                                        <p>
                                            KỸ NĂNG SẢN XUẤT{" "}
                                            <span>HIỆN ĐẠI</span>
                                        </p>
                                    </AccordionHeaderStyled>
                                    <Accordion.Body>
                                        <ul className="programme_list">
                                            <li className="programme_item d-flex align-items-center">
                                                <Vector5 />
                                                <p> Giám đốc Điều hành - CEO</p>
                                            </li>
                                            <li className="programme_item d-flex align-items-center">
                                                <Vector5 />
                                                <p>Giám đốc Tài chính – CFO</p>
                                            </li>
                                            <li className="programme_item d-flex align-items-center">
                                                <Vector5 />
                                                <p>Giám đốc Kinh Doanh - CCO</p>
                                            </li>
                                            <li className="programme_item d-flex align-items-center">
                                                <Vector5 />
                                                <p> Giám đốc Marketing - CMO</p>
                                            </li>
                                            <li className="programme_item d-flex align-items-center">
                                                <Vector5 />
                                                <p> Giám đốc Sản xuất - COD</p>
                                            </li>
                                            <li className="programme_item d-flex align-items-center">
                                                <Vector5 />
                                                <p> Giám đốc Cộng Nghệ - CTO</p>
                                            </li>
                                        </ul>
                                    </Accordion.Body>
                                </Accordion.Item>
                            </Col>
                        </Row>
                    </Accordion>
                </Container>
            </ProgrammeStyled>

            {/* Mô hình số hóa */}
            <ModelingStyled>
                <Container>
                    <div className="box-shadow">
                        <div className="modaling_title">
                            <h1>
                                MÔ HÌNH <span>SỐ HÓA BÀI GIẢNG</span>
                            </h1>
                            <p>
                                IFA là viện đào tạo phát triển doanh nghiệp chất
                                lượng hàng đầu Việt Nam <br /> về nội dung
                                chương trình, chất lượng giảng viên và sự chuyên
                                nghiệp
                            </p>
                        </div>
                        <Row>
                            <Col xs={4}>
                                <div className="modaling_list">
                                    <div
                                        className={clsx("modaling_item", {
                                            active: indexModalingItem === 0,
                                        })}
                                        data-index="0"
                                        onClick={ModalingItemClick}
                                    >
                                        <div className="modaling_item_img">
                                            <SvgSoHoa1 />
                                        </div>
                                        <div className="modaling_item_text">
                                            <h2>TƯ LIỆU SỐ HÓA</h2>
                                            <h3>TÀI LIỆU ĐÀO TẠO</h3>
                                        </div>
                                    </div>
                                    <div
                                        className={clsx("modaling_item", {
                                            active: indexModalingItem === 1,
                                        })}
                                        data-index="1"
                                        onClick={ModalingItemClick}
                                    >
                                        <div className="modaling_item_img">
                                            <SvgSoHoa2 />
                                        </div>
                                        <div className="modaling_item_text">
                                            <h2>TƯ LIỆU SỐ HÓA</h2>
                                            <h3>TÀI LIỆU ĐÀO TẠO</h3>
                                        </div>
                                    </div>
                                    <div
                                        className={clsx("modaling_item", {
                                            active: indexModalingItem === 2,
                                        })}
                                        data-index="2"
                                        onClick={ModalingItemClick}
                                    >
                                        <div className="modaling_item_img">
                                            <SvgSoHoa3 />
                                        </div>
                                        <div className="modaling_item_text">
                                            <h2>TƯ LIỆU SỐ HÓA</h2>
                                            <h3>TÀI LIỆU ĐÀO TẠO</h3>
                                        </div>
                                    </div>
                                </div>
                            </Col>
                            <Col xs={8}>
                                <div className="modaling_content">
                                    <div className="d-flex justify-content-between">
                                        <h2>ĐỊNH DẠNG CÁC GÓI</h2>
                                        <div className="modaling_button pe-5">
                                            <Button
                                                className={clsx(
                                                    "modaling_btn modaling_btn_left pe-2",
                                                    { active: indexBtn === 1 },
                                                )}
                                                onClick={
                                                    handleClickButtonModalingLeft
                                                }
                                            >
                                                <Left />
                                            </Button>
                                            <Button
                                                className={clsx(
                                                    "modaling_btn modaling_btn_right",
                                                    { active: indexBtn === 0 },
                                                    { active: indexBtn === -1 },
                                                )}
                                                onClick={
                                                    handleClickButtonModalingRight
                                                }
                                            >
                                                <Right />
                                            </Button>
                                        </div>
                                    </div>
                                    <div className="w-100 overflow-hidden">
                                        <div
                                            className="modaling_content_warrper "
                                            ref={modalingWarpperRef}
                                        >
                                            <div className="modaling_content_list">
                                                <NavLink
                                                    to="/"
                                                    className="modaling_content_link"
                                                >
                                                    <div className="modaling_content_item">
                                                        <img
                                                            src={Image2}
                                                            alt="image"
                                                            className="rounded "
                                                        />
                                                        <div className="modaling_content_item_icons_play">
                                                            <img
                                                                src={IconPlay}
                                                            />
                                                        </div>
                                                        <div className="modaling_content_item_text">
                                                            <h4>Gói</h4>
                                                            <h3>SE5</h3>
                                                            <p>
                                                                Video Animation
                                                                cao cấp
                                                            </p>
                                                        </div>
                                                    </div>
                                                </NavLink>
                                                <NavLink
                                                    to="/"
                                                    className="modaling_content_link"
                                                >
                                                    <div className="modaling_content_item">
                                                        <img
                                                            src={Image1}
                                                            alt="image"
                                                            className="rounded "
                                                        />
                                                        <div className="modaling_content_item_icons_play">
                                                            <img
                                                                src={IconPlay}
                                                            />
                                                        </div>
                                                        <div className="modaling_content_item_text">
                                                            <h4>Gói</h4>
                                                            <h3>SE6</h3>
                                                            <p>
                                                                Kết hợp nhiều
                                                                định dạng <br />{" "}
                                                                (Ghi hình ngoại
                                                                cảnh, tình
                                                                huống, <br />{" "}
                                                                motion
                                                                graphic....)
                                                            </p>
                                                        </div>
                                                    </div>
                                                </NavLink>
                                                <NavLink
                                                    to="/"
                                                    className="modaling_content_link"
                                                >
                                                    <div className="modaling_content_item">
                                                        <img
                                                            src={Image0}
                                                            alt="image"
                                                            className="rounded "
                                                        />
                                                        <div className="modaling_content_item_icons_play">
                                                            <img
                                                                src={IconPlay}
                                                            />
                                                        </div>
                                                        <div className="modaling_content_item_text">
                                                            <h4>Gói</h4>
                                                            <h3>SE7</h3>
                                                            <p>
                                                                Gamification{" "}
                                                                <br /> (Tương
                                                                tác qua nội dung
                                                                bài học <br />{" "}
                                                                và trò chơi)
                                                            </p>
                                                        </div>
                                                    </div>
                                                </NavLink>
                                            </div>
                                            <div className="modaling_content_list">
                                                <NavLink
                                                    to="/"
                                                    className="modaling_content_link"
                                                >
                                                    <div className="modaling_content_item">
                                                        <img
                                                            src={Image2}
                                                            alt="image"
                                                            className="rounded "
                                                        />
                                                        <div className="modaling_content_item_icons_play">
                                                            <img
                                                                src={IconPlay}
                                                            />
                                                        </div>
                                                        <div className="modaling_content_item_text">
                                                            <h4>Gói</h4>
                                                            <h3>SE5</h3>
                                                            <p>
                                                                Video Animation
                                                                cao cấp
                                                            </p>
                                                        </div>
                                                    </div>
                                                </NavLink>
                                                <NavLink
                                                    to="/"
                                                    className="modaling_content_link"
                                                >
                                                    <div className="modaling_content_item">
                                                        <img
                                                            src={Image1}
                                                            alt="image"
                                                            className="rounded "
                                                        />
                                                        <div className="modaling_content_item_icons_play">
                                                            <img
                                                                src={IconPlay}
                                                            />
                                                        </div>
                                                        <div className="modaling_content_item_text">
                                                            <h4>Gói</h4>
                                                            <h3>SE6</h3>
                                                            <p>
                                                                Kết hợp nhiều
                                                                định dạng <br />{" "}
                                                                (Ghi hình ngoại
                                                                cảnh, tình
                                                                huống, <br />{" "}
                                                                motion
                                                                graphic....)
                                                            </p>
                                                        </div>
                                                    </div>
                                                </NavLink>
                                                <NavLink
                                                    to="/"
                                                    className="modaling_content_link"
                                                >
                                                    <div className="modaling_content_item">
                                                        <img
                                                            src={Image0}
                                                            alt="image"
                                                            className="rounded "
                                                        />
                                                        <div className="modaling_content_item_icons_play">
                                                            <img
                                                                src={IconPlay}
                                                            />
                                                        </div>
                                                        <div className="modaling_content_item_text">
                                                            <h4>Gói</h4>
                                                            <h3>SE7</h3>
                                                            <p>
                                                                Gamification{" "}
                                                                <br /> (Tương
                                                                tác qua nội dung
                                                                bài học <br />{" "}
                                                                và trò chơi)
                                                            </p>
                                                        </div>
                                                    </div>
                                                </NavLink>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="d-flex justify-content-center">
                                    <div
                                        className={clsx(
                                            "modaling_content_dot",
                                            { active: indexBtn === 0 },
                                            { active: indexBtn === -1 },
                                        )}
                                    ></div>
                                    <div
                                        className={clsx(
                                            "modaling_content_dot",
                                            { active: indexBtn === 1 },
                                        )}
                                    ></div>
                                </div>
                            </Col>
                        </Row>
                    </div>
                </Container>
            </ModelingStyled>

            {/* Live Coaching */}
            <LiveCoachingStyled>
                <h1>
                    LIVE <br /> COACHING
                </h1>
                <Container>
                    <img
                        className="mx-auto"
                        src={LiveCoaching}
                        alt="live coaching"
                    />
                </Container>
            </LiveCoachingStyled>

            {/* Chương trình đạo tạo */}
            <TrainStyled>
                <img src={Image680} alt="" />
                <div className="train_content">
                    <Container>
                        <h1>ĐÀO TẠO THEO YÊU CẦU</h1>
                        <p>
                            Song song với hoạt động đào tạo được tổ chức thường
                            xuyên tại Trụ sở (Open -Erollment programs), IFA
                            cũng thường xuyên cung cấp các dịch vụ đào tạo theo
                            yêu cầu riêng của từng doang nghiệp trong và ngoài
                            nước
                        </p>
                        <div className="train_button pt-3">
                            <Button
                                variant="outline-light"
                                className="train_btn"
                            >
                                Tìm hiểu thêm
                            </Button>
                        </div>
                        <div className="train_img d-none d-xl-flex">
                            <NavLink to="/home" className="train_img_link">
                                <img src={Image797} alt="Image Training" />
                            </NavLink>
                            <NavLink to="/home" className="train_img_link">
                                <img src={Image797} alt="Image Training" />
                            </NavLink>
                        </div>
                    </Container>
                </div>
            </TrainStyled>

            {/* Các hoạt động */}
            <WorkStyled>
                <h1 className="work_title text-center py-5">
                    CÁC HOẠT ĐỘNG ĐÀO TẠO <span>ĐÃ TRIỂN KHAI</span>
                </h1>
                <Container>
                    <Row>
                        <Col xs={4}>
                            <NavLink to="/" className="work_training_link">
                                <div className="work_training_img">
                                    <div className="work_training_img_text">
                                        ĐÀO TẠO INHOUSE
                                    </div>
                                    <Image
                                        fluid
                                        rounded
                                        src={Image3}
                                        alt="Image 3"
                                    />
                                </div>
                                <div className="work_training_title">
                                    <span>09/12/2020</span>
                                    <h2>
                                        Khóa đào tạo cho <br /> Công ty Cp Khử
                                        Trùng Việt Nam
                                    </h2>
                                    <p>
                                        Chương trình đào tạo cùng Công ty CP Khử
                                        trùng Việt Nam (VFC) tại chi nhánh IFA.
                                    </p>
                                </div>
                            </NavLink>
                        </Col>
                        <Col xs={4}>
                            <div className="work_column_two_list">
                                <NavLink to="/" className="work_training_link">
                                    <div className="work_item  d-flex">
                                        <img src={Image5} alt="Image 5" />
                                        <div className="work_item_title">
                                            <h2>
                                                Khóa đào tạo Nâng cao năng lực
                                            </h2>
                                            <h3>Quản lý Cấp trung - MMM</h3>
                                            <span>26/08/2020</span>
                                        </div>
                                    </div>
                                </NavLink>
                                <NavLink to="/" className="work_training_link">
                                    <div className="work_item pt-5 d-flex">
                                        <img src={Image5} alt="Image 5" />
                                        <div className="work_item_title">
                                            <h2>
                                                Khóa đào tạo Nâng cao năng lực
                                            </h2>
                                            <h3>Quản lý Cấp trung - MMM</h3>
                                            <span>26/08/2020</span>
                                        </div>
                                    </div>
                                </NavLink>
                                <NavLink to="/" className="work_training_link">
                                    <div className="work_item pt-5 d-flex">
                                        <img src={Image5} alt="Image 5" />
                                        <div className="work_item_title">
                                            <h2>
                                                Khóa đào tạo Nâng cao năng lực
                                            </h2>
                                            <h3>Quản lý Cấp trung - MMM</h3>
                                            <span>26/08/2020</span>
                                        </div>
                                    </div>
                                </NavLink>

                                <NavLink to="/" className="work_training_link">
                                    <div className="work_item pt-5 d-flex">
                                        <img src={Image5} alt="Image 5" />
                                        <div className="work_item_title">
                                            <h2>
                                                Khóa đào tạo Nâng cao năng lực
                                            </h2>
                                            <h3>Quản lý Cấp trung - MMM</h3>
                                            <span>26/08/2020</span>
                                        </div>
                                    </div>
                                </NavLink>
                            </div>
                        </Col>
                        <Col xs={4}>
                            <NavLink to="/" className="work_training_link">
                                <div className="work_training_img pb-5">
                                    <div className="work_training_img_text">
                                        ĐÀO TẠO INHOUSE
                                    </div>
                                    <Image
                                        fluid
                                        rounded
                                        src={Image3}
                                        alt="Image 3"
                                    />
                                    <div className="work_training_img_title">
                                        <span>28/07/2020</span>
                                        <p>
                                            KHÓA ĐÀO TẠO SD3 <br /> QUẢN TRỊ
                                            DOANH NGHIỆP
                                        </p>
                                    </div>
                                </div>
                            </NavLink>
                            <NavLink to="/" className="work_training_link">
                                <div className="work_training_img pb-5">
                                    <div className="work_training_img_text">
                                        ĐÀO TẠO INHOUSE
                                    </div>
                                    <Image
                                        fluid
                                        rounded
                                        src={Image3}
                                        alt="Image 3"
                                    />
                                    <div className="work_training_img_title">
                                        <span>28/07/2020</span>
                                        <p>
                                            KHÓA ĐÀO TẠO SD3 <br /> QUẢN TRỊ
                                            DOANH NGHIỆP
                                        </p>
                                    </div>
                                </div>
                            </NavLink>
                        </Col>
                    </Row>
                    <div className="text-center py-5">
                        <Button className="work_btn">Xem thêm</Button>
                    </div>
                </Container>
            </WorkStyled>

            {/* Đối tác */}
            <PartnerStyled>
                <Container>
                    <div className="partner_title text-center d-flex align-items-center">
                        <h1 className="">
                            ĐỐI TÁC ĐÃ <span>TIN CẬY IFA</span>
                        </h1>
                        <div className="partner_button d-none d-lg-block">
                            <Button
                                className={clsx(
                                    "partner_btn partner_btn_left pe-2 active",
                                )}
                            >
                                <Left />
                            </Button>
                            <Button
                                className={clsx("partner_btn partner_btn_left")}
                            >
                                <Right />
                            </Button>
                        </div>
                    </div>
                    <div className="partner_img">
                        <img src={Image_Partner} alt="Hình ảnh đối tác" />
                    </div>
                    <div className="partner_dot d-flex justify-content-center pt-5">
                        <div className="partner_dot_item active"></div>
                        <div className="partner_dot_item"></div>
                    </div>
                </Container>
            </PartnerStyled>

            <section className="" style={{ position: "relative" }}>
                <img src={Image8} alt="Place Your Image 8" />
                <ReadyStyled>
                    <Container>
                        <div className="d-flex align-items-center justify-content-between pe-5">
                            <div>
                                <h1>BẠN ĐÃ SẴN SÀNG</h1>
                                <p>KHAI PHÁ TRI THỨC</p>
                            </div>
                            <Button
                                variant="light"
                                size="lg"
                                className="text-red"
                            >
                                ĐĂNG KÝ NGAY
                            </Button>
                        </div>
                    </Container>
                </ReadyStyled>
            </section>
        </div>
    );
}

export default Home;
