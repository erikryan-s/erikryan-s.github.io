import "./About.scss";

const About = () => {
    return (
        <div className="about" id="about">
            <div className="left">
                <div className="bg-text">&#8249;h2&#8250;</div>
                <h2>About Me</h2>
                <div className="bg-text">&#8249;h2/&#8250;</div>
                <div className="bg-text">&#8249;p&#8250;</div>
                <p>
                    I'm a very ambitious developer looking for a role in a
                    company which will provide me an opportunity to work with
                    the latest technologies on challenging and diverse projects.
                </p>
                <p>
                    I'm quietly confident, naturally curious, and perpetually
                    working on improving my skills one problem at a time.
                </p>
                <div className="bg-text">&#8249;p/&#8250;</div>
            </div>

            <div className="right">
                <img src="assets/dev.svg" alt="" />
            </div>
        </div>
    );
};

export default About;
