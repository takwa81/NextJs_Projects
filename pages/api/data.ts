import React, { useEffect, useState } from "react";
import Config from "./config";

const {http} = Config() ;

export function PortfolioData() {
    const [portfolio , setPortfolio] = useState([]) ;
    const [loading, setLoading] = useState(false);
    let componentMounted = true;

    useEffect(()=>{
        const getPortfolio = async() =>{
            setLoading(true);
            await http.get("/products").then((res) => {            
                if (componentMounted) {
                    setPortfolio(res.data);
                    setLoading(false);
                }
                return () => {
                    componentMounted = false;
                }
            });
          }
          getPortfolio();
    }, []);
    return {
        portfolio ,
    loading
 }
}