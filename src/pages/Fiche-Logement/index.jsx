import { useParams } from "react-router-dom"
import data from "../../datas/logements.json"
//import Carousel from "../../components/Carousel"
//import Collapse from "../../components/Collapse"


export default function FicheLogement() {
    const { id } = useParams()
    console.log(id);
    const choixlogement = data.find(choixlogement => choixlogement.id === id)

    return (
        <section className="logement-wrapper">
        </section>
    )
}