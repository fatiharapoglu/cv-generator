import React, { useState } from "react";

const Education = () => {
    const [uni, setUni] = useState("");
    const [city, setCity] = useState("");
    const [degree, setDegree] = useState("");
    const [subject, setSubject] = useState("");
    const [fromDate, setFromDate] = useState("");
    const [toDate, setToDate] = useState("");

    const handleUniChange = (e) => {
        setUni(e.target.value);
    }
    const handleCityChange = (e) => {
        setCity(e.target.value);
    }
    const handleDegreeChange = (e) => {
        setDegree(e.target.value);
    }
    const handleSubjectChange = (e) => {
        setSubject(e.target.value);
    }
    const handleFromDateChange = (e) => {
        setFromDate(e.target.value);
    }
    const handleToDateChange = (e) => {
        setToDate(e.target.value);
    }

    return (
        <div>
            <form>
                <input type="text" value={uni} onChange={handleUniChange} placeholder="University" />
                <input type="text" value={city} onChange={handleCityChange} placeholder="City" />
                <input type="text" value={degree} onChange={handleDegreeChange} placeholder="Degree" />
                <input type="text" value={subject} onChange={handleSubjectChange} placeholder="Subject" />
                <input type="text" value={fromDate} onChange={handleFromDateChange} placeholder="From (Year)" />
                <input type="text" value={toDate} onChange={handleToDateChange} placeholder="To (Year)" />
            </form>
        </div>
    );
}

export default Education;