import React, {useState, useEffect} from "react";
import "./ConnectRoboG.css";
import { createSocketConnection } from "../../utils/socketIO";
import Connecting from "../../components/connecting/Connecting";
import Movement from "../../components/movement/Movement";
import SocketErrorHandler from "../../components/socket-error-handler/SocketErrorHandler";

const ConnectRoboG = ({macAddress}) => {
    const [socketIO, setSocketIO] = useState(null);
    const [isRoboG_Connected, setRoboG_Connected] = useState(false);
    const [error, setError] = useState(null); 
    
    useEffect(() => {
        const socket = createSocketConnection();
        setSocketIO(socket);
        socket.on("socket-connection-established", () => {
            socket.emit("REGISTER-FRONT-END-CLIENT", {
                NodeMCU_MacAddress: macAddress
            }, (errorObj) => {
                if (!errorObj.error) {
                    setRoboG_Connected(true);
                } else {
                    setError(errorObj.message);
                }
            });
        });
        return () => socket.disconnect();
    }, [macAddress]);

    const onErrorHandler = (error) => {
        setError(error);
    }

    if(!socketIO) {
        return null;
    }

    return (
        <div>
            {<SocketErrorHandler socket={socketIO} onError={onErrorHandler}/>}
            {!isRoboG_Connected && !error && <Connecting />}
            {(!isRoboG_Connected && error) && (
                <div className="centered">{error}</div>
            )}
            {isRoboG_Connected && <Movement socket={socketIO} />}
        </div>
    )
}
export default ConnectRoboG;