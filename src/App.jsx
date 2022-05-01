import Topbar from "./components/Navbar/Navbar";
import Intro from "./components/Intro/Intro";
import About from "./components/About/About";
import Stacks from "./components/Stacks/Stacks";
import Portfolio from "./components/Projects/Projects";
import Contact from "./components/Contact/Contact";
import "./App.scss";
import { useState } from "react";
import Menu from "./components/Menu/Menu";

const App = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    return (
        <div className="app">
            <Topbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
            <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
            <div className="sections">
                <Intro />
                <About />
                <Stacks />
                <Portfolio />
                <Contact />
            </div>
        </div>
    );
};

export default App;
