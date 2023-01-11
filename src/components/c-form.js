import React from "react";
import Education from "./c-education";
import Experience from "./c-experience";
import General from "./c-general";

const Form = (props) => {
    return (
        <div className="form">
            <General data={props.general} handler={props.handleGeneralChange} />
            <Experience
                data={props.experience}
                dataPlus={props.experiencePlus}
                handler={props.handleExperienceChange}
                handlerPlus={props.handleExperiencePlusChange}
            />
            <Education
                data={props.education}
                dataPlus={props.educationPlus}
                handler={props.handleEducationChange}
                handlerPlus={props.handleEducationPlusChange}
            />
        </div>
    );
};

export default Form;
