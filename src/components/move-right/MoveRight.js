import "./MoveRight.css";

const MoveRight = ({onMovement}) => {
    return (
        <button
            className="move-button right"
            onPointerDown={() => onMovement("right")}
            onPointerUp={() => onMovement("stop")}
        >
        </button>
    )
}
export default MoveRight;