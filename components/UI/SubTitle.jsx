import React from "react";
import styles from '../../styles/Subtitle.module.scss';

const SubTitle = (props) =>{
    return(
      <h5 className={`${styles.subtitle}`}>{props.subtitle}</h5>  
    );
}

export default SubTitle ;