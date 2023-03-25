import Education from "./Education";
import Experience from "./Experience";
import General from "./General";
import Hobbies from "./Hobbies";
import Photo from "./Photo";
import Skills from "./Skills";

const Form = (props) => {
    return (
        <div className="form">
            <General data={props.general} handler={props.handleGeneralChange} />
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
            <Hobbies data={props.hobbies} handler={props.handleHobbiesChange} />
            <Photo handler={props.handlePhotoChange} />
        </div>
    );
};

export default Form;
