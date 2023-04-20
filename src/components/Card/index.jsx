import { Link } from "react-router-dom";
import data from "../../datas/logements.json"

export default function Card() {
    return (
        <section className="card-wrapper">
            {data.map(({ id, title, cover }) => (
                <div className="card_logement" key={id}>
                    <Link className="link_card_logement" to={`/fiche-logement/${id}`}>
                        <article className="card-logement">
                            <img src={cover} alt="la location" />
                            <div className="card-logement__bg">
                                <p className="card-logement__title">{title}</p>
                            </div>
                        </article>
                    </Link>
                </div>
            ))}

        </section>
    );
}