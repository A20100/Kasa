import { useState } from 'react';
import { useCollapse } from 'react-collapsed';
import ChevronBas from "../../assets/vectorBas.svg"
import ChevronHaut from "../../assets/vectorHaut.svg"

export default function Collapse(props) {
    const [isExpanded, setExpanded] = useState(false);
    const { getCollapseProps, getToggleProps } = useCollapse({ isExpanded });
    function handleOnClick() {
        // Do more stuff with the click event!
        // Or, set isExpanded conditionally 
        setExpanded(!isExpanded);
    }
    return (
        <div className="collapsible">
            <div className="header" {...getToggleProps({ onClick: handleOnClick })}>
                <h3>{props.collapseTitle} </h3>
                {isExpanded ? <img src={ChevronHaut} alt="flèche haut" /> : <img src={ChevronBas} alt="flèche bas" />}

            </div>
            <div {...getCollapseProps()}>
                <div className="content">
                    <p> {props.collapseText}</p>
                </div>
            </div>
        </div>
    );
}