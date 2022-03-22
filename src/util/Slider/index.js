import React, { useState } from "react";
import { Button, Carousel, Container, Image } from "react-bootstrap";
import ImageSlider1 from "./../../assets/images/trang_chu/slider_image_1.png";
import ImageSlider2 from "./../../assets/images/trang_chu/slider_image_2.png";
import Placeholder from "./../../assets/images/trang_chu/placeholder.png";
import { ReactComponent as IconPlay } from "./../../assets/images/trang_chu/icon_play.svg";
import { ReactComponent as RightSvg } from "./../../assets/images/trang_chu/right.svg";

import styled from "styled-components";

const CarouselCaptionStyled = styled(Carousel.Caption)`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    padding: 0;
    .container {
        height: 100%;
    }
    .silder_content {
        padding-top: 100px;
        text-align: right;
        h1 {
            font-size: 6rem;
            color: rgb(255, 255, 255);
            font-weight: bold;
            line-height: 1.711;
        }
        p {
            font-size: 1.6rem;
            font-family: "Montserrat";
            color: rgb(255, 255, 255);
            line-height: 2;
            width: 50%;
            margin: 0 0 0 auto;
            text-shadow: 0px 2px 8px rgba(17, 17, 17, 0.68);
        }
        img {
            margin: 0 0 0 auto;
        }
    }
    .slider_button {
        display: flex;
        justify-content: flex-end;
    }
    .slider_button_wrapper {
        padding: 0 24px;
    }
    .slider_btn {
        font-size: 1.6rem;
        font-weight: bold;
        color: rgb(14, 85, 77);
        padding: 10px 40px;
        line-height: 3rem;
        background: #fff;
        border: none;
        position: relative;
    }
    .slider_icons {
        background: #fff;
        position: absolute;
        top: 7px;
        right: -18px;
        border: 2px solid rgb(14, 85, 77);
        border-radius: 50%;
        width: 34px;
        height: 34px;
        svg {
            transform: translateY(-3px);
        }
    }
    @media (max-width: 1200px) {
        .silder_content {
            padding: 40px 24px 0;
            h1 {
                font-size: 3rem;
            }
            p {
                font-size: 1.4rem;
                width: 60%;
            }
            img {
                width: 150px;
            }
        }
        .slider_btn {
            font-size: 1.4rem;

            padding: 4px 20px;
        }
        .slider_icons {
            width: 28px;
            height: 28px;
            svg {
                width: 20px;
                transform: translateY(-4px);
            }
        }
        .carousel-control-next {
            width: 10%;
        }
    }
    @media (max-width: 991px) {
        .silder_content {
            padding: 20px 12px 0;
            h1 {
                font-size: 2rem;
            }
            p {
                font-size: 1.2rem;
                width: 60%;
            }
            img {
                width: 150px;
            }
        }
    }
`;

const SliderStyled = styled.div`
    &&& {
        @media (max-width: 1200px) {
            .carousel-control-next,
            .carousel-control-prev {
                width: 6%;
            }
        }
    }
`;

function Slider(props) {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };

    return (
        <SliderStyled>
            <Carousel activeIndex={index} onSelect={handleSelect}>
                <Carousel.Item interval={4000}>
                    <img
                        className="d-block w-100"
                        src={ImageSlider1}
                        alt="First slide"
                    />
                    <CarouselCaptionStyled>
                        <Container>
                            <div className="silder_content">
                                <img src={Placeholder} alt="Placeholder" />
                                <h1>LMS SMARTEDU</h1>
                                <p>
                                    SmartEdu - hệ thống quản lý đào tạo trực
                                    tuyến thế hệ mới do Viện Quản trị và Tài
                                    chính (IFA) phát triển. Học viện được trải
                                    nghiệm công nghệ 4.0, giáo trình chuẩn đầu
                                    ra quốc tết cùng cộng đồng học tạp trực
                                    tuyến lần đầu có mặt tại Việt Nam.
                                </p>
                                <div className="slider_button">
                                    <div className="slider_button_wrapper">
                                        <Button className="slider_btn">
                                            Đăng ký tư vấn
                                            <div className="slider_icons">
                                                <RightSvg
                                                    style={{
                                                        fill: "rgb(14,85,77)",
                                                    }}
                                                />
                                            </div>
                                        </Button>
                                    </div>
                                    <div className="slider_button_wrapper">
                                        <Button className="slider_btn">
                                            Xem chi tiết
                                            <div className="slider_icons">
                                                <IconPlay />
                                            </div>
                                        </Button>
                                    </div>
                                </div>
                            </div>
                        </Container>
                    </CarouselCaptionStyled>
                </Carousel.Item>
                <Carousel.Item interval={4000}>
                    <img
                        className="d-block w-100"
                        src={ImageSlider2}
                        alt="First slide"
                    />
                    <CarouselCaptionStyled>
                        <Container>
                            <div className="silder_content">
                                <img src={Placeholder} alt="Placeholder" />
                                <h1>LMS SMARTEDU</h1>
                                <p>
                                    SmartEdu - hệ thống quản lý đào tạo trực
                                    tuyến thế hệ mới do Viện Quản trị và Tài
                                    chính (IFA) phát triển. Học viện được trải
                                    nghiệm công nghệ 4.0, giáo trình chuẩn đầu
                                    ra quốc tết cùng cộng đồng học tạp trực
                                    tuyến lần đầu có mặt tại Việt Nam.
                                </p>
                                <div className="slider_button">
                                    <div className="slider_button_wrapper">
                                        <Button className="slider_btn">
                                            Đăng ký tư vấn
                                            <div className="slider_icons">
                                                <RightSvg
                                                    style={{
                                                        fill: "rgb(14,85,77)",
                                                    }}
                                                />
                                            </div>
                                        </Button>
                                    </div>
                                    <div className="slider_button_wrapper">
                                        <Button className="slider_btn">
                                            Xem chi tiết
                                            <div className="slider_icons">
                                                <IconPlay />
                                            </div>
                                        </Button>
                                    </div>
                                </div>
                            </div>
                        </Container>
                    </CarouselCaptionStyled>
                </Carousel.Item>
            </Carousel>
        </SliderStyled>
    );
}

export default Slider;
