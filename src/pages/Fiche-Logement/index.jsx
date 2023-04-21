import { useParams } from "react-router-dom"
import data from "../../datas/logements.json"
import Carousel from "../../components/Carousel"
import Collapse from "../../components/Collapse"


export default function FicheLogement() {
    const { id } = useParams()
    const choixlogement = data.find(choixlogement => choixlogement.id === id)
    const logementsequipment = choixlogement.equipments;
    const equip = logementsequipment.map((item, index) => (
        <li key={index} className="equipList">
            {item}
        </li>
    ));

    return (
        <section className="logement-wrapper">
            <Carousel pictures={choixlogement.pictures} />
            <h2 className="card-logement_title" >
                {choixlogement.title}
            </h2>
            <p className="card-logement__location">{choixlogement.location}</p>
            <Collapse
                collapseTitle="Description"
                collapseText={choixlogement.description}
            />

            <Collapse
                collapseTitle="Équipements"
                collapseText={equip}
            />




        </section>
    )
}