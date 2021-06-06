import "./Speed.css";

const Speed = ({socket}) => {
    const onSpeedChangeHandler = (data) => {
        socket.emit("movement", {movement: `speed-${data.target.value}`});
    }
    return (
        <div className='text-align-center'>
            <input type="range" min="0" max="9" onMouseUp={onSpeedChangeHandler}/>
        </div>
    )
}
export default Speed;
