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
            adress: "Sakarya / Turkey",
            phone: "+90 MEOW MEOW ME OW",
            email: "fettan@cat.com",
            web: "worldwideweb.com",
            desc: "I have a long and majestic fur and gave birth to 3 child.",
            born: "23 March 2017",
            place: "Eskişehir / Turkey",
            sex: "Female",
            marital: "Single",
            drive: "No need, fast enough",
            military: "Done",
        });
        setExperience({
            position: "Creator of streets",
            company: "The Rogue Felines",
            expCity: "Eskişehir",
            expFromDate: "2017",
            expToDate: "Present",
        });
        setEducation({
            uni: "Ms. Whiskers Elementary",
            eduCity: "Eskişehir",
            degree: "Creator's Degree",
            subject: "Felines?",
            eduFromDate: "2017",
            eduToDate: "2020",
        });
        setExperiencePlus({
            positionPlus: "Creator of worlds",
            companyPlus: "World",
            expCityPlus: "Sakarya",
            expFromDatePlus: "2017",
            expToDatePlus: "Present",
        });
        setEducationPlus({
            uniPlus: "",
            eduCityPlus: "",
            degreePlus: "",
            subjectPlus: "",
            eduFromDatePlus: "",
            eduToDatePlus: "",
        });
        setSkills({
            skill1: "Eating human food",
            skill2: "Does not meow, only purrs",
            skill3: "Can fit into small spaces",
            skill4: "Can nap anywhere",
            skill5: "and anytime",
            skill6: "Mother of 3 childs",
            skill7: "Running really fast",
            skill8: "Can live in streets",
        });
        setHobbies({
            hobby1: "Likes to bring gifts like dead mice",
            hobby2: "Knocking things off",
            hobby3: "And just for the fun of it",
            hobby4: "Sleeping atop of cars",
            hobby5: "Playing hide and seek",
            hobby6: "Sitting in unexpected places",
            hobby7: "Making silly faces",
            hobby8: "Living in streets or home",
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
