import React, {useState} from "react";
import "./Login.css";
import keyStrokeAudio from "../../assets/wavs/key_stroke.wav";
import formSubmitAudio from "../../assets/wavs/form_submit.wav";

const Login = ({macAddress, onMacAddressChange}) => {
    const [macAddressValue, setMacAddressValue] = useState(macAddress);
    const [keyStrokeWav] = useState(new Audio(keyStrokeAudio));
    const [formSubmitWav] = useState(new Audio(formSubmitAudio));

    const onFormSubmitHandler = (event) => {
        event.preventDefault();
        onMacAddressChange(macAddressValue);
        formSubmitWav.play();
    }

    return (
        <div className="text-align-center">
           <small> Access me from anywhere! </small>
           <form onSubmit={onFormSubmitHandler} className="centered display-flex">
                <div className="input-group">
                    <input
                        type="text"
                        value={macAddressValue}
                        onChange={(event) => {
                            setMacAddressValue(event.target.value);
                            keyStrokeWav.play();
                        }}
                        required
                        autoFocus
                    />
                    <span className="highlight"></span>
                    <span className="bar"></span>
                    <label> Enter Robo-G MAC Address </label>
                </div>
                <button type="submit" className="mac-address-submit">
                    <i className="fas fa-arrow-right"></i>
                </button>
            </form>
        </div>
    )
}
export default Login;