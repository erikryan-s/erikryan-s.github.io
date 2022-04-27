import "./about.scss";

const About = () => {
    return (
        <div className="about" id="about">
            <div className="left">
                <img src="assets/dev.svg" alt="" />
            </div>
            <div className="right">
                <h2>About Me</h2>
                <p>
                    I'm very ambitious developer looking for a role in
                    established IT company with the opportunity to work with the
                    latest technologies on challenging and diverse projects.
                </p>
                <p align="LEFT">
                    I'm quietly confident, naturally curious, and perpetually
                    working on improving my chops one design problem at a time.
                </p>
            </div>
        </div>
    );
};

export default About;
