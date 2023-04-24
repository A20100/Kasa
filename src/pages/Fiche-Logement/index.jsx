import { useParams } from "react-router-dom"
import data from "../../datas/logements.json"
import Carousel from "../../components/Carousel"
import Collapse from "../../components/Collapse"
import Tags from "../../components/Tags"
import Ratings from "../../components/Ratings"
import Host from "../../components/Host"

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
            <Host
                hostTitle={choixlogement.title}
                hostLocation={choixlogement.location}
                hostName={choixlogement.host.name}
                hostPic={choixlogement.host.picture}
            />
            <div className="tags-ratings-wrapper">
                <Tags tags={tag} />
                <Ratings rating={choixlogement.rating} />
            </div>
            <div className="collapse-wrapper-location">
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