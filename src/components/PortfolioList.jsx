// import { useState } from "react";
import PortfolioItem from "./PortfolioItem";

export default function PortfolioList ({ portfolio, onFilter }) {

    return (
        <div> 
            <div>
                <select onChange={onFilter}>

                    <option value="">All</option>
                    <option value="javascript">JavaScript</option>
                    <option value="react">React</option>
                    <option value="html">HTML</option> 
                    <option value="css">CSS</option> 
                    <option value="sql">SQL</option>
                
                </select>
            </div>

            {
                portfolio.map((item) => {
                    return (<PortfolioItem key= {item.id} item={item} />)
                })
            }
        </div>
    )
    
}