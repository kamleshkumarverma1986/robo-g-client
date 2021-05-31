import "./MoveBack.css";

const MoveBack = ({onMovement}) => {
    return (
        <button className="move-button back" onClick={() => onMovement("back")}></button>
    )
}
export default MoveBack;