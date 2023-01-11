import React from "react";

const Preview = (props) => {
    return (
        <div>
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
                            <h3>Degree, Field of Study - University Name</h3>
                            <p>Graduation Date</p>
                        </li>
                        <li>
                            <h3>Degree, Field of Study - University Name</h3>
                            <p>Graduation Date</p>
                        </li>
                    </ul>
                </div>
                <div>
                    <h2>Experience</h2>
                    <ul>
                        <li>
                            <h3>Job Title - Company Name</h3>
                            <p>Job duration</p>
                            <ul>
                                <li>Job responsibility 1</li>
                                <li>Job responsibility 2</li>
                            </ul>
                        </li>
                        <li>
                            <h3>Job Title - Company Name</h3>
                            <p>Job duration</p>
                            <ul>
                                <li>Job responsibility 1</li>
                                <li>Job responsibility 2</li>
                            </ul>
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
