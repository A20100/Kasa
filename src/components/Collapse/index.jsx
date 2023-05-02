import { useState } from 'react';
import ChevronBas from "../../assets/vectorBas.svg"
import ChevronHaut from "../../assets/vectorHaut.svg"

export default function Collapse(props) {
    const [isExpanded, setExpanded] = useState(false);
    function handleOnClick() {
        setExpanded(!isExpanded);
    }
    return (
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