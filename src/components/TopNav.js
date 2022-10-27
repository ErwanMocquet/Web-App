/* MADE BY IGOR */
import { NavLink } from "react-router-dom";

export default function TopNav() {
    return (
        <div className="topnav mobile">
            <div className="topnav-cont">
                <div className="topnav-singleitem-cont">
                    <NavLink to="/current" className="topnav-link" activeclassname="active">Current</NavLink>
                </div>
                <div className="topnav-interline"></div>
                <div className="topnav-singleitem-cont">
                    <NavLink to="/upcoming" className="topnav-link" activeclassname="active">Upcoming</NavLink>
                </div>
                <div className="topnav-interline"></div>
                <div className="topnav-singleitem-cont">
                    <NavLink to="/wishlist" className="topnav-link" activeclassname="active">Wishlist</NavLink>
                </div>
            </div>
        </div>
    )
}