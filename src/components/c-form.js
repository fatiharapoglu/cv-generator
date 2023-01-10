import React, { useState } from "react";
import Education from "./c-education";
import Experience from "./c-experience";
import General from "./c-general";

const Form = (props) => {
    return (
        <div>
            <General general={props.general} handleGeneralChange={props.handleGeneralChange} />
            <Experience />
            <Education />
        </div>
    )
}

export default Form;