import { useState } from "react";
import chevronGauche from "../../assets/vector-left.svg"
import chevronDroite from "../../assets/vector-right.svg"

export default function Carousel({ pictures }) {

    const [cpt, setCpt] = useState(0)  //je définiS l'index du premier slide à 0
    const nbrePictures = pictures.length - 1

    if (cpt < 0) setCpt(nbrePictures) //si l'index est inf à 0, on revient au dernier slide
    if (cpt > nbrePictures) setCpt(0) //si l'index est sup au nbre de photo, on revient au premier slide

    if (nbrePictures === 0) {  //si il y a une seul photo, on ne fait pas apparaitre les flèches ni le cpteur comme sur la maquette
        return (
            <div className="carousel">
                <div className="div-image">
                    <img src={pictures[cpt]} className="classImage" key={"car" + cpt} alt={"photo" + cpt} />
                </div>
            </div>
        )
    } else {
        return (  //sinon on fait apparaitre les flèches (button clickable) qui permettent de modifier la valeur cpt et ainsi changer image
            <div className="carousel">

                <div className="div-image">
                    <img src={pictures[cpt]} className="classImage" key={"car" + cpt} alt={"photo" + cpt} />
                </div>

                <div>
                    <button onClick={() => setCpt(cpt - 1)}>
                        <img src={chevronGauche} className="classChevronGauche" alt={"flèche gauche" + cpt} />
                    </button>
                    <button onClick={() => setCpt(cpt + 1)}>
                        <img src={chevronDroite} className="classChevronDroite" alt={"flèche droite" + cpt} />
                    </button>
                </div>
                <p className="compteurImages">{cpt + 1}/{nbrePictures + 1}</p>
            </div>
        )

    }
}