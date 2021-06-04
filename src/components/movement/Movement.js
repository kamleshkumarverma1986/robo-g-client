import "./Movement.css";
import MoveForward from "../../components/move-forward/MoveForward";
import MoveRight from "../../components/move-right/MoveRight";
import MoveLeft from "../../components/move-left/MoveLeft";
import MoveBack from "../../components/move-back/MoveBack";
import MoveStop from "../../components/move-stop/MoveStop";

const Movement = ({socket}) => {
    const onMovementHandler = (movement) => {
        socket.emit("movement", { movement });
    }
    return (
        <div className="movement">
            <MoveForward onMovement={onMovementHandler} />
            <MoveRight onMovement={onMovementHandler} />
            <MoveLeft onMovement={onMovementHandler} />
            <MoveBack onMovement={onMovementHandler} />
            <MoveStop onMovement={onMovementHandler} />
        </div>
    )
}
export default Movement;