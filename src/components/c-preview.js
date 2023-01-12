import React from "react";

const Preview = (props) => {
    return (
        <div className="preview">
            <div className="fixed">
                <div className="left-preview">
                    <div className="preview-photo">
                        <img src="#" alt="preview" />
                    </div>
                    <div className="preview-general"></div>
                    <div className="preview-contact">
                        <ul>
                            <li>{props.general.phone}</li>
                            <li>{props.general.email}</li>
                            <li>{props.general.adress}</li>
                        </ul>
                    </div>
                    <div className="preview-skills"></div>
                </div>
                <div className="right-preview">
                    <div className="preview-header"></div>
                    <div className="preview-main">
                        <div className="preview-experience"></div>
                        <div className="preview-education"></div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Preview;
