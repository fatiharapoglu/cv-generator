import React, { useState } from "react";
import jsPDF from "jspdf";
import Form from "./c-form";
import Preview from "./c-preview";
import mocha from "../assets/mocha.jpg";
import avatar from "../assets/avatar.png";

const Main = () => {
    const [general, setGeneral] = useState({
        name: "",
        lastName: "",
        title: "",
        adress: "",
        phone: "",
        web: "",
        email: "",
        desc: "",
        born: "",
        place: "",
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

    const [hobbies, setHobbies] = useState({
        hobby1: "",
        hobby2: "",
        hobby3: "",
        hobby4: "",
        hobby5: "",
        hobby6: "",
        hobby7: "",
        hobby8: "",
    });

    const [image, setImage] = useState(avatar);

    const [isEduPlusClicked, setIsEduPlusClicked] = useState(false);

    const [isExpPlusClicked, setIsExpPlusClicked] = useState(false);

    const plusExperience = () => {
        setIsExpPlusClicked(true);
    };

    const plusEducation = () => {
        setIsEduPlusClicked(true);
    };

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

    const handleHobbiesChange = (e) => {
        const target = e.target.id;
        const value = e.target.value;
        setHobbies({ ...hobbies, [target]: value });
    };

    const fillExample = () => {
        setIsEduPlusClicked(true);
        setIsExpPlusClicked(true);
        setGeneral({
            name: "Mocha",
            lastName: "Fettan",
            title: "A Cat",
            adress: "Sakarya / Türkiye",
            phone: "+90 539 000 54 54",
            email: "fettan@cat.com",
            web: "meow?",
            desc: "I have long hair and gave birth to 3 child.",
            born: "2017",
            place: "Sakarya / Türkiye",
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
        setHobbies({
            hobby1: "Running",
            hobby2: "Jumping",
            hobby3: "Eating",
            hobby4: "Sleeping",
            hobby5: "Mother of 3 childs",
            hobby6: "Playing",
            hobby7: "Running really fast",
            hobby8: "Can live in streets",
        });
        setImage(mocha);
    };

    const generatePDF = () => {
        import("html2canvas").then((html2canvas) => {
            html2canvas.default(document.querySelector(".fixed")).then((canvas) => {
                let pdf = new jsPDF();
                pdf.addImage(canvas.toDataURL(), "JPEG", 0, 0, 210, 297);
                pdf.save(`CV-${general.lastName}${general.name}.pdf`);
            });
        });
    };

    return (
        <div className="container">
            <Form
                general={general}
                experience={experience}
                education={education}
                experiencePlus={experiencePlus}
                educationPlus={educationPlus}
                isEduPlusClicked={isEduPlusClicked}
                isExpPlusClicked={isExpPlusClicked}
                skills={skills}
                hobbies={hobbies}
                handlePhotoChange={handlePhotoChange}
                handleGeneralChange={handleGeneralChange}
                handleExperienceChange={handleExperienceChange}
                handleEducationChange={handleEducationChange}
                handleExperiencePlusChange={handleExperiencePlusChange}
                handleEducationPlusChange={handleEducationPlusChange}
                handleSkillsChange={handleSkillsChange}
                handleHobbiesChange={handleHobbiesChange}
                plusExperience={plusExperience}
                plusEducation={plusEducation}
            />
            <Preview
                general={general}
                experience={experience}
                education={education}
                educationPlus={educationPlus}
                experiencePlus={experiencePlus}
                skills={skills}
                hobbies={hobbies}
                image={image}
                isEduPlusClicked={isEduPlusClicked}
                isExpPlusClicked={isExpPlusClicked}
                autofill={fillExample}
                generatePDF={generatePDF}
            />
        </div>
    );
};

export default Main;
