import "./CenterButton.css";

const CenterButton = ({onMovement}) => {
    return (
        <button className="center-action-button" onClick={() => onMovement("center")}>LED ON</button>
    )
}
export default CenterButton;