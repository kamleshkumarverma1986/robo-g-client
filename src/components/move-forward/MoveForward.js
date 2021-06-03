import "./MoveForward.css";

const MoveForward = ({onMovement}) => {
    return (
        <button className="move-button forward" onClick={()=> onMovement("forward")}>LED OFF</button>
    )
}
export default MoveForward;