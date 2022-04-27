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
            <h1>Projects</h1>
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
