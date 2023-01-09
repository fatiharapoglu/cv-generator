import React, { Component } from "react";

class Education extends Component {
    constructor(props) {
        super(props)

        this.state = {
            input: "",
        }
    }

    input = (e) => {
        this.setState( {input : e.target.value} );
    }

    render() {
        return (
            <div>
                <form>
                    <h1>Education Information</h1>
                    <input deneme={this.state.input} onChange = {(e) => this.input(e)} placeholder="University Name" />
                    <input placeholder="City" />
                    <input placeholder="Degree" />
                    <input placeholder="Subject" />
                    <input placeholder="From (year)" />
                    <input placeholder="To (year)" />
                </form>
            </div>
        );
    }
}

export default Education;
