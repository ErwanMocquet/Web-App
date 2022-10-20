/* MADE BY MAGDANELA */
import {Link} from "react-router-dom"
import SettingsIcon from '@mui/icons-material/Settings';
import KateProfile from "../img/karuno.svg"
import BottomNav from "../components/BottomNav"

export default function ProfilePage() {

    return (
        <section>
            
    <div className="settings-icon-outer">
        <div className="settings-icon">
            <SettingsIcon />
        </div>
    </div>

    <div className="profile-page">
    <div className="profile-image">
        <img src={KateProfile} alt="profile"/>   
            <div className="profile-bio">
                <h1 className="profile-username">Karuno Kami</h1>
                <p>Series Crusher</p>
                    <div className="profile-followers">
                        
                        <Link to="/following"><button type="button" className="follow-button">Following 11</button></Link>

                         | 
                        
                        <Link to="/followers"><button type="button" className="follow-button"><p>Followers 23</p></button></Link>

                    </div>
            </div>
    </div>
    
    <div className="profile-section-line"></div>


    <div className="profile-statistics">
        <div className="profile-statistics-stats">
            <h1> Statistics </h1>
            <p> Time 230 | Series 23 | Episodes 120 </p>
        </div>
            <div className="profile-statistics-badges">
                <div>Badge1</div>
                <div>Badge2</div>
                <div>Badge3</div>
                <div>Badge4</div>
                <div>Badge5</div>
            </div>
        </div>

    <div className="profile-history">
        <h1> History </h1>
        <p>*Cards*</p>
    </div>
    </div>
    <BottomNav />
    </section>
    )
}