import React, { useState } from "react";
import Form from "./c-form";
import Preview from "./c-preview";
import mocha from "../assets/mocha.jpg";

const Main = () => {
    const [general, setGeneral] = useState({
        name: "",
        lastName: "",
        title: "",
        adress: "",
        phone: "",
        email: "",
        desc: "",
        born: "",
        sex: "",
        marital: "",
        drive: "",
        military: "",
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

    const [image, setImage] = useState(null);

    const handlePhotoChange = (e) => {
        setImage(e.target.files[0]);
    };

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

    const fillExample = () => {
        setGeneral({
            name: "Mocha",
            lastName: "Fettan",
            title: "A Cat",
            adress: "Sakarya / Türkiye",
            phone: "+90 539 000 54 54",
            email: "fettan@cat.com",
            desc: "I have long hairs and gave birth to 3 child.",
            born: "2017",
            sex: "Female",
            marital: "Single",
            drive: "Nope",
            military: "None",
        });
        setExperience({
            position: "Creator of worlds",
            company: "The Rogue Cats",
            expCity: "Sakarya",
            expFromDate: "2017",
            expToDate: "Present",
        });
        setEducation({
            uni: "Self Taught",
            eduCity: "Eskişehir",
            degree: "Bachelor's Degree",
            subject: "Cats",
            eduFromDate: "2017",
            eduToDate: "2023",
        });
        setExperiencePlus({
            positionPlus: "None",
            companyPlus: "None",
            expCityPlus: "None",
            expFromDatePlus: "None",
            expToDatePlus: "None",
        });
        setEducationPlus({
            uniPlus: "None",
            eduCityPlus: "None",
            degreePlus: "None",
            subjectPlus: "None",
            eduFromDatePlus: "None",
            eduToDatePlus: "None",
        });
        setSkills({
            skill1: "Running",
            skill2: "Jumping",
            skill3: "Eating",
            skill4: "Sleeping",
            skill5: "Mother of 3 childs",
            skill6: "Playing",
            skill7: "Running really fast",
            skill8: "Can live in streets",
        });
        setImage(mocha);
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
                handlePhotoChange={handlePhotoChange}
                handleGeneralChange={handleGeneralChange}
                handleExperienceChange={handleExperienceChange}
                handleEducationChange={handleEducationChange}
                handleExperiencePlusChange={handleExperiencePlusChange}
                handleEducationPlusChange={handleEducationPlusChange}
                handleSkillsChange={handleSkillsChange}
            />
            <Preview
                general={general}
                experience={experience}
                education={education}
                educationPlus={educationPlus}
                experiencePlus={experiencePlus}
                skills={skills}
                image={image}
                autofill={fillExample}
            />
        </div>
    );
};

export default Main;
