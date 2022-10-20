/* MADE BY IGOR */
import SentimentSatisfiedAltIcon from '@mui/icons-material/SentimentSatisfiedAlt';
import greylogo from '../img/greylogo.png';
import {Link} from "react-router-dom"

export default function WelcomePage() {
    return (
        <div className="welcome-main">
            <div className="welcome-heading-cont">
                <h1 className="welcome-heading">Congratulations!</h1>
            </div>
            <div className="welcome-text-cont">
                <p className="welcome-text">You have successfully created an account!<br></br> Start your journey with series now</p>
            </div>
            <div className="welcome-img-cont">
                <SentimentSatisfiedAltIcon sx={{ fontSize: "7rem" }} />
            </div>
            <div className="welcome-logo-cont">
                <img src={greylogo} className="welcome-logo" alt="Trackit Logo" />
            </div>
            <div className="next-button-container">
                <Link to="/current">
                    <button type="button" className="button-next-beginning">NEXT</button>
                </Link>
            </div>
        </div>
    )
}