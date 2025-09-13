import { useEffect, useState } from "react";
import "./Speed.css";

const Speed = ({ socket }) => {
  const [headLight, setHeadLight] = useState(false);
  const [hornBuzzer, setHornBuzzer] = useState(false);

  const onSpeedChangeHandler = (data) => {
    socket.emit("movement", { movement: `speed-${data.target.value}` });
  };

  useEffect(() => {
    if (headLight) {
      socket.emit("movement", { movement: `led-on` });
    } else {
      socket.emit("movement", { movement: `led-off` });
    }
  }, [socket, headLight]);

  useEffect(() => {
    if (hornBuzzer) {
      socket.emit("movement", { movement: `horn-on` });
    } else {
      socket.emit("movement", { movement: `horn-off` });
    }
  }, [socket, hornBuzzer]);

  return (
    <div className="speed-section text-align-center">
      <div className="button-alignment">
        <button
          className="movement-btn1"
          onPointerDown={() => setHornBuzzer(true)}
          onPointerUp={() => setHornBuzzer(false)}
        >
          HORN
        </button>
        <div>
          <label>Control Speed</label>
          <div className="range">
            <input
              type="range"
              min="0"
              max="9"
              onChange={onSpeedChangeHandler}
            />
          </div>
        </div>
        <button
          className="movement-btn1"
          onClick={() => setHeadLight(!headLight)}
        >
          HEAD LIGHT
        </button>
      </div>
    </div>
  );
};
export default Speed;
