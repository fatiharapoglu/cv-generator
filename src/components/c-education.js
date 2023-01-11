import React from "react";

const Education = (props) => {
    return (
        <div>
            <form>
                <h1>Education</h1>
                <input
                    type="text"
                    value={props.data.eduUni}
                    onChange={props.handler}
                    placeholder="University"
                    id="eduUni"
                />
                <input
                    type="text"
                    value={props.data.eduCity}
                    onChange={props.handler}
                    placeholder="City"
                    id="eduCity"
                />
                <input
                    type="text"
                    value={props.data.degree}
                    onChange={props.handler}
                    placeholder="Degree"
                    id="degree"
                />
                <input
                    type="text"
                    value={props.data.subject}
                    onChange={props.handler}
                    placeholder="Subject"
                    id="subject"
                />
                <input
                    type="text"
                    value={props.data.eduFromDate}
                    onChange={props.handler}
                    placeholder="From (Year)"
                    id="eduFromDate"
                />
                <input
                    type="text"
                    value={props.data.eduToDate}
                    onChange={props.handler}
                    placeholder="To (Year)"
                    id="eduToDate"
                />
            </form>
        </div>
    );
};

export default Education;
