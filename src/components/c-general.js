import React, { Component } from "react";

class General extends Component {
    render() {
        return (
            <div>
                <form>
                    <h1>General Information</h1>
                    <input placeholder="First Name" />
                    <input placeholder="Last Name" />
                    <input placeholder="Adress" />
                    <input placeholder="Phone Number" />
                    <input placeholder="E-mail" />
                </form>
            </div>
        );
    }
}

export default General;
