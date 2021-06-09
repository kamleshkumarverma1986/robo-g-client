import "./Speed.css";

const Speed = ({socket}) => {
    const onSpeedChangeHandler = (data) => {
        socket.emit("movement", {movement: `speed-${data.target.value}`});
    }
    return (
        <div className="speed-section text-align-center">
            <label>Control Speed</label>
            <div>
                <input type="range" min="0" max="9" onMouseUp={onSpeedChangeHandler}/>
            </div>
        </div>
    )
}
export default Speed;
