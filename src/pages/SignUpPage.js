/* MADE BY ERWAN */
import {Link} from "react-router-dom";
import ContinueWith from "../components/ContinueWith";
import AddAPhotoIcon from '@mui/icons-material/AddAPhoto';

export default function LoginPage() {
    return (
        <section className="loginpage-main">
                <div className="photo-signup-container">
                    <AddAPhotoIcon sx={{ fontSize: "7rem" }} className="photo-signup"/>
                </div>
                <div className="input-login-container"> 
                    <label htmlFor="inputfield-username" className="input-label">Username:</label>
                    <input type="text" className="input-field" id="inputfield-username" required/><br></br>
                    <label htmlFor="inputfield-username" className="input-label">Email:</label>
                    <input type="text" className="input-field" id="inputfield-username" required/><br></br>
                    <label htmlFor="inputfield-username" className="input-label">Password:</label>
                    <input type="text" className="input-field" id="inputfield-username" required/>
                </div>
                <div className="continue-with-container">
                    <ContinueWith></ContinueWith>
                </div>
                <div className="next-button-container">
                    <Link to="/welcome">
                        <button type="button" className="button-next-beginning">NEXT</button>
                    </Link>
                </div>
        </section>
    )
};