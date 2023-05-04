import { useState } from 'react';
import ChevronBas from "../../assets/vectorBas.svg"
import ChevronHaut from "../../assets/vectorHaut.svg"

export default function Collapse(props) {
    const [isExpanded, setExpanded] = useState(false); //je définiS l'index du collapse expanded en faux
    function handleOnClick() {
        setExpanded(!isExpanded);
    }
    return (  //div h3 est clickable - on change isexpanded en true - et donc on fait apparaitre le p
        <div className="collapsible">
            <div onClick={handleOnClick} className="header"  >
                <h3>{props.collapseTitle} </h3>
                {isExpanded ? <img src={ChevronHaut} alt="flèche haut" /> : <img src={ChevronBas} alt="flèche bas" />}

            </div>
            <div >
                <div className="content">
                    <p hidden={isExpanded ? false : true}>{props.collapseText}</p>
                </div>
            </div>
        </div>
    );
}