import Link from "next/link";
import React from "react";
import SubTitle from "./SubTitle";
import styles from '../../styles/About.module.css';
import img01 from "../../public/images/person.jpg";
import img02 from "../../public/images/person.jpg";
import img03 from "../../public/images/person.jpg";
import img04 from "../../public/images/person.jpg";
import { Col, Container, Row } from "reactstrap";
import Image from "next/image";


const About = () =>{

    return(
        <section id="about">
        <Container>
          <Row>
            <Col lg="6" className={`${styles.about_content}`}>
              <SubTitle subtitle="About me" />
              <h3 className="mt-4">I&apos;m here</h3>
              <h3 className="mb-4">to help your next project</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt
                neque asperiores temporibus quo saepe odio, esse labore libero
                obcaecati quidem explicabo blanditiis deleniti ex vitae ratione
                ullam fugiat dicta eum sint officiis porro illum quia. Error quam
                cum excepturi beatae.
              </p>
  
              <div className=" d-flex align-items-center gap-5">
                <div>
                  <h6 className=" d-flex align-items-center gap-2 mt-3 fw-normal">
                    <span className={`${styles.about_icon}`}>
                      <i className="ri-checkbox-circle-line"></i>
                    </span>
                    Problem Solving
                  </h6>
  
                  <h6 className=" d-flex align-items-center gap-2 mt-3 fw-normal">
                    <span className={`${styles.about_icon}`}>
                      <i className="ri-checkbox-circle-line"></i>
                    </span>
                    A Lot of Idea
                  </h6>
                </div>
  
                <div>
                  <h6 className=" d-flex align-items-center gap-2 mt-3 fw-normal">
                    <span className={`${styles.about_icon}`}>
                      <i className="ri-checkbox-circle-line"></i>
                    </span>
                    Clean Code
                  </h6>
  
                  <h6 className=" d-flex align-items-center gap-2 mt-3 fw-normal">
                    <span className={`${styles.about_icon}`}>
                      <i className="ri-checkbox-circle-line"></i>
                    </span>
                    High Quality
                  </h6>
                </div>
              </div>
  
              <div className="mt-5">
                <button className="primary_btn">
                  <Link href="#portfolio">My Portfolio</Link>
                </button>
  
                <button className="secondary_btn">
                  <Link href="#">Download CV</Link>
                </button>
              </div>
            </Col>
  
            <Col lg="6">
              <div
                className={`${styles.about_img_gallery} d-flex gap-4 justify-content-end`}
              >
                <div className=" d-flex flex-column mb-3">
                  <div
                    className={`${styles.about_img} ${styles.about_img_box}`}
                  >
                    <Image width="200" height="200" src={img01} alt="about-img" />
                  </div>
  
                  <div
                    className={`${styles.about_img} ${styles.about_img_box}`}
                  >
                    <Image width="200" height="200" src={img02} alt="about-img" />
                  </div>
                </div>
  
                <div className=" d-flex flex-column mb-3">
                  <div
                    className={`${styles.about_img} ${styles.about_img_box}`}
                  >
                    <Image width="200" height="200" src={img03} alt="about-img" />
                  </div>
  
                  <div
                    className={`${styles.about_img} ${styles.about_img_box}`}
                  >
                    <Image width="200" height="200" src={img04} alt="about-img" />
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    );
}

export default About ;