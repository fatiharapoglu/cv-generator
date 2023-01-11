import React from "react";

const Experience = (props) => {
    return (
        <div>
            <form>
                <h1>Experience</h1>
                <input
                    type="text"
                    value={props.data.position}
                    onChange={props.handler}
                    placeholder="Position"
                    id="position"
                />
                <input
                    type="text"
                    value={props.data.company}
                    onChange={props.handler}
                    placeholder="Company"
                    id="company"
                />
                <input
                    type="text"
                    value={props.data.expCity}
                    onChange={props.handler}
                    placeholder="City"
                    id="expCity"
                />
                <input
                    type="text"
                    value={props.data.expFromDate}
                    onChange={props.handler}
                    placeholder="From (Year)"
                    id="expFromDate"
                />
                <input
                    type="text"
                    value={props.data.expToDate}
                    onChange={props.handler}
                    placeholder="To (Year)"
                    id="expToDate"
                />
            </form>
        </div>
    );
};

export default Experience;
