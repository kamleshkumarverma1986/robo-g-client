import "./CenterButton.css";

const CenterButton = ({onMovement}) => {
    return (
        <button className="center-action-button" onClick={() => onMovement("center")}></button>
    )
}
export default CenterButton;