const Preview = (props) => {
    return (
        <div className="preview">
            <div className="fixed">
                <div className="left-preview">
                    <div className="preview-photo">
                        {typeof props.image === "object" && props.image && (
                            <img src={URL.createObjectURL(props.image)} alt="preview" />
                        )}
                        {typeof props.image === "string" && <img src={props.image} alt="preview" />}
                    </div>
                    <div className="preview-general">
                        <ul>
                            <h1>Personal Information</h1>
                            {props.general.born !== "" && (
                                <li>
                                    <span>Date of Birth:</span>
                                    <br />
                                    {props.general.born}
                                </li>
                            )}
                            {props.general.place !== "" && (
                                <li>
                                    <span>Place of Birth:</span>
                                    <br />
                                    {props.general.place}
                                </li>
                            )}
                            {props.general.sex !== "" && (
                                <li>
                                    <span>Sex:</span>
                                    <br />
                                    {props.general.sex}
                                </li>
                            )}
                            {props.general.marital !== "" && (
                                <li>
                                    <span>Marital Status:</span>
                                    <br />
                                    {props.general.marital}
                                </li>
                            )}
                            {props.general.drive !== "" && (
                                <li>
                                    <span>Driving Licence:</span>
                                    <br />
                                    {props.general.drive}
                                </li>
                            )}
                            {props.general.military !== "" && (
                                <li>
                                    <span>Military Service:</span>
                                    <br />
                                    {props.general.military}
                                </li>
                            )}
                        </ul>
                    </div>
                    <div className="preview-contact">
                        <h1>Contact Information</h1>
                        <ul>
                            {props.general.adress !== "" && (
                                <li>
                                    <span>Adress:</span>
                                    <br />
                                    {props.general.adress}
                                </li>
                            )}
                            {props.general.phone !== "" && (
                                <li>
                                    <span>Phone:</span>
                                    <br />
                                    {props.general.phone}
                                </li>
                            )}
                            {props.general.email !== "" && (
                                <li>
                                    <span>E-mail:</span>
                                    <br />
                                    {props.general.email}
                                </li>
                            )}
                            {props.general.web !== "" && (
                                <li>
                                    <span>Web Site:</span>
                                    <br />
                                    {props.general.web}
                                </li>
                            )}
                        </ul>
                    </div>
                    <div className="preview-hobbies">
                        {props.hobbies.hobby1 !== "" && <h1>Social Activities</h1>}
                        <ol>
                            {props.hobbies.hobby1 !== "" && <li>{props.hobbies.hobby1}</li>}
                            {props.hobbies.hobby2 !== "" && <li>{props.hobbies.hobby2}</li>}
                            {props.hobbies.hobby3 !== "" && <li>{props.hobbies.hobby3}</li>}
                            {props.hobbies.hobby4 !== "" && <li>{props.hobbies.hobby4}</li>}
                            {props.hobbies.hobby5 !== "" && <li>{props.hobbies.hobby5}</li>}
                            {props.hobbies.hobby6 !== "" && <li>{props.hobbies.hobby6}</li>}
                            {props.hobbies.hobby7 !== "" && <li>{props.hobbies.hobby7}</li>}
                            {props.hobbies.hobby8 !== "" && <li>{props.hobbies.hobby8}</li>}
                        </ol>
                    </div>
                </div>
                <div className="right-preview">
                    <div className="preview-header">
                        <li className="header-name">
                            {props.general.name} {props.general.lastName}
                        </li>
                        {props.general.title !== "" && (
                            <li className="header-title">{props.general.title}</li>
                        )}
                    </div>
                    <div className="preview-main">
                        <div>
                            <h1>PROFILE</h1>
                            {props.general.desc !== "" && (
                                <li className="preview-description">{props.general.desc}</li>
                            )}
                        </div>
                        <div className="preview-experience">
                            <h1>EXPERIENCE</h1>
                            <div className="preview-experience-1">
                                <div className="preview-experience-position">
                                    {props.experience.position}
                                </div>
                                <div className="preview-experience-main">
                                    <div>
                                        {props.experience.company}
                                        {props.experience.expCity !== "" &&
                                            ` / ${props.experience.expCity}`}
                                    </div>
                                    <div>
                                        {props.experience.expFromDate}
                                        {props.experience.expToDate !== "" &&
                                            ` – ${props.experience.expToDate}`}
                                    </div>
                                </div>
                            </div>
                            {props.isExpPlusClicked && (
                                <div className="preview-experience-2">
                                    <div className="preview-experience-position">
                                        {props.experiencePlus.positionPlus}
                                    </div>
                                    <div className="preview-experience-main">
                                        <div>
                                            {props.experiencePlus.companyPlus}
                                            {props.experiencePlus.expCityPlus !== "" &&
                                                ` / ${props.experiencePlus.expCityPlus}`}
                                        </div>
                                        <div>
                                            {props.experiencePlus.expFromDatePlus}
                                            {props.experiencePlus.expToDatePlus !== "" &&
                                                ` – ${props.experiencePlus.expToDatePlus}`}
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>
                        <div className="preview-education">
                            <h1>EDUCATION</h1>
                            <div className="preview-education-1">
                                <div className="preview-education-position">
                                    {props.education.subject}
                                    <span className="preview-education-degree">
                                        {props.education.degree !== "" &&
                                            ` / ${props.education.degree}`}
                                    </span>
                                </div>
                                <div className="preview-education-main">
                                    <div>
                                        {props.education.uni}
                                        {props.education.eduCity !== "" &&
                                            ` (${props.education.eduCity})`}
                                    </div>
                                    <div>
                                        {props.education.eduFromDate}
                                        {props.education.eduToDate !== "" &&
                                            ` – ${props.education.eduToDate}`}
                                    </div>
                                </div>
                            </div>
                            {props.isEduPlusClicked && (
                                <div className="preview-education-2">
                                    <div className="preview-education-position">
                                        {props.educationPlus.subjectPlus}
                                        <span className="preview-education-degree">
                                            {props.educationPlus.degreePlus !== "" &&
                                                ` / ${props.educationPlus.degreePlus}`}
                                        </span>
                                    </div>
                                    <div className="preview-education-main">
                                        <div>
                                            {props.educationPlus.uniPlus}
                                            {props.educationPlus.eduCityPlus !== "" &&
                                                ` (${props.educationPlus.eduCityPlus})`}
                                        </div>
                                        <div>
                                            {props.educationPlus.eduFromDatePlus}
                                            {props.educationPlus.eduToDatePlus !== "" &&
                                                ` – ${props.educationPlus.eduToDatePlus}`}
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>
                        <div className="preview-skills">
                            <h1>SKILLS</h1>
                            <ol>
                                {props.skills.skill1 !== "" && <li>{props.skills.skill1}</li>}
                                {props.skills.skill2 !== "" && <li>{props.skills.skill2}</li>}
                                {props.skills.skill3 !== "" && <li>{props.skills.skill3}</li>}
                                {props.skills.skill4 !== "" && <li>{props.skills.skill4}</li>}
                                {props.skills.skill5 !== "" && <li>{props.skills.skill5}</li>}
                                {props.skills.skill6 !== "" && <li>{props.skills.skill6}</li>}
                                {props.skills.skill7 !== "" && <li>{props.skills.skill7}</li>}
                                {props.skills.skill8 !== "" && <li>{props.skills.skill8}</li>}
                            </ol>
                        </div>
                    </div>
                </div>
                <button className="btn autofill" onClick={props.autofill}>
                    Autofill
                </button>
                <button className="btn pdf" onClick={props.generatePDF}>
                    Save as PDF
                </button>
            </div>
        </div>
    );
};

export default Preview;
