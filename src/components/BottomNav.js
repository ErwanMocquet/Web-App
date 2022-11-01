/* MADE BY IGOR */ 
import { NavLink } from "react-router-dom";
import HomeIcon from '@mui/icons-material/Home';
import ExploreIcon from '@mui/icons-material/Explore';
import PersonIcon from '@mui/icons-material/Person';

export default function BottomNav() {
    return (
        <div className="nav-cont mobile">
            <div className="nav-singlebutton-cont" id="navfirst">
                <NavLink to="/current" end>
                    <HomeIcon className="nav-icon" sx={{ fontSize: "2.5em" }} />
                </NavLink>
            </div>
            <span className="nav-interline"></span>
            <div className="nav-singlebutton-cont">
                <NavLink to="/explore" end>
                    <ExploreIcon className="nav-icon" sx={{ fontSize: "2.5em" }} />
                </NavLink>
            </div>
            <span className="nav-interline"></span>
            <div className="nav-singlebutton-cont" id="navlast">
                <NavLink to="/profile" end>
                    <PersonIcon className="nav-icon" sx={{ fontSize: "2.5em" }} />
                </NavLink>
            </div>
        </div>
    )
}