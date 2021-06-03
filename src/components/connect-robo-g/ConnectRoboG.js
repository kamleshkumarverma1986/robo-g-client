import React, {useState, useEffect} from "react";
import "./ConnectRoboG.css";
import Connecting from "../../components/connecting/Connecting";
import socketIOClient from "socket.io-client";
import Movement from "../../components/movement/Movement";
import SocketErrorHandler from "../../components/socket-error-handler/SocketErrorHandler";

const socket = socketIOClient(process.env.REACT_APP_SERVER_BASE_URL, {
    path: "/api/v1/robo-g-connect/socket.io"
});

const ConnectRoboG = () => {
    const [isRoboG_Connected, setRoboG_Connected] = useState(false);
    
    useEffect(() => {
        
        socket.on("socket-connection-established", data => {
            socket.emit("REGISTER-FE-CLIENT", {
                NodeMCU_MacAddress: "10:52:1C:02:05:4E"
            }, (errorObj) => {
                if (!errorObj.error) {
                    setRoboG_Connected(true);
                } else {
                    alert(errorObj.message);
                }
            });
        });

        return () => socket.disconnect();
    }, []);

    return (
        <div>
            <SocketErrorHandler socket={socket} isConnected={isRoboG_Connected}/>
            {!isRoboG_Connected && <Connecting />}
            {isRoboG_Connected && <Movement socket={socket}/>}
        </div>
    )
}
export default ConnectRoboG;