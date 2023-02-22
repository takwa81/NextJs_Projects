import React from "react";
import SubTitle from "./SubTitle";
import { Col, Container, Row } from "reactstrap";
import Image from "next/image";
import Link from "next/link";
import BannerImage from '../../public/images/person.jpg';
import styles from '../../styles/Banner.module.css';

const Banner = () => {
    return (
        <section className={`${styles.banner}`}>
            <Container>
                <Row>
                    {/* Content Banner */}
                    <Col lg='6' md='6'>
                        <div className={`${styles.banner_content}`}>
                            <SubTitle subtitle="Hello" />
                            <h2 className="mt-3 mb-3">I'm Takwa Al Nassouh</h2>
                            <h5 className="mb-4">FullStack Developer </h5>
                            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vel suscipit tenetur tempore hic itaque, odit ducimus quidem nostrum eaque quisquam libero maxime modi, magni ut obcaecati porro ea voluptatem adipisci!</p>
                            <div className="mt-5 mb-5">
                                <button className="primary_btn"><Link href='#'>About Me</Link></button>
                                <button className="secondary_btn"><Link href='#'>Download Cv</Link></button>
                            </div>
                        </div>
                    </Col>
                    {/* Image Banner */}
                   
                    <Col lg="6" md="6">
                        <div className={`${styles.banner_img} text-end mb-5`}>
                            <Image alt="Banner Image" src={BannerImage} width="400" height="400" />

                            {/* <div className={`${styles.banner_skills}`}>
                                <h6>Skills</h6>
                                <span>
                                    <i className="ri-bar-chart-line"></i>
                                </span>
                                <span>
                                    <i className="ri-bar-chart-line"></i>
                                </span>
                                <span>
                                    <i className="ri-bar-chart-line"></i>
                                </span>
                                <span>
                                    <i className="ri-bar-chart-line"></i>
                                </span>
                                <span>
                                    <i className="ri-bar-chart-line"></i>
                                </span>
                                <span>
                                    <i className="ri-bar-chart-line"></i>
                                </span>
                            </div> */}

                            <div className={`${styles.banner_experience} d-flex align-items-center gap-3`}>
                                <span>
                                    <i className="ri-lightbulb-flash-line"></i>
                                </span>
                                <div className="bg-transparent">
                                    <h6>Experience</h6>
                                    <h5 className="mb-0">1 Years</h5>
                                </div>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    );
}

export default Banner;