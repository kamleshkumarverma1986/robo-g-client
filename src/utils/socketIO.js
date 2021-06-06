import socketIOClient from "socket.io-client";

export const createSocketConnection = () => {
    // http://34.122.135.8
    // process.env.REACT_APP_SERVER_BASE_URL
    return socketIOClient("http://34.122.135.8", {
        path: "/api/v1/robo-g-connect/socket.io"
    });
}
