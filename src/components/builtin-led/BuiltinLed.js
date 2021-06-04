import { useRef, useState } from "react";
import "./BuiltinLed.css";

const BuiltinLed = ({socket}) => {
    const [isLedON, setLedON] = useState(false);

    let ledElement = useRef(null);
    const onLedClickHandler = () => {
        ledElement.classList.toggle('led-green');
        setLedON(!isLedON);
        socket.emit("movement", { movement :  isLedON? "builtin-led-off" : "builtin-led-on"});
    }
    return (
        <div className="display-flex justify-content-space-around">
            <div className="camera-icon">
                <i className="fas fa-camera"></i>
            </div>
            <div ref={ref => ledElement = ref} class="led" onClick={onLedClickHandler}></div>
        </div>
    )
}
export default BuiltinLed;
