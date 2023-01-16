import React, { useState } from "react";
import MainTR from "./components-TR/m-main";
import Footer from "./components/m-footer";
import Main from "./components/m-main";

function App() {
    const [currentLanguage, setCurrentLanguage] = useState("EN");
    const [currentTheme, setCurrentTheme] = useState("dark");

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

    const handleThemeChange = () => {
        if (currentTheme === "light") {
            setCurrentTheme("dark");
            document.documentElement.style.setProperty("--fourth", "#ffffff");
            document.documentElement.style.setProperty("--preview-color-1", "#151515");
            document.documentElement.style.setProperty("--preview-color-2", "#1b1d20");
            document.documentElement.style.setProperty("--preview-color-3", "#19191a");
            document.documentElement.style.setProperty("--preview-color-4", "#e4fefe");
            document.documentElement.style.setProperty("--border-preview", "1px dashed #343434");
        } else {
            setCurrentTheme("light");
            document.documentElement.style.setProperty("--fourth", "#090909");
            document.documentElement.style.setProperty("--preview-color-1", "#c2ccdf");
            document.documentElement.style.setProperty("--preview-color-2", "#d7e0f1");
            document.documentElement.style.setProperty("--preview-color-3", "#d1d9eb");
            document.documentElement.style.setProperty("--preview-color-4", "#141c29");
            document.documentElement.style.setProperty("--border-preview", "1px dashed #acacac");
        }
        const themeSpanDark = document.querySelector("#theme-dark");
        const themeSpanLight = document.querySelector("#theme-light");
        themeSpanDark.classList.toggle("active");
        themeSpanLight.classList.toggle("active");
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
                <button className="btn theme" onClick={handleThemeChange}>
                    <span id="theme-dark" className="active">
                        Dark
                    </span>{" "}
                    / <span id="theme-light">Light</span>
                </button>
            </div>
            <Footer />
        </>
    );
}

export default App;
