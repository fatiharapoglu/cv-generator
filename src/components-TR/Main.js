import { useState } from "react";

import jsPDF from "jspdf";
import Form from "./Form";
import Preview from "./Preview";
import mocha from "../assets/mocha.jpg";
import avatar from "../assets/avatar.png";

const MainTR = () => {
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
            title: "Kedi",
            adress: "Sakarya / Türkiye",
            phone: "+90 MEOW MEOW ME OW",
            email: "fettan@cat.com",
            web: "worldwideweb.com",
            desc: "Uzun tüylerim var ve 3 çocuk doğurdum.",
            born: "23 Mart 2017",
            place: "Eskişehir / Türkiye",
            sex: "Dişi",
            marital: "Bekar",
            drive: "Gerek yok, yeterince hızlı",
            military: "Yapıldı",
        });
        setExperience({
            position: "Caddeler Yaratıcısı",
            company: "Yaramaz Kediler Klanı",
            expCity: "Eskişehir",
            expFromDate: "2017",
            expToDate: "Devam",
        });
        setEducation({
            uni: "Ms. Whiskers İlkokulu",
            eduCity: "Eskişehir",
            degree: "Yaratıcı Lisansı",
            subject: "Kedi Familyası?",
            eduFromDate: "2017",
            eduToDate: "2020",
        });
        setExperiencePlus({
            positionPlus: "Dünyalar Yaratıcısı",
            companyPlus: "Dünya",
            expCityPlus: "Sakarya",
            expFromDatePlus: "2017",
            expToDatePlus: "Devam",
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
            skill1: "İnsan yemeği yemek",
            skill2: "Miyavlamaz, sadece mırlar",
            skill3: "Küçük alanlara sığabilmek",
            skill4: "Her yerde kestirebilmek",
            skill5: "Ve her zaman kestirebilmek",
            skill6: "3 çocuk annesi",
            skill7: "Gerçekten hızlı koşmak",
            skill8: "Sokaklarda yaşayabilir",
        });
        setHobbies({
            hobby1: "Ölü fareler gibi hediyeler getirmek",
            hobby2: "Bir şeyleri devirmek",
            hobby3: "Ve sadece eğlence için",
            hobby4: "Arabaların üzerinde uyumak",
            hobby5: "Saklambaç oynamak",
            hobby6: "Beklenmedik yerlerde oturmak",
            hobby7: "Aptal suratlar yapmak",
            hobby8: "Sokakta veya evde yaşayabilir",
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

export default MainTR;
