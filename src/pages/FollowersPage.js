/* MADE BY MAGDANELA */
import {Link} from "react-router-dom"
import SettingsIcon from '@mui/icons-material/Settings';
import KateProfile from "../img/karuno.svg"

export default function FollowersPage() {
return (
    <section>
    <div>
    <div className="settings-icon">
        <SettingsIcon />
    </div>
</div>

<div className="profile-image">
    <img src={KateProfile} alt="profile" />   
        <div className="profile-bio">
            <h1 className="profile-username">Karuno Kami</h1>
            <p>Series Crusher</p>
                <div className="profile-followers">
                    
                    <Link to="/following"><button type="button">Following 11</button></Link>

                    <p> | </p>
                    
                    <Link to="/followers"><button type="button"><p>Followers 23</p></button></Link>

                </div>
        </div>
</div>

<div className="profile-section-line"></div>

    <div className="followers-list">
        <div>Followers 23</div>
                
                <div className="back-button-container">
                    <Link to="/profile">
                        <button type="button" className="button-back">BACK</button>
                    </Link>
                </div>


    </div>

</section>
)
}