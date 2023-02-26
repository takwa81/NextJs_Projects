import React, { useEffect, useMemo, useState } from "react";
import { Container, Col, Row } from "reactstrap";
import SubTitle from "./SubTitle";
import PortfolioItem from "./PortfolioItem";
import styles from '../../styles/Portfolio.module.scss';
import { PortfolioData } from "../../pages/api/data";
import Button from "./Button";


const Portfolio = () => {
    const { portfolio } = PortfolioData();
    const {loading} = PortfolioData();

    const [data, setData] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState();

    useEffect(() => {
        setData(portfolio);
    }, []);

    function getFiltered() {
        if (!selectedCategory) {
            return data;
        }
        return data.filter((item) => item.category === selectedCategory);
    }

    // avoid duplicate
    var filteredList = useMemo(getFiltered, [selectedCategory, data]);


    // Categories 
    const categories = data.map(i => i.category);
    const categoryFilter = data.filter(({ category }, index) => !categories.includes(category , index + 1))
    

    const active = `${styles.tab_btn_active}`;

    return (
        <section id="portfolio">
            <Container>
                <Row>
                    <Col lg="6" md="6" className="mb-5">
                        <SubTitle subtitle=" My portfolio" />
                        <h4 className="mt-4">Some of my works</h4>
                    </Col>

                    {
                        loading ? <SubTitle subtitle="Loading ....."/>:
                        <>
                        <Col lg="6" md="6">
                        <div className={`${styles.tab_btns} text-end`}>
                           

                            {categoryFilter?.map((item , index) => (
                               
                                <Button style={` ${selectedCategory === item.category ? active : ""} secondary_btn text-white`}
                                text={item.category} 
                                data={() => setSelectedCategory(item.category)} />
                            ))}

                        </div>
                    </Col>

                    {filteredList?.map((item) => (
                        <Col lg="4" md="4" sm="6" key={item.id}>
                            <PortfolioItem item={item} />
                        </Col>
                    ))}
                        </>
                    }
                </Row>
            </Container>
        </section>

    );
}

export default Portfolio;