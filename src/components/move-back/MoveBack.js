import "./MoveBack.css";

const MoveBack = ({onMovement}) => {
    return (
        <button
            className="move-button back"
            onPointerDown={() => onMovement("back")}
            onPointerUp={() => onMovement("stop")}
        >
        </button>
    )
}
export default MoveBack;