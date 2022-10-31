/* MADE BY IGOR */
import logoplain from "../img/logoplain.png";
import { NavLink, Link } from "react-router-dom";

export default function TopDeskNav() {
    return (
        <div className="topdesk-general-cont desktop">
            <div className="topdesk-nav">
                <div className="topdesk-logo-cont">
                    <Link to="/current"><img src={logoplain} alt="TrackIt logo" className="topdesk-logo"></img></Link>
                </div>
                <div className="topdesk-links">
                    <NavLink to="/current" className="topdesk-navlink" activeclassname="active">Home</NavLink>
                    <NavLink to="/explore" className="topdesk-navlink" activeclassname="active">Explore</NavLink>
                    <NavLink to="/profile" className="topdesk-navlink" activeclassname="active">Profile</NavLink>
                </div>
            </div>
        </div>
    )
}