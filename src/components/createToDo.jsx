import { faCalendarPlus, faDeleteLeft, faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import style from "../style/createToDo.module.scss"
import { useState } from "react";
import { faClipboardQuestion } from "@fortawesome/free-solid-svg-icons/faClipboardQuestion";
import { faCirclePlus } from "@fortawesome/free-solid-svg-icons/faCirclePlus";
import { faListCheck } from "@fortawesome/free-solid-svg-icons/faListCheck";

export default function CreateToDo({ setcreate }) {

    const [getsubtask, setsubtask] = useState([])
    const [getinpsubtask, setinpsubtask] = useState("");

    const submit = (e) => {
        e.preventDefault();
        console.log("submit")
    };

    const addsubtask = () => {
        if (!getsubtask.includes(getinpsubtask) && getinpsubtask.trim() !== "") {
            setsubtask([...getsubtask, getinpsubtask]);
        }
        setinpsubtask("");
    };

    /* name / type / label / Placeholder / select */
    const inputs = [
        ["todo", "text", "ToDo", "Mein ToDo"],
        ["dueDate", "date", "Fälligkeitsdatum"],
        ["priority", "select", "Priorität", , ["niedrig", "mittel", "hoch"]],
        ["category", "select", "Kategorie", , ["Arbeit", "Design", "Marketing", "Technologie", "Finanzen"]],
        ["assignedTo", "text", "Mitwirkende", "Mitwirkende ..."],
    ];

    return (
        <form onSubmit={submit} className={style.from}>

            <FontAwesomeIcon
                icon={faXmark}
                className={style.close}
                onClick={() => setcreate(prevSate => !prevSate)}
            />

            <h2>Neues ToDo erstellen</h2>

            <article>
                <section>
                    {inputs.map(([name, type, label, placeholder, select = null], index) => {
                        return (

                            <div key={index}>
                                <label htmlFor={name}>{label}</label>
                                {Array.isArray(select) ? (
                                    <select id={name} name={name}>
                                        {select.map((item, index) => (
                                            <option key={index} value={item}>
                                                {item}
                                            </option>
                                        ))}
                                    </select>
                                ) : (
                                    <input type={type} id={name} name={name} placeholder={placeholder} />
                                )}
                            </div>


                        );
                    })}
                    <div>
                        <label htmlFor="subtasks">Unteraufgaben</label>
                        <input
                            type="text"
                            id="subtasks"
                            name="subtasks"
                            placeholder="Unteraufgaben ..."
                            onChange={(e) => setinpsubtask(e.target.value)}
                            value={getinpsubtask}
                        />
                        <FontAwesomeIcon
                            icon={faCirclePlus}
                            onClick={addsubtask}
                        />
                    </div>
                </section>
                <section>

                    {
                        getsubtask.length == 0 ?
                            (
                                <div>
                                    <FontAwesomeIcon icon={faClipboardQuestion} />
                                    <p>Kein Subtask vorhanden</p>
                                </div>
                            ) :
                            <div>
                                <div >
                                    <FontAwesomeIcon icon={faListCheck} />
                                    <p>SubTasks</p>
                                </div>
                                <ul>
                                    {getsubtask.map((item, index) => (
                                        <li key={index}>{item}</li>
                                    ))}
                                </ul>
                            </div>
                    }

                </section>
            </article>


            <section>

                <label htmlFor="submition">
                    <FontAwesomeIcon icon={faCalendarPlus} />
                    ToDo erstellen
                </label>
                <label htmlFor="reset" onClick={() => setsubtask([])}>
                    <FontAwesomeIcon icon={faDeleteLeft} />
                    Löschen
                </label>
                <input type="submit" id="submition" name="submition" value="" />
                <input type="reset" id="reset" name="reset" value="" />
            </section>
        </form>
    )
}