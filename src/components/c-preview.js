import React from "react";

const Preview = (props) => {
    return (
        <div>
            <h1>Preview</h1>
            <h2>{props.name}</h2>
            <h3>{props.lastName}</h3>
            <p>{props.title}</p>
        </div>
    )
}

export default Preview;