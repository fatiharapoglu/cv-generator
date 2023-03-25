const General = (props) => {
    return (
        <div className="flex-container">
            <form>
                <h1>
                    GENEL BİLGİLER <i className="fa-solid fa-image-portrait"></i>
                </h1>
                <input
                    type="text"
                    value={props.data.name}
                    onChange={props.handler}
                    placeholder="Ad"
                    id="name"
                />
                <input
                    type="text"
                    value={props.data.lastName}
                    onChange={props.handler}
                    placeholder="Soyad"
                    id="lastName"
                />
                <input
                    type="text"
                    value={props.data.born}
                    onChange={props.handler}
                    placeholder="Doğum tarihi"
                    id="born"
                />
                <input
                    type="text"
                    value={props.data.place}
                    onChange={props.handler}
                    placeholder="Doğum yeri"
                    id="place"
                />
                <input
                    type="text"
                    value={props.data.sex}
                    onChange={props.handler}
                    placeholder="Cinsiyet"
                    id="sex"
                />
                <input
                    type="text"
                    value={props.data.marital}
                    onChange={props.handler}
                    placeholder="Medeni hal"
                    id="marital"
                />
                <input
                    type="text"
                    value={props.data.drive}
                    onChange={props.handler}
                    placeholder="Sürücü ehliyeti"
                    id="drive"
                />
                <input
                    type="text"
                    value={props.data.military}
                    onChange={props.handler}
                    placeholder="Askerlik hizmeti"
                    id="military"
                />
                <input
                    type="text"
                    value={props.data.title}
                    onChange={props.handler}
                    placeholder="Meslek"
                    id="title"
                />
                <input
                    type="text"
                    value={props.data.adress}
                    onChange={props.handler}
                    placeholder="Adres"
                    id="adress"
                />
                <input
                    type="text"
                    value={props.data.phone}
                    onChange={props.handler}
                    placeholder="Telefon numarası"
                    id="phone"
                />
                <input
                    type="text"
                    value={props.data.email}
                    onChange={props.handler}
                    placeholder="E-mail"
                    id="email"
                />
                <input
                    type="text"
                    value={props.data.web}
                    onChange={props.handler}
                    placeholder="Web sayfası"
                    id="web"
                />
                <input
                    type="text"
                    value={props.data.desc}
                    onChange={props.handler}
                    placeholder="Hakkında"
                    id="desc"
                />
            </form>
        </div>
    );
};

export default General;
