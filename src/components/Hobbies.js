import { useState } from "react";

const Hobbies = (props) => {
    const [counter, setCounter] = useState(1);

    const addHobby = () => {
        setCounter(counter + 1);
    };

    return (
        <div className="flex-container">
            <ul>
                <h1>
                    HOBBIES <i className="fa-solid fa-icons"></i>
                </h1>
                <li>
                    <input
                        type="text"
                        value={props.data["hobby1"]}
                        onChange={props.handler}
                        placeholder={"Hobby #1"}
                        id={"hobby1"}
                    />
                </li>
                {counter > 1 && (
                    <li>
                        <input
                            type="text"
                            value={props.data["hobby2"]}
                            onChange={props.handler}
                            placeholder={"Hobby #2"}
                            id={"hobby2"}
                        />
                    </li>
                )}
                {counter > 2 && (
                    <li>
                        <input
                            type="text"
                            value={props.data["hobby3"]}
                            onChange={props.handler}
                            placeholder={"Hobby #3"}
                            id={"hobby3"}
                        />
                    </li>
                )}
                {counter > 3 && (
                    <li>
                        <input
                            type="text"
                            value={props.data["hobby4"]}
                            onChange={props.handler}
                            placeholder={"Hobby #4"}
                            id={"hobby4"}
                        />
                    </li>
                )}
                {counter > 4 && (
                    <li>
                        <input
                            type="text"
                            value={props.data["hobby5"]}
                            onChange={props.handler}
                            placeholder={"Hobby #5"}
                            id={"hobby5"}
                        />
                    </li>
                )}
                {counter > 5 && (
                    <li>
                        <input
                            type="text"
                            value={props.data["hobby6"]}
                            onChange={props.handler}
                            placeholder={"Hobby #6"}
                            id={"hobby6"}
                        />
                    </li>
                )}
                {counter > 6 && (
                    <li>
                        <input
                            type="text"
                            value={props.data["hobby7"]}
                            onChange={props.handler}
                            placeholder={"Hobby #7"}
                            id={"hobby7"}
                        />
                    </li>
                )}
                {counter > 7 && (
                    <li>
                        <input
                            type="text"
                            value={props.data["hobby8"]}
                            onChange={props.handler}
                            placeholder={"Hobby #8"}
                            id={"hobby8"}
                        />
                    </li>
                )}
            </ul>
            {!(counter > 7) && (
                <button onClick={addHobby} className="btn">
                    <i className="fa-solid fa-plus"></i> Add New Hobby
                </button>
            )}
        </div>
    );
};

export default Hobbies;
