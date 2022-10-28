/* MADE BY MAGDALENA */
import BottomNav from "../components/BottomNav";
import { Link } from "react-router-dom";
//import SettingsIcon from "@mui/icons-material/Settings";
import PersonIcon from '@mui/icons-material/Person';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import GppGoodOutlinedIcon from '@mui/icons-material/GppGoodOutlined';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import SettingsAccessibilityOutlinedIcon from '@mui/icons-material/SettingsAccessibilityOutlined';
import Footer from "../components/Footer";

export default function SettingsPage() {
  return (
    <section>
      <div className="settings-main">
        <div className="back-button-container">
          <Link to="/profile">
            <button type="button" className="button-back">
              BACK
            </button>
          </Link>
        </div>
        <div className="settings-holder">

          <div className="settings-item">
            <div className="settings-item-icon">
              <PersonIcon />
            </div>
            <div className="settings-item-text">
              <h2>Your Account</h2>
              <p>
                See information about your account, learn about your account
                deactivation options.
              </p>
            </div>
            <div className="settings-item-action">
              <p>&gt;</p>
            </div>
          </div>

          <div className="settings-item">
            <div className="settings-item-icon">
              <LockOutlinedIcon />
            </div>
            <div className="settings-item-text">
              <h2>Security And Account Access</h2>
              <p>
              Manage your account's security and keep track of your account's usage including apps that you have connected to your account.
              </p>
            </div>
            <div className="settings-item-action">
              <p>&gt;</p>
            </div>
          </div>

          <div className="settings-item">
            <div className="settings-item-icon">
              <GppGoodOutlinedIcon />
            </div>
            <div className="settings-item-text">
              <h2>Privacy and Safety</h2>
              <p>
              Manage what information you see and share on Trackit.
              </p>
            </div>
            <div className="settings-item-action">
              <p>&gt;</p>
            </div>
          </div>

          <div className="settings-item">
            <div className="settings-item-icon">
              <NotificationsNoneOutlinedIcon />
            </div>
            <div className="settings-item-text">
              <h2>Notifications</h2>
              <p>
              Select the kinds of notifications you get about your activities, interests, and recommendations.
              </p>
            </div>
            <div className="settings-item-action">
              <p>&gt;</p>
            </div>
          </div>
          
          <div className="settings-item">
            <div className="settings-item-icon">
              <SettingsAccessibilityOutlinedIcon />
            </div>
            <div className="settings-item-text">
              <h2>Accessibility, Display, And Languages</h2>
              <p>
              Manage how Trackit content is displayed to you.
              </p>
            </div>
            <div className="settings-item-action">
              <p>&gt;</p>
            </div>
          </div>
          
        </div>
      </div>
      <BottomNav />
      <Footer />
    </section>
  );
}
