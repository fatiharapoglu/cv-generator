import React, { Component } from "react";
import Education from "./c-education";
import Experience from "./c-experience";
import General from "./c-general";

class Main extends Component {
    render() {
        return (
            <div>
                <div className="form">
                    <General />
                    <Experience />
                    <Education />
                </div>
                <div className="preview" />
            </div>
        );
    }
}

export default Main;
