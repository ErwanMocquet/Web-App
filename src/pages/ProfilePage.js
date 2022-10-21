/* MADE BY MAGDALENA */
import { Link, NavLink } from "react-router-dom";
import SettingsIcon from "@mui/icons-material/Settings";
import KateProfile from "../img/karuno.svg";
import BottomNav from "../components/BottomNav";

export default function ProfilePage() {
  return (
    <section>
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

        <div className="profile-statistics">
            <div className="profile-statistics-stats-outer">
            <h1> Statistics </h1>
            <div className="profile-statistics-stats">
            <div className="left"> Time: 230 </div> |
            <div className="center">Series: 23 </div> |
            <div className="right"> Episodes: 120 </div>
          </div>
          </div>
          <div className="profile-statistics-badges">
            <div>
              <img src={KateProfile} alt="profile" />
            </div>
            <div>
              <img src={KateProfile} alt="profile" />
            </div>
            <div>
              <img src={KateProfile} alt="profile" />
            </div>
            <div>
              <img src={KateProfile} alt="profile" />
            </div>
            <div>
              <img src={KateProfile} alt="profile" />
            </div>
          </div>
        </div>

        <div className="profile-history">
          <h1> History </h1>
          <div className="profile-history-cards-outer">
            <div className="profile-history-cards">
              <div className="profile-history-card"></div>
              <div className="profile-history-card"></div>
              <div className="profile-history-card"></div>
              <div className="profile-history-card"></div>
            </div>
          </div>
        </div>
      </div>
      <BottomNav />
    </section>
  );
}
