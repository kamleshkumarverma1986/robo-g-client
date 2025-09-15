import React, { useState, useEffect } from "react";
import "./ConnectRoboG.css";
import { createSocketConnection } from "../../utils/socketIO";
import Connecting from "../../components/connecting/Connecting";
import Movement from "../../components/movement/Movement";
import Camera from "../../components/camera/Camera";
import Speed from "../../components/speed/Speed";
import SocketErrorHandler from "../../components/socket-error-handler/SocketErrorHandler";
import ControlButtons from "../../components/control-buttons/ControlButtons";
import VoiceToText from "../../components/speech-to-text/SpeechToText";

const ConnectRoboG = ({ macAddress, resetLogin }) => {
  const [socketIO, setSocketIO] = useState(null);
  const [isRoboG_Connected, setRoboG_Connected] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const socket = createSocketConnection();
    setSocketIO(socket);
    socket.on("socket-connection-established", () => {
      socket.emit(
        "REGISTER-FRONT-END-CLIENT",
        {
          clientName: "front-end",
          NodeMCU_MacAddress: macAddress,
        },
        (errorObj) => {
          if (!errorObj.error) {
            setRoboG_Connected(true);
          } else {
            setError(errorObj.message);
          }
        }
      );
    });
    return () => socket.disconnect();
  }, [macAddress]);

  const onErrorHandler = (error) => {
    setError(error);
  };

  if (!socketIO) {
    return null;
  }

  const onRetry = () => {
    resetLogin();
  };

  return (
    <div>
      {<SocketErrorHandler socket={socketIO} onError={onErrorHandler} />}
      {!isRoboG_Connected && !error && <Connecting />}
      {!isRoboG_Connected && error && (
        <div className="centered">
          <div>
            <div className="error-show"> {error} </div>
            <button className="retry-button" onClick={onRetry}>
              Try Again
            </button>
          </div>
        </div>
      )}
      {isRoboG_Connected && (
        <div>
          <Camera />
          <Movement socket={socketIO} />
          <Speed socket={socketIO} />
          <ControlButtons socket={socketIO} resetLogin={resetLogin} />
          <VoiceToText socket={socketIO} />
        </div>
      )}
    </div>
  );
};
export default ConnectRoboG;
