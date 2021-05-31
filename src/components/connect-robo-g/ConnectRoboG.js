import React, {useState, useEffect} from "react";
import "./ConnectRoboG.css";
import Connecting from "../../components/connecting/Connecting";
import socketIOClient from "socket.io-client";
import Movement from "../../components/movement/Movement";
import SocketErrorHandler from "../../components/socket-error-handler/SocketErrorHandler";

const socket = socketIOClient(process.env.REACT_APP_SERVER_BASE_URL, {
    path: "/api/v1/robo-g-connect/socket.io",
    query: { "name": "testing"}
});

const ConnectRoboG = () => {
    const [isRoboG_Connected, setRoboG_Connected] = useState(false);
    
    useEffect(() => {
        
        //on connection establish
        socket.on("connected", data => {
            setRoboG_Connected(true);
            console.log("this is the data received from server:", data);
        });

        socket.on("movement", (data) => {
            console.log("this is coming bro:", data);
        });

        // Clean up the effect
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