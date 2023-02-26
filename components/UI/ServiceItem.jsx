import React from "react";
import styles from '../../styles/Service-item.module.scss'

const ServiceItem = ({title , icon}) =>{
    return(
        <div className={`${styles.service_item}`}>
            <span>
                <i className={icon}></i>
            </span>
            <h5>{title}</h5>
        </div>

    );
}

export default ServiceItem ;