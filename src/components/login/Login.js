import React, { useState } from "react";
import "./Login.css";
import formSubmitAudio from "../../assets/wavs/form_submit.wav";

const Login = ({ macAddress, onMacAddressChange }) => {
  const [macAddressValue, setMacAddressValue] = useState(macAddress);
  const [formSubmitWav] = useState(new Audio(formSubmitAudio));

  const onFormSubmitHandler = (event) => {
    event.preventDefault();
    onMacAddressChange(macAddressValue);
    formSubmitWav.play();
  };

  return (
    <div className="text-align-center">
      <small className="tag-line"> Access me from anywhere! </small>

      <div>
        <h1 className="another-title">
          <b> Migo-WIFI Car</b>
        </h1>
      </div>
      <form onSubmit={onFormSubmitHandler} className="centered">
        <div className="enter-password-text">Enter Car Password</div>
        <div className="input-group">
          <input
            type="text"
            value={macAddressValue}
            onChange={(event) => setMacAddressValue(event.target.value)}
            required
            autoFocus
            className="password-input"
          />
          <span className="highlight"></span>
          <span className="bar"></span>
        </div>
        <div>
          <button type="submit" className="mac-address-submit">
            <label>Connect to WIFI Car</label>&nbsp; &nbsp;
            <i className="fas fa-arrow-right"></i>
          </button>
        </div>
      </form>
    </div>
  );
};
export default Login;
