import {useEffect} from "react";
import "./SocketErrorHandler.css";

const SocketErrorHandler = ({socket, onError}) => {
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
            socket.on(errorType, error => onError(errorType));
        });
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [socket]);

    return null;
}
export default SocketErrorHandler;