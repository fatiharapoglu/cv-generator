import React from "react";

const Education = (props) => {
    const plusHtml = (
        <>
            <h1>
                EĞİTİM #2 <i className="fa-solid fa-user-graduate"></i>
            </h1>
            <input
                type="text"
                value={props.dataPlus.uniPlus}
                onChange={props.handlerPlus}
                placeholder="Okul"
                id="uniPlus"
            />
            <input
                type="text"
                value={props.dataPlus.eduCityPlus}
                onChange={props.handlerPlus}
                placeholder="Şehir"
                id="eduCityPlus"
            />
            <input
                type="text"
                value={props.dataPlus.degreePlus}
                onChange={props.handlerPlus}
                placeholder="Derece"
                id="degreePlus"
            />
            <input
                type="text"
                value={props.dataPlus.subjectPlus}
                onChange={props.handlerPlus}
                placeholder="Bölüm"
                id="subjectPlus"
            />
            <input
                type="text"
                value={props.dataPlus.eduFromDatePlus}
                onChange={props.handlerPlus}
                placeholder="Tarih başlangıcı (Yıl)"
                id="eduFromDatePlus"
            />
            <input
                type="text"
                value={props.dataPlus.eduToDatePlus}
                onChange={props.handlerPlus}
                placeholder="Tarih bitişi (Yıl)"
                id="eduToDatePlus"
            />
        </>
    );

    return (
        <div className="flex-container">
            <form>
                <h1>
                    {props.isEduPlusClicked ? "EĞİTİM #1" : "EĞİTİM"}{" "}
                    <i className="fa-solid fa-user-graduate"></i>
                </h1>
                <input
                    type="text"
                    value={props.data.uni}
                    onChange={props.handler}
                    placeholder="Okul"
                    id="uni"
                />
                <input
                    type="text"
                    value={props.data.eduCity}
                    onChange={props.handler}
                    placeholder="Şehir"
                    id="eduCity"
                />
                <input
                    type="text"
                    value={props.data.degree}
                    onChange={props.handler}
                    placeholder="Derece"
                    id="degree"
                />
                <input
                    type="text"
                    value={props.data.subject}
                    onChange={props.handler}
                    placeholder="Bölüm"
                    id="subject"
                />
                <input
                    type="text"
                    value={props.data.eduFromDate}
                    onChange={props.handler}
                    placeholder="Tarih başlangıcı (Yıl)"
                    id="eduFromDate"
                />
                <input
                    type="text"
                    value={props.data.eduToDate}
                    onChange={props.handler}
                    placeholder="Tarih bitişi (Yıl)"
                    id="eduToDate"
                />
                {props.isEduPlusClicked && plusHtml}
            </form>
            {!props.isEduPlusClicked && (
                <button onClick={props.plusEducation} className="btn">
                    <i className="fa-solid fa-plus"></i> Yeni Eğitim Ekle
                </button>
            )}
        </div>
    );
};

export default Education;
