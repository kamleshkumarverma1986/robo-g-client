import "./ControlButtons.css";

const ControlButtons = ({ socket, resetLogin }) => {
  const onDisconnectHandler = () => {
    socket.disconnect();
    resetLogin();
  };
  return (
    <div>
      <div className="display-flex justify-content-center">
        <button className="movement-btn" onClick={onDisconnectHandler}>
          <i className="fa fa-sign-out" aria-hidden="true"></i>
        </button>
      </div>
    </div>
  );
};
export default ControlButtons;
