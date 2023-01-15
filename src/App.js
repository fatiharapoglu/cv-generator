import React, { useState } from "react";
import MainTR from "./components-TR/m-main";
import Footer from "./components/m-footer";
import Main from "./components/m-main";

function App() {
    const [currentLanguage, setCurrentLanguage] = useState("EN");

    const handleLanguageChange = () => {
        if (currentLanguage === "TR") {
            setCurrentLanguage("EN");
        } else {
            setCurrentLanguage("TR");
        }
        const languageSpanEN = document.querySelector("#language-en");
        const languageSpanTR = document.querySelector("#language-tr");
        languageSpanEN.classList.toggle("active");
        languageSpanTR.classList.toggle("active");
    };

    return (
        <>
            {currentLanguage === "EN" && <Main />}
            {currentLanguage === "TR" && <MainTR />}
            <div>
                <button className="btn language" onClick={handleLanguageChange}>
                    <span id="language-en" className="active">
                        EN
                    </span>{" "}
                    / <span id="language-tr">TR</span>
                </button>
            </div>
            <Footer />
        </>
    );
}

export default App;
