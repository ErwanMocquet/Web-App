/* MADE BY MAGDANELA */
import { Link, NavLink } from "react-router-dom";
import SettingsIcon from "@mui/icons-material/Settings";
import KateProfile from "../img/karuno.svg";
import BottomNav from "../components/BottomNav";
import TuneIcon from "@mui/icons-material/Tune";
import TopDeskNav from "../components/TopDeskNav";

export default function ProfilePage() {
  return (
    <section className="profile-page-container">
      <TopDeskNav />

      <div className="settings-icon-outer settings-icon-mobile">
        <div className="settings-icon">
          <NavLink to="/settings">
            <SettingsIcon />
          </NavLink>
        </div>
      </div>

      <div className="profile-page">
        <div className="profile-page-left">
          <div className="profile-image">
            <div className="settings-icon-outer settings-icon-desktop">
              <div className="settings-icon">
                <NavLink to="/settings">
                  <SettingsIcon />
                </NavLink>
              </div>
            </div>

            <img src={KateProfile} alt="profile" />
          </div>

          <div className="profile-bio-outer">
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

            <hr className="profile-section-line" />

            <div className="profile-page-right">
              <div className="profile-history">
                <h1> Followers </h1>
              </div>
            </div>

            <div className="back-button-container">
              <Link to="/profile">
                <button type="button" className="button-back">
                  BACK
                </button>
              </Link>
            </div>
          </div>

          <div className="search-container2">
            <form className="search-form">
              <input
                type="search"
                className="search-input"
                placeholder="Search..."
              />
              <button type="submit" className="search-button">
                Search
              </button>
            </form>
            <TuneIcon className="filter-icon" sx={{ fontSize: "2.5rem" }} />
          </div>
        </div>

        <div className="profile-page-right">
          <div className="example-user-list-container">
            <div className="follower-list-item">
              <div className="settings-item-icon">
                <img src={KateProfile} alt="profile" />
              </div>
              <div className="settings-item-text">
                <h2>Example user</h2>
                <p>Series Crusher</p>
              </div>
              <div className="seeprofile-button">
                <Link to="/profile">
                  <button type="button" className="button-seeprofile">
                    SEE PROFILE
                  </button>
                </Link>
              </div>
            </div>
          </div>

          <div className="example-user-list-container">
            <div className="follower-list-item">
              <div className="settings-item-icon">
                <img src={KateProfile} alt="profile" />
              </div>
              <div className="settings-item-text">
                <h2>Example user</h2>
                <p>Series Crusher</p>
              </div>
              <div className="seeprofile-button">
                <Link to="/profile">
                  <button type="button" className="button-seeprofile">
                    SEE PROFILE
                  </button>
                </Link>
              </div>
            </div>
          </div>

          <div className="example-user-list-container">
            <div className="follower-list-item">
              <div className="settings-item-icon">
                <img src={KateProfile} alt="profile" />
              </div>
              <div className="settings-item-text">
                <h2>Example user</h2>
                <p>Series Crusher</p>
              </div>
              <div className="seeprofile-button">
                <Link to="/profile">
                  <button type="button" className="button-seeprofile">
                    SEE PROFILE
                  </button>
                </Link>
              </div>
            </div>
          </div>

          <div className="example-user-list-container">
            <div className="follower-list-item">
              <div className="settings-item-icon">
                <img src={KateProfile} alt="profile" />
              </div>
              <div className="settings-item-text">
                <h2>Example user</h2>
                <p>Series Crusher</p>
              </div>
              <div className="seeprofile-button">
                <Link to="/profile">
                  <button type="button" className="button-seeprofile">
                    SEE PROFILE
                  </button>
                </Link>
              </div>
            </div>
          </div>

          <div className="example-user-list-container">
            <div className="follower-list-item">
              <div className="settings-item-icon">
                <img src={KateProfile} alt="profile" />
              </div>
              <div className="settings-item-text">
                <h2>Example user</h2>
                <p>Series Crusher</p>
              </div>
              <div className="seeprofile-button">
                <Link to="/profile">
                  <button type="button" className="button-seeprofile">
                    SEE PROFILE
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <BottomNav />
    </section>
  );
}
