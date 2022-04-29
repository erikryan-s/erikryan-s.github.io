import "./About.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faHtml5,
    faCss3Alt,
    faSass,
    faJsSquare,
    faGitAlt,
    faReact,
    faAws,
    faJava,
} from "@fortawesome/free-brands-svg-icons";

const About = () => {
    return (
        <div className="about" id="about">
            <div className="left">
                <h2>About Me</h2>
                <p>
                    I'm a very ambitious developer looking for a role in a
                    company which will provide me an opportunity to work with
                    the latest technologies on challenging and diverse projects.
                </p>
                <p>
                    I'm quietly confident, naturally curious, and perpetually
                    working on improving my skills one problem at a time.
                </p>
                <div className="stacks">
                    <h3>My Stacks include:</h3>
                    <div className="icons">
                        <div class="one">
                            <FontAwesomeIcon icon={faHtml5} size="3x" />
                        </div>
                        <div class="two">
                            <FontAwesomeIcon icon={faCss3Alt} size="3x" />
                        </div>
                        <div class="three">
                            <FontAwesomeIcon icon={faSass} size="3x" />
                        </div>
                        <div class="four">
                            <FontAwesomeIcon icon={faJsSquare} size="3x" />
                        </div>
                        <div class="five">
                            <FontAwesomeIcon icon={faGitAlt} size="3x" />
                        </div>
                        <div class="six">
                            <FontAwesomeIcon icon={faReact} size="3x" />
                        </div>
                        <div class="seven">
                            <FontAwesomeIcon icon={faAws} size="3x" />
                        </div>
                        <div class="eight">
                            <FontAwesomeIcon icon={faJava} size="3x" />
                        </div>
                    </div>
                    <div className="icons"></div>
                    <h4>and more...</h4>
                </div>
            </div>

            <div className="right">
                <img src="assets/dev.svg" alt="" />
            </div>
        </div>
    );
};

export default About;
