import React, { useState } from "react";

const General = () => {
    const [name, setName] = useState("");
    const [lastName, setLastName] = useState("");
    const [title, setTitle] = useState("");
    const [adress, setAdress] = useState("");
    const [phone, setPhone] = useState("");
    const [email, setEmail] = useState("");
    const [description, setDescription] = useState("");

    const handleNameChange = (e) => {
        setName(e.target.value);
    }
    const handleLastNameChange = (e) => {
        setLastName(e.target.value);
    }
    const handleTitleChange = (e) => {
        setTitle(e.target.value);
    }
    const handleAdressChange = (e) => {
        setAdress(e.target.value);
    }
    const handlePhoneChange = (e) => {
        setPhone(e.target.value);
    }
    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    }
    const handleDescriptionChange = (e) => {
        setDescription(e.target.value);
    }

    return (
        <div>
            <form>
                <input type="text" value={name} onChange={handleNameChange} placeholder="Name" />
                <input type="text" value={lastName} onChange={handleLastNameChange} placeholder="Last Name" />
                <input type="text" value={title} onChange={handleTitleChange} placeholder="Title" />
                <input type="text" value={adress} onChange={handleAdressChange} placeholder="Adress" />
                <input type="text" value={phone} onChange={handlePhoneChange} placeholder="Phone number" />
                <input type="text" value={email} onChange={handleEmailChange} placeholder="E-mail" />
                <input type="text" value={description} onChange={handleDescriptionChange} placeholder="Description" />
            </form>
        </div>
    );
}

export default General;