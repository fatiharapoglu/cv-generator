import React from "react";

const General = (props) => {
    return (
        <div className="flex-container">
            <form>
                <h1>General Information</h1>
                <input
                    type="text"
                    value={props.data.name}
                    onChange={props.handler}
                    placeholder="First name"
                    id="name"
                />
                <input
                    type="text"
                    value={props.data.lastName}
                    onChange={props.handler}
                    placeholder="Last name"
                    id="lastName"
                />
                <input
                    type="text"
                    value={props.data.born}
                    onChange={props.handler}
                    placeholder="Date of birth"
                    id="born"
                />
                <input
                    type="text"
                    value={props.data.sex}
                    onChange={props.handler}
                    placeholder="Sex"
                    id="sex"
                />
                <input
                    type="text"
                    value={props.data.marital}
                    onChange={props.handler}
                    placeholder="Marital status"
                    id="marital"
                />
                <input
                    type="text"
                    value={props.data.drive}
                    onChange={props.handler}
                    placeholder="Driving licence"
                    id="drive"
                />
                <input
                    type="text"
                    value={props.data.military}
                    onChange={props.handler}
                    placeholder="Military service"
                    id="military"
                />
                <input
                    type="text"
                    value={props.data.title}
                    onChange={props.handler}
                    placeholder="Title"
                    id="title"
                />
                <input
                    type="text"
                    value={props.data.adress}
                    onChange={props.handler}
                    placeholder="Adress"
                    id="adress"
                />
                <input
                    type="text"
                    value={props.data.phone}
                    onChange={props.handler}
                    placeholder="Phone number"
                    id="phone"
                />
                <input
                    type="text"
                    value={props.data.email}
                    onChange={props.handler}
                    placeholder="E-mail"
                    id="email"
                />
                <input
                    type="text"
                    value={props.data.desc}
                    onChange={props.handler}
                    placeholder="Description"
                    id="desc"
                />
            </form>
        </div>
    );
};

export default General;
