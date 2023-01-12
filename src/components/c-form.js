import React from "react";
import Education from "./c-education";
import Experience from "./c-experience";
import General from "./c-general";
import Photo from "./c-photo";
import Skills from "./c-skills";

const Form = (props) => {
    return (
        <div className="form">
            <General data={props.general} handler={props.handleGeneralChange} />
            <Photo handler={props.handlePhotoChange} />
            <Education
                data={props.education}
                dataPlus={props.educationPlus}
                handler={props.handleEducationChange}
                handlerPlus={props.handleEducationPlusChange}
                isEduPlusClicked={props.isEduPlusClicked}
                plusEducation={props.plusEducation}
            />
            <Experience
                data={props.experience}
                dataPlus={props.experiencePlus}
                handler={props.handleExperienceChange}
                handlerPlus={props.handleExperiencePlusChange}
                isExpPlusClicked={props.isExpPlusClicked}
                plusExperience={props.plusExperience}
            />
            <Skills data={props.skills} handler={props.handleSkillsChange} />
        </div>
    );
};

export default Form;
