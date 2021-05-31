import React, {useState, useEffect} from "react";
import "./SocketErrorHandler.css";

const SocketErrorHandler = ({socket, isConnected}) => {
    const [connectionError, setConnectionError] = useState(null); 
    const errorEvents = [
        'connect_error', 
        'connect_timeout',
        'reconnect',
        'reconnect_attempt',
        'reconnecting',
        'reconnect_error',
        'reconnect_failed',
        'disconnect',
    ];
    useEffect(() => {
        errorEvents.forEach( errorType => {
            socket.on(errorType, err => setConnectionError(errorType));
        });
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [socket]);

    if (connectionError && !isConnected) {
        return (
            <div className="socket-error-handler">
                <div>Sorry, There are seems to be an issue with the connection!</div>
                <p><small><b>Error:</b> {connectionError}</small></p>
            </div>
        )
    }
    return null;
}
export default SocketErrorHandler;