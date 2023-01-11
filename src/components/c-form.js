import React from "react";
import Education from "./c-education";
import Experience from "./c-experience";
import General from "./c-general";

const Form = (props) => {
    return (
        <div>
            <General data={props.general} handler={props.handleGeneralChange} />
            <Experience
                data={props.experience}
                handler={props.handleExperienceChange}
            />
            <Education
                data={props.education}
                handler={props.handleEducationChange}
            />
        </div>
    );
};

export default Form;
