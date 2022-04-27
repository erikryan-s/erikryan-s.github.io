import "./About.scss";

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
                <h3>My Stacks</h3>
                <div className="icons">
                    <div class="one">
                        <img src="assets/stacks/js.svg" alt="" />
                    </div>
                    <div class="two">
                        <img src="assets/stacks/css.svg" alt="" />
                    </div>
                    <div class="three">
                        <img src="assets/stacks/sass.svg" alt="" />
                    </div>
                    <div class="four">
                        <img src="assets/stacks/html.svg" alt="" />
                    </div>
                    <div class="five">
                        <img src="assets/stacks/git.svg" alt="" />
                    </div>
                    <div class="six">
                        <img src="assets/stacks/java.svg" alt="" />
                    </div>
                    <div class="seven">
                        <img src="assets/stacks/react.svg" alt="" />
                    </div>
                    <div class="eight">
                        <img src="assets/stacks/springboot.svg" alt="" />
                    </div>
                    <div class="nine">
                        <img src="assets/stacks/sql.svg" alt="" />
                    </div>
                    <div class="ten">
                        <img src="assets/stacks/mysql.svg" alt="" />
                    </div>
                    <div class="eleven">
                        <img src="assets/stacks/firestore.svg" alt="" />
                    </div>
                    <div class="twelve">
                        <img src="assets/stacks/aws.svg" alt="" />
                    </div>
                </div>
                <div className="icons"></div>
            </div>

            <div className="right">
                <img src="assets/dev.svg" alt="" />
            </div>
        </div>
    );
};

export default About;
