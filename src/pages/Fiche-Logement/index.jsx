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

    const { id } = useParams()  //Il est possible de passer des paramètres dans une route et de les récupérer avec useParams(). avec le hook useparams, on recupère l'id dans l'URL

    const choixlogement = data.find(choixlogement => choixlogement.id === id);  //on récupère avec l'id toutes les valeurs qui nous intéressent sur un appartement

    //si l'ID est fausse dans l'URL, notre const choixlogement sera indefine, du coup on renvoie sur la page d'erreur
    if (!choixlogement) {
        return <Error />
    }


    // on recupère les props "équipements" et les "tags"
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