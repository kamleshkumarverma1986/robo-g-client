import socketIOClient from "socket.io-client";

export const createSocketConnection = () => {
    // http://34.122.135.8
    return socketIOClient(process.env.REACT_APP_SERVER_BASE_URL, {
        path: "/api/v1/robo-g-connect/socket.io"
    });
}

