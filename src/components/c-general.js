import React, { Component } from "react";

class GeneralInfo extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div>
                <form>
                    <h1>General Information</h1>
                    <input placeholder="First Name"></input>
                    <input placeholder="Last Name"></input>
                    <input placeholder="Adress"></input>
                    <input placeholder="Phone Number"></input>
                    <input placeholder="E-mail"></input>
                    <button type="submit">Submit</button>
                </form>
            </div>
        )
    }
}

export default GeneralInfo;