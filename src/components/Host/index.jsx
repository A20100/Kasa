export default function Host(props) {
    return (
        <div className="host-wrapper">
            <h2 className="card-logement_title" >
                {props.hostTitle}
            </h2>
            <p className="card-logement__location">{props.hostLocation}</p>
        </div>
    )
}