import React from "react";
import { Col, Container, Row } from "reactstrap";
import SubTitle from "./SubTitle";
import styles from '../../styles/Contact.module.scss'
import Link from "next/link";
import Form from "./Form";

const Contact = () => {

    return (
        <section id="contact" className={`${styles.contact}`}>
            <Container>
                <Row>
                    <Col lg='6' md='6'>
                        <SubTitle subtitle="Contact Me" />
                        <h3 className="mt-4 mb-4">Contact With Me</h3>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sunt expedita, dolor necessitatibus ducimus nulla fuga vero natus porro reprehenderit laudantium nisi eligendi odit deleniti aspernatur quisquam, obcaecati est ratione quaerat.</p>
                        <ul className={`${styles.contact_info}`}>
                            <li className={`${styles.info_item}`}>
                                <span><i className="ri-map-pin-line"></i></span>
                                <p>Syria __ Damascuse</p>
                            </li>
                            <li className={`${styles.info_item}`}>
                                <span><i className="ri-mail-line"></i></span>
                                <p>takwasyr81@gmail.com</p>
                            </li>
                            <li className={`${styles.info_item}`}>
                                <span><i className="ri-phone-line"></i></span>
                                <p>+963981413522</p>
                            </li>
                        </ul>
                        <div className={`${styles.social_links}`}>
                            <Link href="#">
                                <i className="ri-youtube-line"></i>
                            </Link>
                            <Link href="#">
                                <i className="ri-github-line"></i>
                            </Link>
                            <Link href="#">
                                <i className="ri-facebook-line"></i>
                            </Link>
                            <Link href="#">
                                <i className="ri-linkedin-line"></i>
                            </Link>
                            <Link href="#">
                                <i className="ri-instagram-line"></i>
                            </Link>
                        </div>
                    </Col>
                    <Col lg='6' md='6'>
                        <Form />
                    </Col>
                </Row>
            </Container>
        </section>
    );
}

export default Contact;