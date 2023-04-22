import { useState } from "react";
import chevronGauche from "../../assets/vector-left.svg"
import chevronDroite from "../../assets/vector-right.svg"

export default function Carousel({ pictures }) {

    const [cpt, setCpt] = useState(0)
    const nbrePictures = pictures.length - 1

    if (cpt < 0) setCpt(nbrePictures)
    if (cpt > nbrePictures) setCpt(0)

    if (nbrePictures === 0) {
        return (
            <div className="carousel">
                <div className="div-image">
                    <img src={pictures[cpt]} className="classImage" key={"car" + cpt} alt={"photo" + cpt} />
                </div>
            </div>
        )
    } else {
        return (
            <div className="carousel">

                <div className="div-image">
                    <img src={pictures[cpt]} className="classImage" key={"car" + cpt} alt={"photo" + cpt} />
                </div>

                <div>
                    <button onClick={() => setCpt(cpt - 1)}>{cpt}
                        <img src={chevronGauche} className="classChevronGauche" alt={"flèche gauche" + cpt} />
                    </button>
                    <button onClick={() => setCpt(cpt + 1)}>{cpt}
                        <img src={chevronDroite} className="classChevronDroite" alt={"flèche droite" + cpt} />
                    </button>
                </div>
                <p className="compteurImages">{cpt + 1}/{nbrePictures + 1}</p>
            </div>
        )

    }
}