import "./MoveStop.css";

const MoveStop = ({onMovement}) => {
    return (
        <button className="center-action-button" onClick={() => onMovement("stop")}></button>
    )
}
export default MoveStop;