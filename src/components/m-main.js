import React, { useState } from "react";
import Form from "./c-form";
import Preview from "./c-preview";

const Main = () => {
    const [general, setGeneral] = useState({
        name : "",
        lastName : "",
        title : "",
        adress : "",
        phone : "",
        email : "",
        desc : "",
    });

    const handleGeneralChange = (e) => {
        const target = e.target.id;
        const value = e.target.value;
        setGeneral({ ...general, [target]:value });
    }

    return (
        <div>
            <Form general={general} handleGeneralChange={handleGeneralChange} />
            <Preview general={general} />
        </div>
    )
}

export default Main;