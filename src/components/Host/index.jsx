export default function Host(props) {
    return (
        <div className="host-wrapper">
            <div>
                <h2 className="card-logement_title" >
                    {props.hostTitle}
                </h2>
                <p className="card-logement__location">{props.hostLocation}</p>
            </div>
            <aside>
                <p>{props.hostName}</p>
                <img src={props.hostPic} alt="hote" />
            </aside>
        </div>
    )
}