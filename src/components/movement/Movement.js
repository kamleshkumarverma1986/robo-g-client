import "./Movement.css";

const Movement = ({ socket }) => {
  const onMovementHandler = (movement) => {
    socket.emit("movement", { movement });
  };
  return (
    <div>
      <div className="display-flex justify-content-center">
        <button
          className="movement-btn"
          onPointerDown={() => onMovementHandler("forward-left")}
          onPointerUp={() => onMovementHandler("stop")}
        >
          <i className="fa fa-arrow-up rotate-btn-45d-left"></i>
        </button>
        <button
          className="movement-btn"
          onPointerDown={() => onMovementHandler("forward")}
          onPointerUp={() => onMovementHandler("stop")}
        >
          <i className="fa fa-arrow-up transform-scale-y"></i>
        </button>
        <button
          className="movement-btn"
          onPointerDown={() => onMovementHandler("forward-right")}
          onPointerUp={() => onMovementHandler("stop")}
        >
          <i className="fa fa-arrow-up rotate-btn-45d-right"></i>
        </button>
      </div>
      <div className="display-flex justify-content-center">
        <button
          className="movement-btn"
          onPointerDown={() => onMovementHandler("left")}
          onPointerUp={() => onMovementHandler("stop")}
        >
          <i className="fa fa-arrow-left transform-scale-x"></i>
        </button>
        <button
          className="movement-btn stop-btn"
          onClick={() => onMovementHandler("stop")}
        >
          <i className="fa fa-circle"></i>
        </button>
        <button
          className="movement-btn"
          onPointerDown={() => onMovementHandler("right")}
          onPointerUp={() => onMovementHandler("stop")}
        >
          <i className="fa fa-arrow-right transform-scale-x"></i>
        </button>
      </div>
      <div className="display-flex justify-content-center">
        <button
          className="movement-btn"
          onPointerDown={() => onMovementHandler("back-left")}
          onPointerUp={() => onMovementHandler("stop")}
        >
          <i className="fa fa-arrow-down rotate-btn-45d-right "></i>
        </button>
        <button
          className="movement-btn"
          onPointerDown={() => onMovementHandler("back")}
          onPointerUp={() => onMovementHandler("stop")}
        >
          <i className="fa fa-arrow-down transform-scale-y"></i>
        </button>
        <button
          className="movement-btn"
          onPointerDown={() => onMovementHandler("back-right")}
          onPointerUp={() => onMovementHandler("stop")}
        >
          <i className="fa fa-arrow-down rotate-btn-45d-left"></i>
        </button>
      </div>
    </div>
  );
};
export default Movement;
