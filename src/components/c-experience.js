import React from "react";

const Experience = (props) => {
    const plusHtml = (
        <>
            <h1>
                Experience #2 <i className="fa-solid fa-briefcase"></i>
            </h1>
            <input
                type="text"
                value={props.dataPlus.positionPlus}
                onChange={props.handlerPlus}
                placeholder="Position"
                id="positionPlus"
            />
            <input
                type="text"
                value={props.dataPlus.companyPlus}
                onChange={props.handlerPlus}
                placeholder="Company"
                id="companyPlus"
            />
            <input
                type="text"
                value={props.dataPlus.expCityPlus}
                onChange={props.handlerPlus}
                placeholder="City"
                id="expCityPlus"
            />
            <input
                type="text"
                value={props.dataPlus.expFromDatePlus}
                onChange={props.handlerPlus}
                placeholder="From (Year)"
                id="expFromDatePlus"
            />
            <input
                type="text"
                value={props.dataPlus.expToDatePlus}
                onChange={props.handlerPlus}
                placeholder="To (Year)"
                id="expToDatePlus"
            />
        </>
    );

    return (
        <div className="flex-container">
            <form>
                <h1>
                    {props.isExpPlusClicked ? "Experience #1" : "Experience"}{" "}
                    <i className="fa-solid fa-briefcase"></i>
                </h1>
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
                {props.isExpPlusClicked && plusHtml}
            </form>
            {!props.isExpPlusClicked && (
                <button onClick={props.plusExperience} className="btn">
                    <i className="fa-solid fa-plus"></i> Add New Experience
                </button>
            )}
        </div>
    );
};

export default Experience;
