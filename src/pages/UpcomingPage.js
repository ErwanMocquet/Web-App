import Cards from "../components/UpcomingCards.js";
import TopNav from "../components/TopNav";
import BottomNav from "../components/BottomNav";

export default function UpcomingPage () {
    return (
        <div>
            <TopNav />
            <BottomNav />
            <div className="upcoming-main">
                <Cards />
            </div>
        </div>
    )
}