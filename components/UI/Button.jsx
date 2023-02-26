import Link from "next/link";
import React from "react";


const Button = (props) =>{

    return(
        <button className={props.style} onClick={props.data}>{props.text}</button>
    )
}

export default Button ;