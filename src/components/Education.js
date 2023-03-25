const Education = (props) => {
    const plusHtml = (
        <>
            <h1>
                EDUCATION #2 <i className="fa-solid fa-user-graduate"></i>
            </h1>
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

    return (
        <div className="flex-container">
            <form>
                <h1>
                    {props.isEduPlusClicked ? "EDUCATION #1" : "EDUCATION"}{" "}
                    <i className="fa-solid fa-user-graduate"></i>
                </h1>
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
                {props.isEduPlusClicked && plusHtml}
            </form>
            {!props.isEduPlusClicked && (
                <button onClick={props.plusEducation} className="btn">
                    <i className="fa-solid fa-plus"></i> Add New Education
                </button>
            )}
        </div>
    );
};

export default Education;
