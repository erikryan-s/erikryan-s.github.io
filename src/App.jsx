import Topbar from "./components/Navbar/Navbar";
import Intro from "./components/intro/Intro";
import About from "./components/about/About";
import Portfolio from "./components/projects/Projects";
import Contact from "./components/contact/Contact";
import "./App.scss";
import { useState } from "react";
import Menu from "./components/menu/Menu";

export const copyText = () => {
    navigator.clipboard.writeText("erik1998serrano@outlook.com");
};

const App = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    return (
        <div className="app">
            <Topbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
            <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
            <div className="sections">
                <Intro />
                <About />
                <Portfolio />
                <Contact />
            </div>
        </div>
    );
};

export default App;
