import React from "react";

const Footer = () => {
    return (
        <footer className="footer">
            <div className="about">
                <span>
                    <a
                        href="https://www.theodinproject.com/lessons/node-path-javascript-cv-application"
                        id="odin"
                    >
                        The Odin Project
                    </a>
                    | fatiharapoglu
                </span>
                <a href="https://github.com/fatiharapoglu">
                    <img
                        className="github-icon"
                        src="assets/GitHub-Mark-Light-120px-plus.png"
                        alt="github-logo"
                    />
                </a>
            </div>
        </footer>
    );
};

export default Footer;
