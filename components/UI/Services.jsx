import React from "react";
import { Col, Container, Row } from "reactstrap";
import styles from '../../styles/Services.module.scss';
import SubTitle from "./SubTitle";
import ServiceItem from "./ServiceItem";

const Services = () => {
    return (
        <section id="services">
        <Container>
          <Row>
            <Col lg="6" md="6">
              <div className={`${styles.services_container}`}>
                <div>
                  <ServiceItem title="App Development" icon="ri-apps-line" />
  
                  <ServiceItem title="Web Development" icon="ri-computer-line" />
                </div>

                <ServiceItem title="Full-Stack Development" icon="ri-code-s-slash-line"/>
              </div>
            </Col>
  
            <Col lg="6" md="6" className={`${styles.service_title}`}>
              <SubTitle subtitle="What I do" />
              <h3 className="mb-0 mt-4">Better Design,</h3>
              <h3 className="mb-4">Better Code</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Non amet
                culpa nobis corporis officiis, numquam cupiditate, enim expedita
                eveniet dolorum, aliquid nesciunt sapiente illo voluptatum!
                Dolores fuga mollitia atque, placeat minima quibusdam accusantium!
                Veniam, non distinctio dolorem rerum laboriosam deleniti.
              </p>
            </Col>
          </Row>
        </Container>
      </section>
  
    );
}

export default Services;