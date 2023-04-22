import { useParams } from "react-router-dom"
import data from "../../datas/logements.json"
import Carousel from "../../components/Carousel"
import Collapse from "../../components/Collapse"
import Tags from "../../components/Tags"
import Ratings from "../../components/Ratings"


export default function FicheLogement() {
    const { id } = useParams()
    const choixlogement = data.find(choixlogement => choixlogement.id === id)

    const logementsequipment = choixlogement.equipments;
    const equip = logementsequipment.map((item, index) => (
        <li key={index} className="equipList">
            {item}
        </li>
    ));
    const choixlogementtags = choixlogement.tags;
    const tag = choixlogementtags.map((item, index) => (
        <span key={index} className="tags">
            {item}
        </span>
    ));

    return (
        <section className="logement-wrapper">
            <Carousel pictures={choixlogement.pictures} />
            <div>
                <h2 className="card-logement_title" >
                    {choixlogement.title}
                </h2>
                <p>{choixlogement.host.name}</p>
                <img src={choixlogement.host.picture} alt="hote" />

            </div>
            <p className="card-logement__location">{choixlogement.location}</p>
            <Tags tags={tag} />
            <Ratings rating={choixlogement.rating} />
            <div className="collapse-wrapper">
                <Collapse
                    collapseTitle="Description"
                    collapseText={choixlogement.description}
                />

                <Collapse
                    collapseTitle="Équipements"
                    collapseText={equip}
                />

            </div>

        </section>
    )
}