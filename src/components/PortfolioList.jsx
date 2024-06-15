import { useState } from "react";
import PortfolioPage from "./pages/PortfolioPage";

export default functiion PortfolioList ({ portfolio, onFilter }) {

    return (
        <div className=""> 
            <div className="">
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
                portfolio.map((item, index) => {
                    return (<PortfolioItem item={item} />)
                })
            }
        </div>
    )
    
}