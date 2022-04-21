import "./intro.scss";
import ReactTypingEffect from "react-typing-effect";

export default function Intro() {
    return (
        <div className="intro" id="intro">
            <div className="left">
                <div className="imgContainer">
                    <img src="assets/" alt="" />
                </div>
            </div>
            <div className="right">
                <div className="wrapper">
                    <h2>Hi There, I'm</h2>
                    <h1>Erik Serrano</h1>
                    <ReactTypingEffect
                        text={["Software Developer"]}
                        cursorRenderer={(cursor) => <h3>{cursor}</h3>}
                        displayTextRenderer={(text) => {
                            return (
                                <h3>
                                    {text.split("").map((char, i) => {
                                        const key = `${i}`;
                                        return (
                                            <span
                                                key={key}
                                                style={{ color: "black" }}>
                                                {char}
                                            </span>
                                        );
                                    })}
                                </h3>
                            );
                        }}
                    />
                </div>
                <a href="#portfolio">
                    <img src="assets/down.png" alt="" />
                </a>
            </div>
        </div>
    );
}
