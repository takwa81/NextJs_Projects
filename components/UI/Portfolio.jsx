import React, { useEffect, useState } from "react";
import { Container, Col, Row } from "reactstrap";
import SubTitle from "./SubTitle";
import portfolioData from '../data/portfolio';
import PortfolioItem from "./PortfolioItem";
import styles from '../../styles/Portfolio.module.css';
const Portfolio = () => {

    const [filter, setFilter] = useState("Web App");
    const [data, setData] = useState();

    useEffect(() => {
        if (filter === "Web App") {
            const filteredData = portfolioData.filter(
                (item) => item.category === filter
            );

            setData(filteredData);
        }

        if (filter === "Web Design") {
            const filteredData = portfolioData.filter(
                (item) => item.category === filter
            );

            setData(filteredData);
        }
    }, [filter]);

    const active = `${styles.tab_btn_active}`;

    return (
        <section id="portfolio">
            <Container>
                <Row>
                    <Col lg="6" md="6" className="mb-5">
                        <SubTitle subtitle=" My portfolio" />
                        <h4 className="mt-4">Some of my works</h4>
                    </Col>

                    <Col lg="6" md="6">
                        <div className={`${styles.tab_btns} text-end`}>
                            <button
                                className={` ${filter === "Web App" ? active : ""
                                    } secondary_btn text-white`}
                                onClick={() => setFilter("Web App")}
                            >
                                Web App
                            </button>
                            <button
                                className={`${filter === "Web Design" ? active : ""
                                    } secondary_btn text-white`}
                                onClick={() => setFilter("Web Design")}
                            >
                                Web Design
                            </button>
                        </div>
                    </Col>

                    {data?.map((item) => (
                        <Col lg="4" md="4" sm="6" key={item.id}>
                            <PortfolioItem item={item} />
                        </Col>
                    ))}
                </Row>
            </Container>
        </section>

    );
}

export default Portfolio;