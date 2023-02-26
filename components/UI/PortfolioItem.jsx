import React from "react";
import styles from "../../styles/Portfolio-item.module.scss";
import Image from "next/image";
import Link from "next/link";
import Button from "./Button";

const PortfolioItem = (props) => {
  const { title, img, keyword } = props.item;
  return (
    <div className={`${styles.portfolio_item}`}>
      <div className="bg-transparent">
        <h6>{title}</h6>
      </div>

      <div className={`${styles.portfolio_img}`}>
        <Image alt="portfolio-img" src={img} width="315" height="250" />
      </div>

      <div className={`${styles.portfolio_live} bg-transparent`}>
        <Button destination="#" style="primary_btn" text="Detail" />
      </div>
    </div>
  );
};

export default PortfolioItem;
