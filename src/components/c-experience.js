import React, { useState } from "react";

const Experience = (props) => {
    const [position, setPosition] = useState("");
    const [company, setCompany] = useState("");
    const [city, setCity] = useState("");
    const [fromDate, setFromDate] = useState("");
    const [toDate, setToDate] = useState("");

    const handlePosition = (e) => {
        setPosition(e.target.value);
    }
    const handleCompany = (e) => {
        setCompany(e.target.value);
    }
    const handleCity = (e) => {
        setCity(e.target.value);
    }
    const handleFromDate = (e) => {
        setFromDate(e.target.value);
    }
    const handleToDate = (e) => {
        setToDate(e.target.value);
    }

    return (
        <div>
            <form>
                <h1>Experience</h1>
                <input type="text" value={position} onChange={handlePosition} placeholder="Position" />
                <input type="text" value={company} onChange={handleCompany} placeholder="Company" />
                <input type="text" value={city} onChange={handleCity} placeholder="City" />
                <input type="text" value={fromDate} onChange={handleFromDate} placeholder="From (Year)" />
                <input type="text" value={toDate} onChange={handleToDate} placeholder="To (Year)" />
            </form>
        </div>
    );
}

export default Experience;