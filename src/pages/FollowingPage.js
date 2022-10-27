/* MADE BY MAGDANELA */
import { Link, NavLink } from "react-router-dom";
import SettingsIcon from "@mui/icons-material/Settings";
import KateProfile from "../img/karuno.svg";
import BottomNav from "../components/BottomNav";
import TuneIcon from '@mui/icons-material/Tune';

export default function ProfilePage() {
  return (
    <section>
      <BottomNav />
      <div className="settings-icon-outer">
        <div className="settings-icon">
          <NavLink to="/settings">
            <SettingsIcon />
          </NavLink>
        </div>
      </div>

      <div className="profile-page">
        <div className="profile-image">
          <img src={KateProfile} alt="profile" />
          <div className="profile-bio">
            <h1 className="profile-username">Karuno Kami</h1>
            <p>Series Crusher</p>
            <div className="profile-followers">
              <Link to="/following">
                <button type="button" className="follow-button">
                  Following 11
                </button>
              </Link>

              <span className="profile-separator">|</span>

              <Link to="/followers">
                <button type="button" className="follow-button">
                  <p>Followers 23</p>
                </button>
              </Link>
            </div>
          </div>
        </div>

        <hr className="profile-section-line" />
                

         <div className="following-back-outer">   
        <div className="profile-statistics-stats-outer">
            <h1> Following </h1>
            </div>

                <div className="back-button-container">
                    <Link to="/profile">
                        <button type="button" className="button-back">BACK</button>
                    </Link>
                </div>
            </div>  

                <div className="search-container">
                <form className="search-form">
                    <input type="search" className="search-input" placeholder="Search..."/>
                    <button type="submit" className="search-button">Search</button>
                </form>
                <TuneIcon className="filter-icon" sx={{ fontSize: "2.5rem" }}/>
            </div>
    
    </div>
</section>
)
}