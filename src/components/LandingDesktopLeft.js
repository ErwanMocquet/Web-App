/* MADE BY IGOR */
import logoplain from "../img/logoplain.png";
export default function LandingDesktopLeft() {
    return (
        <div className="landingpage-left">
            <div className="landing-welcome-cont">
                <h1 className="landing-welcome-heading">Welcome to</h1>
            </div>
            <div className="landing-welcome-logo">
                <img className="logo-landing" src={logoplain} alt="TrackIt Logo"></img>
            </div>
        </div>
    )
}