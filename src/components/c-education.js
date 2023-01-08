import React, { Component } from "react";

class EducationInfo extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div>
                <form>
                    <h1>Education Information</h1>
                    <input placeholder="University Name"></input>
                    <input placeholder="City"></input>
                    <input placeholder="Degree"></input>
                    <input placeholder="Subject"></input>
                    <input placeholder="From (year)"></input>
                    <input placeholder="To (year)"></input>
                    <button type="submit">Submit</button>
                </form>
            </div>
        )
    }
}

export default EducationInfo;