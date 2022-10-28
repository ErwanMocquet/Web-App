/* MADE BY MAGDALENA */
import { Link, NavLink } from "react-router-dom";
import SettingsIcon from "@mui/icons-material/Settings";
import KateProfile from "../img/karuno.svg";
import BottomNav from "../components/BottomNav";
import fantastic from "../img/fantasticbadge.svg";
import slippery from "../img/slipperybadge.svg";
import fancy from "../img/fancybadge.svg";
import beary from "../img/bearybadge.svg";
import TopDeskNav from "../components/TopDeskNav";
import HistoryCard from "../components/HistoryCards.js";

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

            <div className="profile-statistics">
              <div className="profile-statistics-stats-outer">
                <h1> Statistics </h1>
                <div className="profile-statistics-stats">
                  {" "}
                  <div className="left">Time: 230</div> |{" "}
                  <div className="center">Series: 22</div> |{" "}
                  <div className="right">Episodes: 120</div>{" "}
                </div>
              </div>
              <div className="profile-statistics-badges">
                <div>
                  <img src={fantastic} alt="fantastic-badge" />
                </div>
                <div>
                  <img src={slippery} alt="slippery-badge" />
                </div>
                <div>
                  <img src={fancy} alt="fancy-badge" />
                </div>
                <div>
                  <img src={beary} alt="beary-badge" />
                </div>
                <div>
                  <img src={fantastic} alt="fantastic-badge" />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="profile-page-right">
          <div className="profile-history">
            <h1> History </h1>

            <div className="profile-history-cards-outer">
              <div className="profile-history-cards">
                <div className="profile-history-card">
                  <HistoryCard />
                </div>
                <div className="profile-history-card">
                  <HistoryCard />
                </div>
                <div className="profile-history-card">
                  <HistoryCard />
                </div>
                <div className="profile-history-card">
                  <HistoryCard />
                </div>
                <div className="profile-history-card">
                  <HistoryCard />
                </div>
                <div className="profile-history-card">
                  <HistoryCard />
                </div>
                <div className="profile-history-card">
                  <HistoryCard />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <BottomNav />
    </section>
  );
}
