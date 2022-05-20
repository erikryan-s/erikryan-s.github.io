import "./Contact.scss";
import { Email, LinkedIn, GitHub } from "@material-ui/icons";

const Contact = () => {
    const copyText = () => {
        navigator.clipboard.writeText("erik1998serrano@outlook.com");
    };
    return (
        <div className="contact" id="contact">
            <div className="left">
                <img src="assets/shake.svg" alt="" />
            </div>
            <div className="right">
                <div className="bg-text">&#8249;h2&#8250;</div>
                <h2>Contact Me</h2>
                <div className="bg-text">&#8249;h2/&#8250;</div>
                <div className="bg-text">&#8249;p&#8250;</div>
                <p id="mailText">
                    I'm interested in any opportunity - especially ambitious or
                    large projects. However, if you have any other request or
                    questions, don't hesitate to contact me.
                </p>
                <div className="bg-text">&#8249;p/&#8250;</div>
                <div className="icons">
                    <div id="email" onClick={copyText}>
                        <Email fontSize="inherit" />
                    </div>
                    <a
                        id="linkedin"
                        href="https://www.linkedin.com/in/erik-serrano/">
                        <LinkedIn fontSize="inherit" />
                    </a>
                    <a id="github" href="https://github.com/erikryan-s">
                        <GitHub fontSize="inherit" />
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Contact;
