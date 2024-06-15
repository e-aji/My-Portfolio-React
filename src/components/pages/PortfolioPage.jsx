import { useState } from "react";
import PortfolioList from "../PortfolioList";
import data from "../data/portfolio.json";

export default function PortfolioPage() {

    const [portfolio, setPortfolio] = useState(data);

    const onFilterPortfolio = (e) => {

        const filter = e.target.value.toLowerCase();

        if (filter === "") {
            setPortfolio(data);
        }else {
            const filteredPortfolio = data.filter((item) => 
                item.tags.includes(filter)
        );
            setPortfolio(filteredPortfolio);
        }

    };

    return (
        <div>
            <PortfolioList portfolio={portfolio} onFilter={onFilterPortfolio} />
        </div>
    );
}
