import Cards from "../components/UpcomingCards.js";
import TopNav from "../components/TopNav";
import BottomNav from "../components/BottomNav";
import Footer from "../components/Footer.js";
import SecondDeskNav from "../components/SecondDeskNav.js";
import TopDeskNav from "../components/TopDeskNav.js";

export default function UpcomingPage () {
    return (
        <div>
            <TopDeskNav />
            <TopNav />
            <BottomNav />
            <div className="upcoming-main">
                <SecondDeskNav />
                <Cards />
            </div>
            <Footer />
        </div>
    )
}