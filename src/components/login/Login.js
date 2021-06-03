import React, {useState} from "react";
import "./Login.css";

const Login = ({macAddress, onMacAddressChange}) => {
    const [macAddressValue, setMacAddressValue] = useState(macAddress);

    const onFormSubmitHandler = (event) => {
        event.preventDefault();
        onMacAddressChange(macAddressValue);
    }

    return (
        <div>
            <div className="text-align-center">
                <small>
                Hi, I am Robo-G, Access me from anywhere!
                </small>
            </div>
           <form onSubmit={onFormSubmitHandler} className="centered">
                <div className="input-group">
                    <input
                        type="text"
                        value={macAddressValue}
                        onChange={(event) => setMacAddressValue(event.target.value)}
                        required
                        autoFocus
                    />
                    <span className="highlight"></span>
                    <span className="bar"></span>
                    <label> Enter Robo-G MAC Address </label>
                </div>
                <div>
                    <button type="submit">Submit</button>
                </div>
            </form>
        </div>
    )
}
export default Login;