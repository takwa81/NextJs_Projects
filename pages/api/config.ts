import React from "react";
import axios from "axios";

export default function Config (){
    const http = axios.create({
        baseURL:"https://fakestoreapi.com",
    });
    return {
        http
    }
}

