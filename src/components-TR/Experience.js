const Experience = (props) => {
    const plusHtml = (
        <>
            <h1>
                DENEYİM #2 <i className="fa-solid fa-briefcase"></i>
            </h1>
            <input
                type="text"
                value={props.dataPlus.positionPlus}
                onChange={props.handlerPlus}
                placeholder="Pozisyon"
                id="positionPlus"
            />
            <input
                type="text"
                value={props.dataPlus.companyPlus}
                onChange={props.handlerPlus}
                placeholder="Şirket"
                id="companyPlus"
            />
            <input
                type="text"
                value={props.dataPlus.expCityPlus}
                onChange={props.handlerPlus}
                placeholder="Şehir"
                id="expCityPlus"
            />
            <input
                type="text"
                value={props.dataPlus.expFromDatePlus}
                onChange={props.handlerPlus}
                placeholder="Tarih başlangıcı (Yıl)"
                id="expFromDatePlus"
            />
            <input
                type="text"
                value={props.dataPlus.expToDatePlus}
                onChange={props.handlerPlus}
                placeholder="Tarih bitişi (Yıl)"
                id="expToDatePlus"
            />
        </>
    );

    return (
        <div className="flex-container">
            <form>
                <h1>
                    {props.isExpPlusClicked ? "DENEYİM #1" : "DENEYİM"}{" "}
                    <i className="fa-solid fa-briefcase"></i>
                </h1>
                <input
                    type="text"
                    value={props.data.position}
                    onChange={props.handler}
                    placeholder="Pozisyon"
                    id="position"
                />
                <input
                    type="text"
                    value={props.data.company}
                    onChange={props.handler}
                    placeholder="Şirket"
                    id="company"
                />
                <input
                    type="text"
                    value={props.data.expCity}
                    onChange={props.handler}
                    placeholder="Şehir"
                    id="expCity"
                />
                <input
                    type="text"
                    value={props.data.expFromDate}
                    onChange={props.handler}
                    placeholder="Tarih başlangıcı (Yıl)"
                    id="expFromDate"
                />
                <input
                    type="text"
                    value={props.data.expToDate}
                    onChange={props.handler}
                    placeholder="Tarih bitişi (Yıl)"
                    id="expToDate"
                />
                {props.isExpPlusClicked && plusHtml}
            </form>
            {!props.isExpPlusClicked && (
                <button onClick={props.plusExperience} className="btn">
                    <i className="fa-solid fa-plus"></i> Yeni Deneyim Ekle
                </button>
            )}
        </div>
    );
};

export default Experience;
