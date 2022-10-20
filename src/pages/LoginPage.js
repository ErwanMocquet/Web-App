/* MADE BY ERWAN */
import {Link} from "react-router-dom";
import greylogo from "../img/greylogo.png";
import ContinueWith from "../components/ContinueWith";

export default function LoginPage() {
    return (
        <section className="loginpage-main">
                <div className="logo-landing-container">
                    <img className="logo-landing" src={greylogo} alt="TrackIt Logo"></img>
                </div>
                <div className="input-login-container"> 
                    <label htmlFor="inputfield-username" className="input-label">Username:</label>
                    <input type="text" className="input-field" id="inputfield-username" required/><br></br>
                    <label htmlFor="inputfield-username" className="input-label">Password:</label>
                    <input type="text" className="input-field" id="inputfield-username" required/>
                </div>
                <div className="continue-with-container">
                    <ContinueWith></ContinueWith>
                </div>
                <div className="next-button-container">
                    <Link to="/current">
                        <button type="button" className="button-next-beginning">NEXT</button>
                    </Link>
                </div>
        </section>
    )
};