import { useEffect, useState } from "react";
import "./portfolio.scss";
import { featuredPortfolio } from "../../data";

const Portfolio = () => {
    const [selected] = useState("featured");
    const [data, setData] = useState([]);

    useEffect(() => {
        setData(featuredPortfolio);
    }, [selected]);

    return (
        <div className="portfolio" id="portfolio">
            <h1>Projects</h1>
            <div className="container">
                {data.map((d) => (
                    <a href={d.link}>
                        <div className="item">
                            <img src={d.img} alt="" />
                            <h3>{d.title}</h3>
                        </div>
                    </a>
                ))}
            </div>
        </div>
    );
};

export default Portfolio;
