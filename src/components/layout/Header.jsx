import React, { useState } from "react";
import { Link } from "react-router-dom";


// import bootstrap components
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const Header = () => {
    return (
        <>
            <header id="header" className="header">
                <div className="top-bar">
                    <Container className="">
                        <Row>
                            <Col className="col-lg-10 col-12">
                                <div class="contact-info">
                                    <ul class="clearfix">
                                        <li>
                                            <span>Call Us:</span> 548978478
                                        </li>
                                        <li>
                                            <span>Email us:</span>{" "}
                                            demo@example.com
                                        </li>
                                        <li>
                                            <span>Our address:</span> 45 Dreem
                                            street Austria
                                        </li>
                                    </ul>
                                </div>
                            </Col>

                            <Col className="col-lg-2 col-2">
                                <div class="social">
                                    <ul class="clearfix">
                                        <li>
                                            <a href="/">
                                                <i class="bx bxl-facebook"></i>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="/">
                                                <i class="bx bxl-twitter"></i>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="/">
                                                <i class="bx bxl-linkedin"></i>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="/">
                                                <i class="bx bxl-pinterest"></i>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="/">
                                                <i class="bx bxl-skype"></i>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </div>

                <div className="main-header">
                    <Container>
                        <div className="header-logo"></div>
                        <div className="navbar"></div>
                    </Container>
                </div>
            </header>
        </>
    );
};

export default Header;
