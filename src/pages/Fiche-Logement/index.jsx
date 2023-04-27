import Error from "../Error/index";
import { useParams } from "react-router-dom"
import data from "../../datas/logements.json"
import Carousel from "../../components/Carousel"
import Collapse from "../../components/Collapse"
import Tags from "../../components/Tags"
import Ratings from "../../components/Ratings"
import Host from "../../components/Host"
import Aside from "../../components/Aside"

export default function FicheLogement() {

    const { id } = useParams()

    const choixlogement = data.find(choixlogement => choixlogement.id === id);
    if (!choixlogement) {
        return <Error />
    }

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
        <>
            <Carousel pictures={choixlogement.pictures} />
            <section className="logement-wrapper">
                <div>
                    <Host
                        hostTitle={choixlogement.title}
                        hostLocation={choixlogement.location}
                    />
                    <Tags tags={tag} />
                </div>
                <aside>
                    <Aside
                        hostName={choixlogement.host.name}
                        hostPic={choixlogement.host.picture}
                    />
                    <Ratings rating={choixlogement.rating} />
                </aside>
            </section>
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
        </>
    )
}