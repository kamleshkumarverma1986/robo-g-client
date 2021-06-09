import "./MoveLeft.css";

const MoveLeft = ({onMovement}) => {
    return (
        <button
            className="move-button left"
            onPointerDown={() => onMovement("left")}
            onPointerUp={() => onMovement("stop")}
        >
        </button>
    )
}
export default MoveLeft;