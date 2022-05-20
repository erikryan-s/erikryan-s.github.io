import { useEffect, useState } from "react";
import "./Projects.scss";
import { featuredProjects } from "../../data/data";

const Projects = () => {
    const [selected] = useState("featured");
    const [data, setData] = useState([]);

    useEffect(() => {
        setData(featuredProjects);
    }, [selected]);

    return (
        <div className="projects" id="projects">
            <div className="bg-text">&#8249;h2&#8250;</div>
            <h2>Projects</h2>
            <div className="bg-text">&#8249;h2/&#8250;</div>
            <div className="container">
                {data.map((d) => (
                    <a href={d.link} key={d.id}>
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

export default Projects;
