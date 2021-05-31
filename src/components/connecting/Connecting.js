import { useEffect, useState } from "react";
import "./Connecting.css";

const Connecting = () => {
    const [show, setShow] = useState(false);
    useEffect(() => {
        const timeId = setTimeout(() => {
            setShow(true)
        }, 1000 * 5); // 5 Seconds wait and than show the message
        return () => {
            clearTimeout(timeId)
        }
    }, []);
    return (
        <div className="centered">
            <p>Connecting..</p>
            {show && (
                <small> Please be patient with me!. We are connecting with Robo-G!</small>
            )}
        </div>
    )
}
export default Connecting;