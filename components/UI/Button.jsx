import Link from "next/link";
import React from "react";


const Button = (props) =>{

    return(
        <button className={props.style}><Link href={props.destination}>{props.text}</Link></button>
    )
}

export default Button ;