import React from "react";
import styles from '../styles/Footer.module.scss';
import Link from "next/link";
import { Col, Container, Row } from "reactstrap";

const nav_link = [
    {
        path: "/",
        display: "Home",
    },
    {
        path: "#about",
        display: "About",
    },
    {
        path: "#services",
        display: "Services",
    },
    {
        path: "#portfolio",
        display: "Portfolio",
    },
    {
        path: "#contact",
        display: "Contact",
    },
];

const Footer = () =>{

    const date = new Date();
    const year = date.getFullYear();
    return (
        <footer>
            <Container>
                <Row>
                    {/* Footer Top */}
                    <Col lg="6">
                    <div className={`${styles.nav_menu}`}>
                            {nav_link.map((item, index) => (
                                <Link href={item.path} key={index}>
                                    {item.display}
                                </Link>
                            ))}
                          
                        </div>
                    </Col>
                    {/*  Created */}
                    <Col lg="6">
                        <div className={`${styles.footer_created}`}>
                            <h6>Created By Takwa Al Nassouh</h6>
                        </div>
                    </Col>
                    {/* Footer Bottom */}
                    <Col lg="12">
                        <div className={`${styles.footer_copyright}`}>
                            <p>&copy; CopyRight {year} = Developed by Takwa Al Nassouh. All Right reserved</p>
                        </div>
                    </Col>
                </Row>
            </Container>
        </footer>
    )
}

export default Footer;