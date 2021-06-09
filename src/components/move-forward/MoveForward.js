import "./MoveForward.css";

const MoveForward = ({onMovement}) => {
    return (
        <button
            className="move-button forward"
            onPointerDown={() => onMovement("forward")}
            onPointerUp={() => onMovement("stop")}
        >
        </button>
    )
}
export default MoveForward;

