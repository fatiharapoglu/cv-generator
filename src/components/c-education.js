import React, { Component } from "react";

class Education extends Component {
    render() {
        return (
            <div>
                <form>
                    <h1>Education Information</h1>
                    <input placeholder="University Name" />
                    <input placeholder="City" />
                    <input placeholder="Degree" />
                    <input placeholder="Subject" />
                    <input placeholder="From (year)" />
                    <input placeholder="To (year)" />
                    <button type="submit">Submit</button>
                </form>
            </div>
        );
    }
}

export default Education;
