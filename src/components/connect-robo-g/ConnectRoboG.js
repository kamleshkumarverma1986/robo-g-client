import React, {useState, useEffect} from "react";
import "./ConnectRoboG.css";
import { createSocketConnection } from "../../utils/socketIO";
import Connecting from "../../components/connecting/Connecting";
import Movement from "../../components/movement/Movement";
import SocketErrorHandler from "../../components/socket-error-handler/SocketErrorHandler";

const ConnectRoboG = ({macAddress}) => {
    const [socketIO, setSocketIO] = useState(null);
    const [isRoboG_Connected, setRoboG_Connected] = useState(false);
    
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
                    console.log(errorObj.message);
                }
            });
        });
        return () => socket.disconnect();
    }, [macAddress]);

    return (
        <div>
            {socketIO && <SocketErrorHandler socket={socketIO} isConnected={isRoboG_Connected}/>}
            {socketIO && !isRoboG_Connected && <Connecting />}
            {socketIO && isRoboG_Connected && <Movement socket={socketIO}/>}
        </div>
    )
}
export default ConnectRoboG;