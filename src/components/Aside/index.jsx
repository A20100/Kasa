export default function Aside(props) {
    return (
        <div className="profile">
            <p>{props.hostName}</p>
            <img src={props.hostPic} alt="hote" />
        </div>
    )
}