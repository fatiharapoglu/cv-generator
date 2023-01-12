import React from "react";

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
                            <li>{props.general.phone}</li>
                            <li>{props.general.email}</li>
                            <li>{props.general.adress}</li>
                        </ul>
                    </div>
                    <div className="preview-skills">
                        <h1>Skills</h1>
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
                <div className="right-preview">
                    <div className="preview-header">
                        {props.general.name !== "" && props.general.lastName !== "" && (
                            <li>
                                {props.general.name} {props.general.lastName}
                            </li>
                        )}
                        {props.general.title !== "" && <li>{props.general.title}</li>}
                        {props.general.desc !== "" && <li>{props.general.desc}</li>}
                    </div>
                    <div className="preview-main">
                        <div className="preview-experience"></div>
                        <div className="preview-education"></div>
                    </div>
                </div>
                <button className="btn" onClick={props.autofill}>
                    Autofill
                </button>
            </div>
        </div>
    );
};

export default Preview;
