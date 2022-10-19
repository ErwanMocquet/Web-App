import {Link} from "react-router-dom"
import greylogo from "../img/greylogo.png"

export default function LandingPage() {
    return(
        <section>
            <div className="logo-landing-container">
                <img className="logo-landing" src={greylogo} alt="TrackIt Logo"></img>
            </div>
            <div className="text-landing-container">
                <h1 className="text-landing">Welcome to TrackIt!<br></br>The app where you track your series!</h1>
            </div>
            <div className="button-landing-container">
                <Link to="/login">
                    <button type="button" className="button-landing">Login</button>
                </Link>
                <br className="empty-div"></br>
                <Link to="/signup">
                    <button type="button" className="button-landing">Sign Up</button>
                </Link>
            </div>
        </section>
    )
}