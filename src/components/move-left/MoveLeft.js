import "./MoveLeft.css";

const MoveLeft = ({onMovement}) => {
    return (
        <button className="move-button left" onClick={() => onMovement("left")}></button>
    )
}
export default MoveLeft;