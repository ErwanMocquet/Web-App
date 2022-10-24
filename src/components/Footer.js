import logoplain from "../img/logoplain.png";
import { Link } from "react-router-dom";

export default function Footer() {
    return (
        <div className="footer-main desktop">
            <div className="footer-logo-cont">
                <img src={logoplain} alt="TrackIt logo" className="footer-logo"></img>
            </div>
            <div className="footer-links-cont">
                <Link to="#">Privacy policy</Link>
                <Link to="#">Terms of use</Link>
                <Link to="#">Supported devices</Link>
                <Link to="#">Help center</Link>
            </div>
        </div>
    )
}