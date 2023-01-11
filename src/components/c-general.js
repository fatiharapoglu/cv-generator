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
                    placeholder="First Name"
                    id="name"
                />
                <input
                    type="text"
                    value={props.data.lastName}
                    onChange={props.handler}
                    placeholder="Last Name"
                    id="lastName"
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
