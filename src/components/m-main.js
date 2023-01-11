import React, { useState } from "react";
import Form from "./c-form";
import Preview from "./c-preview";

const Main = () => {
    const [general, setGeneral] = useState({
        name: "",
        lastName: "",
        title: "",
        adress: "",
        phone: "",
        email: "",
        desc: "",
    });

    const [experience, setExperience] = useState({
        position: "",
        company: "",
        expCity: "",
        expFromDate: "",
        expToDate: "",
    });

    const [education, setEducation] = useState({
        uni: "",
        eduCity: "",
        degree: "",
        subject: "",
        eduFromDate: "",
        eduToDate: "",
    });

    const [experiencePlus, setExperiencePlus] = useState({
        positionPlus: "",
        companyPlus: "",
        expCityPlus: "",
        expFromDatePlus: "",
        expToDatePlus: "",
    });

    const [educationPlus, setEducationPlus] = useState({
        uniPlus: "",
        eduCityPlus: "",
        degreePlus: "",
        subjectPlus: "",
        eduFromDatePlus: "",
        eduToDatePlus: "",
    });

    const [skills, setSkills] = useState({
        skill1: "",
        skill2: "",
        skill3: "",
        skill4: "",
        skill5: "",
        skill6: "",
        skill7: "",
        skill8: "",
    });

    const handleGeneralChange = (e) => {
        const target = e.target.id;
        const value = e.target.value;
        setGeneral({ ...general, [target]: value });
    };

    const handleExperienceChange = (e) => {
        const target = e.target.id;
        const value = e.target.value;
        setExperience({ ...experience, [target]: value });
    };

    const handleEducationChange = (e) => {
        const target = e.target.id;
        const value = e.target.value;
        setEducation({ ...education, [target]: value });
    };

    const handleExperiencePlusChange = (e) => {
        const target = e.target.id;
        const value = e.target.value;
        setExperiencePlus({ ...experiencePlus, [target]: value });
    };

    const handleEducationPlusChange = (e) => {
        const target = e.target.id;
        const value = e.target.value;
        setEducationPlus({ ...educationPlus, [target]: value });
    };

    const handleSkillsChange = (e) => {
        const target = e.target.id;
        const value = e.target.value;
        setSkills({ ...skills, [target]: value });
    };

    return (
        <div className="container">
            <Form
                general={general}
                experience={experience}
                education={education}
                experiencePlus={experiencePlus}
                educationPlus={educationPlus}
                skills={skills}
                handleGeneralChange={handleGeneralChange}
                handleExperienceChange={handleExperienceChange}
                handleEducationChange={handleEducationChange}
                handleExperiencePlusChange={handleExperiencePlusChange}
                handleEducationPlusChange={handleEducationPlusChange}
                handleSkillsChange={handleSkillsChange}
            />
            <Preview general={general} experience={experience} education={education} />
        </div>
    );
};

export default Main;
