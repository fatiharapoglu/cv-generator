import React from "react";

function Photo(props) {
    return (
        <div>
            <h1>Photo</h1>
            <input type="file" onChange={props.handler} />
        </div>
    );
}

export default Photo;
