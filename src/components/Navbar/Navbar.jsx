import "./Navbar.scss";
import { Person, Mail } from "@material-ui/icons";

const Navbar = ({ menuOpen, setMenuOpen }) => {
    const copyText = () => {
        navigator.clipboard.writeText("erik1998serrano@outlook.com");
    };
    return (
        <div className={"navbar " + (menuOpen && "active")}>
            <div className="wrapper">
                <div className="left">
                    <a href="#intro" className="logo">
                        erikryan-s
                    </a>
                    <div className="itemContainer">
                        <Person className="icon" />
                        <span>+61 420 216 717</span>
                    </div>
                    <div className="itemContainer">
                        <Mail className="icon" />
                        <span id="email" onClick={copyText}>
                            erik1998serrano@outlook.com
                        </span>
                    </div>
                </div>
                <div className="right">
                    <div
                        className="hamburger"
                        onClick={() => setMenuOpen(!menuOpen)}>
                        <span className="line1"></span>
                        <span className="line2"></span>
                        <span className="line3"></span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
