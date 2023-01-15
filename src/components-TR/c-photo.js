import React from "react";

function Photo(props) {
    return (
        <div className="flex-container">
            <h1 className="form-photo">
                FOTOĞRAF <i className="fa-solid fa-camera"></i>
            </h1>
            <input type="file" onChange={props.handler} />
        </div>
    );
}

export default Photo;
