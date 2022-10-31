/* MADE BY ERWAN AND IGOR (dektop)*/
import {Link} from "react-router-dom";
import greylogo from "../img/greylogo.png";
import LandingDesktopLeft from "../components/LandingDesktopLeft";

export default function LandingPage() {
    return(
        <section className="landing-main">
            <div className="landingpage-right">
                <div className="logo-landing-container">
                    <img className="logo-landing mobile" src={greylogo} alt="TrackIt Logo"></img>
                </div>
                <div className="text-landing-container">
                    <h1 className="text-landing mobile">Welcome</h1>
                </div>
                <div className="button-landing-container">
                    <Link to="/login">
                        <button type="button" className="button-landing bl-two">Login</button>
                    </Link>
                    <br className="empty-div"></br>
                    <Link to="/signup">
                        <button type="button" className="button-landing bl-one">Sign Up</button>
                    </Link>
                </div>
            </div>
            <LandingDesktopLeft />
        </section>
    )
}