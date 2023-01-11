import React from "react";

const Preview = (props) => {
    return (
        <div className="preview">
            <div>
                <header>
                    <h1>{props.general.name}</h1>
                    <h2>{props.general.lastName}</h2>
                    <p>{props.general.adress}</p>
                    <p>{props.general.phone}</p>
                    <p>{props.general.email}</p>
                </header>
                <div>
                    <h2>Education</h2>
                    <ul>
                        <li>
                            <h3>{props.education.uni}</h3>
                            <p>
                                {props.education.eduFromDate} - {props.education.eduToDate}
                            </p>
                        </li>
                    </ul>
                </div>
                <div>
                    <h2>Experience</h2>
                    <ul>
                        <li>
                            <h3>{props.experience.title}</h3>
                            <p>{props.experience.position}</p>
                        </li>
                    </ul>
                </div>
                <div>
                    <h2>Skills</h2>
                    <ul>
                        <li>Skill 1</li>
                        <li>Skill 2</li>
                        <li>Skill 3</li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Preview;
