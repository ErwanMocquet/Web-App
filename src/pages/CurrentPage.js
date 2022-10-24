import Cards from "../components/CurrentCards.js";
import BottomNav from "../components/BottomNav";
import TopNav from "../components/TopNav";
import {Link} from "react-router-dom";

export default function CurrentPage () {
    return (
        <div>
            <TopNav className="topnav" />
            <BottomNav />
            <div className="current-main">
                <h1 className="first-heading-current">Currently Watching</h1>
                <Link to="/description"><Cards /></Link>
                <h1 className="heading-current">Not watched for a while</h1>
                <Cards />
                <h1 className="heading-current">Stopped</h1>
                <Cards />
                <Cards />
            </div>
        </div>
    )
}