import "./MoveRight.css";

const MoveRight = ({onMovement}) => {
    return (
        <button className="move-button right" onClick={() => onMovement("right")}></button>
    )
}
export default MoveRight;