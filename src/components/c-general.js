import React from "react";

const General = (props) => {
    return (
        <div>
            <form>
                <h1>General Information</h1>
                <input type="text"
                    value={props.general.name} 
                    onChange={props.handleGeneralChange} 
                    placeholder="Name" 
                    id="name" />
                <input type="text" 
                    value={props.general.lastName} 
                    onChange={props.handleGeneralChange} 
                    placeholder="Last Name" 
                    id="lastName" />
                <input type="text" 
                    value={props.general.title} 
                    onChange={props.handleGeneralChange} 
                    placeholder="Title" 
                    id="title"/>
                <input type="text" 
                    value={props.general.adress} 
                    onChange={props.handleGeneralChange} 
                    placeholder="Adress" 
                    id="adress"
                />
                <input type="text" 
                    value={props.general.phone} 
                    onChange={props.handleGeneralChange} 
                    placeholder="Phone number" 
                    id="phone"
                />
                <input type="text" 
                    value={props.general.email} 
                    onChange={props.handleGeneralChange} 
                    placeholder="E-mail" 
                    id="email"
                />
                <input type="text" 
                    value={props.general.desc} 
                    onChange={props.handleGeneralChange} 
                    placeholder="Description" 
                    id="desc"
                />
            </form>
        </div>
    );
}

export default General;