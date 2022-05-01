import "./Intro.scss";
import ReactTypingEffect from "react-typing-effect";

const Intro = () => {
    return (
        <div className="intro" id="intro">
            <div className="left">
                <div className="imgContainer">
                    <img src="assets/" alt="" />
                </div>
            </div>
            <div className="right">
                <div className="wrapper">
                    <div className="bg-text">&#8249;h2&#8250;</div>
                    <h2>Hi there 👋, I'm</h2>
                    <div className="bg-text">&#8249;h2/&#8250;</div>
                    <div className="bg-text">&#8249;h1&#8250;</div>
                    <ReactTypingEffect
                        text={["Erik Serrano"]}
                        cursorRenderer={(cursor) => <h1>{cursor}</h1>}
                        displayTextRenderer={(text) => {
                            return (
                                <h1>
                                    {text.split("").map((char, i) => {
                                        const key = `${i}`;
                                        return (
                                            <span
                                                key={key}
                                                style={{ color: "white" }}>
                                                {char}
                                            </span>
                                        );
                                    })}
                                </h1>
                            );
                        }}
                    />
                    <div className="bg-text">&#8249;h1/&#8250;</div>
                </div>
            </div>
        </div>
    );
};

export default Intro;
