import Cards from "../components/WishlistCards.js";
import BottomNav from "../components/BottomNav";
import TopNav from "../components/TopNav";
import Footer from "../components/Footer.js";
import TopDeskNav from "../components/TopDeskNav.js";
import SecondDeskNav from "../components/SecondDeskNav.js";

export default function WishlistPage () {
    return (
        <div>
            <TopDeskNav />
            <TopNav />
            <BottomNav />
            <div className="wishlist-main">
                <SecondDeskNav />
                <Cards />
            </div>
            <Footer />
        </div>
    )
}