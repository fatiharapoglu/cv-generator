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

    return (
        <div className="container">
            <Form
                general={general}
                experience={experience}
                education={education}
                handleGeneralChange={handleGeneralChange}
                handleExperienceChange={handleExperienceChange}
                handleEducationChange={handleEducationChange}
            />
            <Preview general={general} experience={experience} education={education} />
        </div>
    );
};

export default Main;
