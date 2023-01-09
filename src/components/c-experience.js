import React, { Component } from "react";

class Experience extends Component {
    render() {
        return (
            <div>
                <form>
                    <h1>Experience Information</h1>
                    <input placeholder="Position" />
                    <input placeholder="Company" />
                    <input placeholder="City" />
                    <input placeholder="From (year)" />
                    <input placeholder="To (year)" />
                </form>
            </div>
        );
    }
}

export default Experience;
