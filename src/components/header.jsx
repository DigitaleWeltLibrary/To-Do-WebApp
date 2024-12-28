import { faMoon, faPaw, faSun } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../style/header.scss"
import { faSquarePlus } from "@fortawesome/free-solid-svg-icons/faSquarePlus";

export default function Header({ gettheme, settheme, setcreate }) {



    return (
        <header>
            <div>
                <FontAwesomeIcon icon={faPaw} size="xl" />
                <h1>TaskTiger</h1>
            </div>
            <div className="icons">
                <FontAwesomeIcon
                    icon={faSquarePlus}
                    size="xl"
                    color={gettheme ? "#fff" : "#000"}
                    onClick={() => setcreate(prevState => !prevState)}
                />
                <FontAwesomeIcon
                    icon={gettheme ? faMoon : faSun}
                    size="xl"
                    color={gettheme ? "#fff" : "#000"}
                    onClick={() => settheme(prevState => !prevState)}
                />
            </div>
        </header>
    )
}