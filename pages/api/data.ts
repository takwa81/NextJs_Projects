import React, { useEffect, useState } from "react";
import Config from "./config";

const {http} = Config() ;

export function PortfolioData() {
    const [portfolio , setPortfolio] = useState([]) ;
    useEffect(()=>{
        const getPortfolio = async() =>{
            const {data: res} = await http.get("/products") ;
            setPortfolio(res);
          }
          getPortfolio();
    }, []);
    return {
        portfolio }
}