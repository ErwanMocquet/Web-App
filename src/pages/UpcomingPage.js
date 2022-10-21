import Cards from "../components/UpcomingCards.js";
import TopNav from "../components/TopNav";
import BottomNav from "../components/BottomNav";

export default function UpcomingPage () {
    return (
        <div>
            <TopNav />
            <BottomNav />
            <div className="current-main">
                <Cards />
            </div>
        </div>
    )
}