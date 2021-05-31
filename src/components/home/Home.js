import "./Home.css";
import {speakOutSpeech} from "../../utils/helper";
import ConnectRoboG from "../../components/connect-robo-g/ConnectRoboG";

const Home = () => {
  speakOutSpeech("");
  return (
    <>
      <div>
        <div className="text-align-center">
          <small>
            Hi, I am Robo-G, Access me from anywhere!
          </small>
        </div>
        <ConnectRoboG />
      </div>
    </>
  );
}
export default Home;
