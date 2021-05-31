import { useRef } from "react";
import "./Sidenav.css";
import { Link } from "react-router-dom";

const Sidenav = () => {
    let sidenavElement = useRef(null);
    const closeNav = () => {
        sidenavElement.classList.toggle('open-sidenav');
    }
    return (
        <div ref={ref => sidenavElement = ref} className="sidenav">
            <div onClick={closeNav} className="display-flex-column">
                <div className="close-button">
                    <i className="fas fa-times"></i>
                </div>
                <div>
                    <Link to="/">
                        <div>Home</div>
                        <div className="caution">Connect with your Robo-G</div>
                    </Link>
                    <Link to="/about">
                        <div>About</div>
                        <div className="caution">Lets know more about us!</div>
                    </Link>
                </div>
             </div>
        </div>
    )
}
export default Sidenav;
