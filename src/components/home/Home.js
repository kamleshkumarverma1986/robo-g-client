import React, {useState} from "react";
import "./Home.css";
import Login from "../../components/login/Login";
import {defaultMacAddress} from "../../utils/defaultData";
import ConnectRoboG from "../../components/connect-robo-g/ConnectRoboG";

const Home = () => {
  const [macAddress, setMacAddress] = useState(defaultMacAddress.data);
  const [isUserLogin, setUserLogin] = useState(false);
  
  const onMacAddressChangeHandler = (macAddress) => {
    setMacAddress(macAddress);
    setUserLogin(true);
    defaultMacAddress.data = macAddress;
  }

  return (
    <div>
      {!isUserLogin && <Login macAddress={macAddress} onMacAddressChange={onMacAddressChangeHandler} />}
      {isUserLogin && <ConnectRoboG macAddress={macAddress}/>}
    </div>
  );
}
export default Home;
