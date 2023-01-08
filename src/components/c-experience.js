import React, { Component } from "react";

class ExperienceInfo extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div>
                <form>
                    <h1>Experience Information</h1>
                    <input placeholder="Position"></input>
                    <input placeholder="Company"></input>
                    <input placeholder="City"></input>
                    <input placeholder="From (year)"></input>
                    <input placeholder="To (year)"></input>
                    <button type="submit">Submit</button>
                </form>
            </div>
        )
    }
}

export default ExperienceInfo;