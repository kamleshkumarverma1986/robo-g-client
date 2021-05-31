import { useRef } from "react";
import "./Header.css"
import Sidenav from "../sidenav/Sidenav";

const Header = () => {
    let sidenavElement = useRef(null);
    const openNav = () => {
        sidenavElement.childNodes[0].classList.toggle('open-sidenav');
    }

    return (
        <>
            <header className="site-header">
                <div className="menu" onClick={openNav}>
                    <div className="bar1"></div>
                    <div className="bar2"></div>
                    <div className="bar3"></div>
                </div>
                <span className="header-logo">Robo-G</span>
            </header>
            <div ref={ref => sidenavElement = ref}>
                <Sidenav />
            </div>
        </>
    )
}
export default Header;
