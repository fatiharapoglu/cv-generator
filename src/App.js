import React, { Component } from "react";
import EducationInfo from "./components/c-education";
import GeneralInfo from "./components/c-general";
import ExperienceInfo from "./components/c-experience";

class App extends Component {
    constructor() {
        super()

        this.state = {

        }
    }

    render() {
        return (
            <div>
                <GeneralInfo />
                <EducationInfo />
                <ExperienceInfo />
            </div>
        )
    }
}

export default App;
