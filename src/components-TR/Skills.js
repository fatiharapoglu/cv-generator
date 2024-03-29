import { useState } from "react";

const Skills = (props) => {
    const [counter, setCounter] = useState(1);

    const addSkill = () => {
        setCounter(counter + 1);
    };

    return (
        <div className="flex-container">
            <ul>
                <h1>
                    YETENEKLER <i className="fa-solid fa-screwdriver-wrench"></i>
                </h1>
                <li>
                    <input
                        type="text"
                        value={props.data["skill1"]}
                        onChange={props.handler}
                        placeholder={"Yetenek #1"}
                        id={"skill1"}
                    />
                </li>
                {counter > 1 && (
                    <li>
                        <input
                            type="text"
                            value={props.data["skill2"]}
                            onChange={props.handler}
                            placeholder={"Yetenek #2"}
                            id={"skill2"}
                        />
                    </li>
                )}
                {counter > 2 && (
                    <li>
                        <input
                            type="text"
                            value={props.data["skill3"]}
                            onChange={props.handler}
                            placeholder={"Yetenek #3"}
                            id={"skill3"}
                        />
                    </li>
                )}
                {counter > 3 && (
                    <li>
                        <input
                            type="text"
                            value={props.data["skill4"]}
                            onChange={props.handler}
                            placeholder={"Yetenek #4"}
                            id={"skill4"}
                        />
                    </li>
                )}
                {counter > 4 && (
                    <li>
                        <input
                            type="text"
                            value={props.data["skill5"]}
                            onChange={props.handler}
                            placeholder={"Yetenek #5"}
                            id={"skill5"}
                        />
                    </li>
                )}
                {counter > 5 && (
                    <li>
                        <input
                            type="text"
                            value={props.data["skill6"]}
                            onChange={props.handler}
                            placeholder={"Yetenek #6"}
                            id={"skill6"}
                        />
                    </li>
                )}
                {counter > 6 && (
                    <li>
                        <input
                            type="text"
                            value={props.data["skill7"]}
                            onChange={props.handler}
                            placeholder={"Yetenek #7"}
                            id={"skill7"}
                        />
                    </li>
                )}
                {counter > 7 && (
                    <li>
                        <input
                            type="text"
                            value={props.data["skill8"]}
                            onChange={props.handler}
                            placeholder={"Yetenek #8"}
                            id={"skill8"}
                        />
                    </li>
                )}
            </ul>
            {!(counter > 7) && (
                <button onClick={addSkill} className="btn">
                    <i className="fa-solid fa-plus"></i> Yeni Yetenek Ekle
                </button>
            )}
        </div>
    );
};

export default Skills;
