import React, { useState } from "react";

const Education = (props) => {
    const [isEduPlusClicked, setIsEduPlusClicked] = useState(false);

    const plusHtml = (
        <>
            <h1>Education #2</h1>
            <input
                type="text"
                value={props.dataPlus.uniPlus}
                onChange={props.handlerPlus}
                placeholder="University"
                id="uniPlus"
            />
            <input
                type="text"
                value={props.dataPlus.eduCityPlus}
                onChange={props.handlerPlus}
                placeholder="City"
                id="eduCityPlus"
            />
            <input
                type="text"
                value={props.dataPlus.degreePlus}
                onChange={props.handlerPlus}
                placeholder="Degree"
                id="degreePlus"
            />
            <input
                type="text"
                value={props.dataPlus.subjectPlus}
                onChange={props.handlerPlus}
                placeholder="Subject"
                id="subjectPlus"
            />
            <input
                type="text"
                value={props.dataPlus.eduFromDatePlus}
                onChange={props.handlerPlus}
                placeholder="From (Year)"
                id="eduFromDatePlus"
            />
            <input
                type="text"
                value={props.dataPlus.eduToDatePlus}
                onChange={props.handlerPlus}
                placeholder="To (Year)"
                id="eduToDatePlus"
            />
        </>
    );

    const plusEducation = () => {
        setIsEduPlusClicked(true);
    };

    return (
        <div className="flex-container">
            <form>
                <h1>{isEduPlusClicked ? "Education #1" : "Education"}</h1>
                <input
                    type="text"
                    value={props.data.uni}
                    onChange={props.handler}
                    placeholder="University"
                    id="uni"
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
                {isEduPlusClicked && plusHtml}
            </form>
            {!isEduPlusClicked && (
                <button onClick={plusEducation} className="btn">
                    Add New Education Info
                </button>
            )}
        </div>
    );
};

export default Education;
